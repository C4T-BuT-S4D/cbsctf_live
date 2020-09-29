<template>
    <div class="terminal">
        <div class="command-list">
            <div class="command" v-for="(command, index) of history" :key="index">
                <span class="prompt" v-if="command.isCommand === true">{{ prompt }}</span>
                <span class="fake-prompt" v-else></span>
                <form class="user-input-wrapper" v-if="command.isCommand === true">
                    <input v-model="history[index].command" type="text" class="user-input" disabled>
                </form>
                <div class="tg" v-else-if="command.isCommand === 'tg'">
                    <vue-telegram-login
                        mode="redirect"
                        :redirect-url="url"
                        telegram-login="cbsctf_regbot"
                        :userpic="true"
                        requestAccess="write"
                    />
                </div>
                <div class="error" v-else-if="command.isCommand === 'err'">
                    {{ command.command }}
                </div>
                <pre class="output" v-else v-html="command.command"></pre>
            </div>
        </div>
        <div class="command-input">
            <span class="prompt">{{ prompt }}</span>
            <form @submit.prevent="enterCommand" class="user-input-wrapper">
                <input v-model="command" type="text" class="user-input" ref="input" maxlength="44" placeholder="Type help to get help">
            </form>
        </div>
    </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';
import { regApiURL } from "@/config";

export default {
    components: { vueTelegramLogin },

    data: function() {
        return {
            history: [],
            prompt: '❯',
            command: '',
            commands: ['help', 'auth', 'solo', 'register', 'show_reg', 'join', 'leave', 'get_status', 'set_status', 'list_reg', 'del_reg'],
            url: '',
            admin: false,
            suggestHistory: [],
            suggestPtr: -1,
        };
    },

    created: async function () {
        this.url = (window.location.pathname + '/tg').replaceAll('//', '/');

        const { data: { game_role: gameRole } } = (await this.$http.get('/state/'));
        this.admin = gameRole === 'admin';
    },

    mounted: function() {
        this.$refs.input.addEventListener('keydown', this.keydown);
    },

    beforeDestroy: function() {
        this.$refs.input.removeEventListener('keydown', this.keydown);
    },

    methods: {
        keydown: function(e) {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                if (this.suggestPtr > 0) {
                    this.suggestPtr -= 1;
                }

                if (this.suggestPtr < this.suggestHistory.length) {
                    this.command = this.suggestHistory[this.suggestPtr];
                }
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (this.suggestPtr + 1 < this.suggestHistory.length) {
                    this.suggestPtr += 1;
                }

                this.command = this.suggestHistory[this.suggestPtr];
            } else if (e.key === "Tab") {
                e.preventDefault();
                this.autocomplete();
            }
        },

        autocomplete: function() {
            let cnt = 0;
            let mtch = '';
            for (const cmd of this.commands) {
                if (cmd.startsWith(this.command)) {
                    cnt += 1;
                    mtch = cmd;
                }
            }

            if (cnt === 1) {
                this.command = mtch;
            }
        },

        logCommand: function(text) {
            this.history.unshift({
                command: text,
                isCommand: true,
            });

            this.suggestHistory.push(text);
            this.suggestPtr = this.suggestHistory.length;
        },

        logOutput: function(text) {
            this.history.unshift({
                command: text,
                isCommand: false,
            });
        },

        logError: function(err) {
            this.history.unshift({
                command: err,
                isCommand: 'err'
            })
        },

        log: function(cmd, output) {
            this.logCommand(cmd);
            this.logOutput(output);
        },

        logCmdError: function(cmd, err) {
            this.logCommand(cmd);
            this.logError(err);
        },

        enterCommand: function() {
            const argv = this.command.split(' ');
            const cmdName = argv[0];
            if (!this.commands.includes(cmdName)) {
                this.log(cmdName, 'Unknown command')
                this.command = '';
            } else {
                this[cmdName](this.command, ...argv.slice(1));
                this.command = '';
            }
        },

        help: function(cmd) {
            let helpMessage = 'Type <b>auth</b> to authenticate with telegram\nType <b>solo</b> to register as solo player\nType <b>register (team_name)</b> to register team\nType <b>show_reg</b> to show your registration\nType <b>join (token)</b> to join team\nType <b>leave</b> to leave team\n  // If the captain leaves a team, it will be deleted';

            if (this.admin) {
                helpMessage += '\nType <b>get_status</b> to get status\nType <b>set_status (status)</b> to set status\nType <b>list_reg</b> to list registrations\nType <b>del_reg (user_id)</b> to delete registration';
            }

            this.log(cmd, helpMessage);
        },

        auth: function() {
            this.logCommand('auth');
            this.history.unshift({
                command: 'roflan',
                isCommand: 'tg'
            })
        },

        register: async function (cmd, teamName) {
            if (teamName === undefined) {
                this.log(cmd, 'Missing argument: team_name');
                return;
            }

            try {
                await this.$http.post('/registrations/', {
                    team_name: teamName,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const { data: { error } } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        get_status: async function(cmd) {
            const { data: { status } } = (await this.$http.get('/state/'));
            this.log(cmd, status);
        },

        set_status: async function(cmd, status) {
            if (status === undefined) {
                this.log(cmd, 'Missing argument: status');
                return;
            }

            try {
                await this.$http.post('/admin/state/', {
                    status,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const { data: { error } } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        leave: async function(cmd) {
            try {
                await this.$http.delete('/registrations/');

                this.log(cmd, 'OK');
            } catch (e) {
                const { data: { error } } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        getTeamInfo: function(registration) {
            let regInfo = `Team name: ${registration.team_name}\nTeam join token: ${registration.join_token}\n`;

            if (registration.team_token === '') {
                regInfo += 'Flag submission token: unavailable\n';
            } else {
                regInfo += `Flag submission token: ${registration.team_token}\n`;
            }

            if (registration.config_exists) {
                regInfo += `Team VPN config: <a href="${regApiURL}/registrations/config" target="_blank">config</a>\n`;
            } else {
                regInfo += 'Team VPN config: unavailable\n';
            }

            regInfo += 'Members:';

            for (const member of registration.user_ids) {
                regInfo += `\n - ${member}`;
            }

            return regInfo;
        },

        show_reg: async function(cmd) {
            const { data: registration } = await this.$http.get('/registrations/');

            if (registration === null) {
                this.logCmdError(cmd, 'not registered');
            } else {
                this.log(cmd, this.getTeamInfo(registration));
            }
        },

        join: async function(cmd, joinToken) {
            if (joinToken === undefined) {
                this.log(cmd, 'Missing argument: token');
                return;
            }

            try {
                await this.$http.post('/registrations/join/', {
                    join_token: joinToken,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const { data: { error } } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        list_reg: async function(cmd) {
            const { data: teams } = await this.$http.get('/registrations/list/');
            let teamInfo = '';
            for (const team of teams) {
                teamInfo += `${this.getTeamInfo(team)}\n\n`;
            }

            this.log(cmd, teamInfo);
        },

        del_reg: async function(cmd, userId) {
            try {
                await this.$http.post('/registrations/delete/', {
                    user_id: userId,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const { data: { error } } = e.response;
                this.logCmdError(cmd, error);
            }
        }
    }
}
</script>

<style lang="scss">
html,
body {
    width: 100%;
    margin: 0;
    background-color:black;
    font-family: 'PT Mono', monospace;
    font-size: 1.05em;
}

input, textarea, select {
    font-family:inherit;
    font-size: inherit;
    color: inherit;
}
</style>

<style lang="scss" scoped>
.terminal {
    position: relative;
    overflow-y: hidden;
}

.command-list {
    max-height: 95vh;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
}

.command {
    flex: 0 0 5vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.command-input {
    height: 5vh;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.prompt {
    color: greenyellow;
    margin-left: 1em;
    margin-right: 0.4em;
}

.fake-prompt {
    margin-left: 1em;
    margin-right: 0.4em;
}

.user-input-wrapper {
    flex: 1 0 0;
}

.user-input {
    color: greenyellow;
    background-color: black;
    outline: none;
    border: none;
    padding-top: 0.3em;
    width: calc(100% - 1em);
}

.output {
    color: white;
}

.error {
    color: red;
}

.command {
    color: greenyellow;
}

.tg {
    padding-top: 0.4em;
}
</style>
