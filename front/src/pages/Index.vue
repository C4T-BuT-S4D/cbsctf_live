<template>
    <div class="terminal">
        <div class="command-list">
            <div class="command" v-for="(command, index) of history" :key="index">
                <span class="prompt" v-if="command.isCommand === true">{{ prompt }}</span>
                <span class="fake-prompt" v-else></span>
                <form class="user-input-wrapper" v-if="command.isCommand === true">
                    <input v-model="history[index].command" type="text" class="user-input" disabled />
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
                <form v-else-if="command.isCommand === 'upload_configs'" @submit.prevent="sendConfigFile">
                    <input type="file" name="dump" />
                    <input type="submit" value="Upload" name="submit" class="upload" />
                </form>
                <form v-else-if="command.isCommand === 'upload_tokens'" @submit.prevent="sendTokensFile">
                    <input type="file" name="tokens" />
                    <input type="submit" value="Upload" name="submit" class="upload" />
                </form>
                <form
                    v-else-if="command.isCommand === 'pm_team'"
                    @submit.prevent="(e) => sendPMMessage(e, command.command)"
                >
                    <div>
                        <textarea class="pm-team" name="message"> </textarea>
                    </div>
                    <input type="submit" value="Submit" name="submit" class="upload" />
                </form>
                <div class="error" v-else-if="command.isCommand === 'err'">
                    {{ command.command }}
                </div>
                <pre class="output" v-else v-html="command.command"></pre>
            </div>
        </div>
        <div class="command-input">
            <span class="prompt">{{ prompt }}</span>
            <form @submit.prevent="enterCommand" class="user-input-wrapper">
                <input
                    v-model="command"
                    type="text"
                    class="user-input"
                    ref="input"
                    maxlength="44"
                    placeholder="Type help to get help"
                />
            </form>
        </div>
    </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';
import { regApiURL, userMenu, adminMenu } from '@/config';

export default {
    components: { vueTelegramLogin },

    data: function () {
        return {
            history: [],
            prompt: '❯',
            command: '',
            commands: [
                'help',
                'auth',
                'solo',
                'register',
                'register_sh',
                'show_reg',
                'join',
                'leave',
                'reboot',

                'get_status',
                'set_status',
                'list_reg',
                'del_reg',
                'yml',
                'upload_config',
                'upload_tokens',
                'get_password',
                'set_password',
                'stop_self_hosted',
                'pm',
            ],
            url: '',
            admin: false,
            suggestHistory: [],
            suggestPtr: -1,

            files: [],
        };
    },

    created: async function () {
        this.url = (window.location.pathname + '/tg').replaceAll('//', '/');

        const {
            data: { game_role: gameRole },
        } = await this.$http.get('/state/');
        this.admin = gameRole === 'admin';
    },

    mounted: function () {
        this.$refs.input.addEventListener('keydown', this.keydown);
    },

    beforeDestroy: function () {
        this.$refs.input.removeEventListener('keydown', this.keydown);
    },

    methods: {
        keydown: function (e) {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.suggestPtr > 0) {
                    this.suggestPtr -= 1;
                }

                if (this.suggestPtr < this.suggestHistory.length) {
                    this.command = this.suggestHistory[this.suggestPtr];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.suggestPtr + 1 < this.suggestHistory.length) {
                    this.suggestPtr += 1;
                }

                this.command = this.suggestHistory[this.suggestPtr];
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autocomplete();
            }
        },

        autocomplete: function () {
            let cnt = 0;
            let mtch = '';
            const prefix = this.command.toLowerCase();
            for (const cmd of this.commands) {
                if (cmd.startsWith(prefix)) {
                    cnt += 1;
                    mtch = cmd;
                }
            }

            if (cnt === 1) {
                this.command = mtch;
            }
        },

        logCommand: function (text) {
            this.history.unshift({
                command: text,
                isCommand: true,
            });

            this.suggestHistory.push(text);
            this.suggestPtr = this.suggestHistory.length;
        },

        logOutput: function (text) {
            this.history.unshift({
                command: text,
                isCommand: false,
            });
        },

        logError: function (err) {
            this.history.unshift({
                command: err,
                isCommand: 'err',
            });
        },

        log: function (cmd, output) {
            this.logCommand(cmd);
            this.logOutput(output);
        },

        logCmdError: function (cmd, err) {
            this.logCommand(cmd);
            this.logError(err);
        },

        enterCommand: function () {
            const argv = this.command.split(' ');
            const cmdName = argv[0].toLowerCase();
            if (!this.commands.includes(cmdName)) {
                this.log(cmdName, 'Unknown command');
                this.command = '';
            } else {
                this[cmdName](this.command, ...argv.slice(1));
                this.command = '';
            }
        },

        help: function (cmd) {
            let helpMessage = userMenu;
            if (this.admin) {
                helpMessage += '\n\n' + adminMenu;
            }
            this.log(cmd, helpMessage);
        },

        auth: function (cmd) {
            this.logCommand(cmd);
            this.history.unshift({
                command: 'roflan',
                isCommand: 'tg',
            });
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

                try {
                    const { data: registration } = await this.$http.get('/registrations/');

                    if (registration === null) {
                        this.logCmdError(cmd, 'not registered');
                    } else {
                        this.log(cmd, this.getTeamInfo(registration));
                    }
                } catch (e) {
                    const {
                        data: { error },
                    } = e.response;
                    this.logCmdError(cmd, error);
                }
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        register_sh: async function (cmd, teamName) {
            if (teamName === undefined) {
                this.log(cmd, 'Missing argument: team_name');
                return;
            }

            try {
                await this.$http.post('/registrations/', {
                    team_name: teamName,
                    self_hosted: true,
                });

                try {
                    const { data: registration } = await this.$http.get('/registrations/');

                    if (registration === null) {
                        this.logCmdError(cmd, 'not registered');
                    } else {
                        this.log(cmd, this.getTeamInfo(registration));
                    }
                } catch (e) {
                    const {
                        data: { error },
                    } = e.response;
                    this.logCmdError(cmd, error);
                }
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        solo: async function (cmd) {
            try {
                await this.$http.post('/registrations/solo/');

                try {
                    const { data: registration } = await this.$http.get('/registrations/');

                    if (registration === null) {
                        this.logCmdError(cmd, 'not registered');
                    } else {
                        this.log(cmd, this.getTeamInfo(registration));
                    }
                } catch (e) {
                    const {
                        data: { error },
                    } = e.response;
                    this.logCmdError(cmd, error);
                }
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        get_status: async function (cmd) {
            const {
                data: { status },
            } = await this.$http.get('/state/');
            this.log(cmd, status);
        },

        set_status: async function (cmd, status) {
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
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        leave: async function (cmd) {
            try {
                await this.$http.delete('/registrations/');

                this.log(cmd, 'OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        reboot: async function (cmd) {
            try {
                await this.$http.post('/game/reboot/');

                this.log(cmd, 'OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        stop_self_hosted: async function (cmd) {
            try {
                await this.$http.post('/admin/stop_self_hosted/');

                this.log(cmd, 'OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        getTeamInfo: function (registration) {
            let regInfo = `Team id: ${registration.id}\nTeam name: ${registration.team_name}\nTeam join token: ${
                registration.join_token
            }\nSelf-hosted: ${registration.self_hosted ? 'Yes' : 'No'}\n`;

            if (registration.team_token === '') {
                regInfo += 'Flag submission token: unavailable\n';
            } else {
                regInfo += `Flag submission token: ${registration.team_token}\n`;
            }

            if (registration.config_exists) {
                regInfo += `Team VPN config: <a href="${regApiURL}/download/config/?token=${localStorage['access_token']}" target="_blank">click me</a>\n`;
            } else {
                regInfo += 'Team VPN config: unavailable\n';
            }

            regInfo += 'Members:';

            for (const member of registration.user_ids) {
                regInfo += `\n - ${member}`;
            }

            return regInfo;
        },

        show_reg: async function (cmd) {
            try {
                const { data: registration } = await this.$http.get('/registrations/');

                if (registration === null) {
                    this.logCmdError(cmd, 'not registered');
                } else {
                    this.log(cmd, this.getTeamInfo(registration));
                }
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        join: async function (cmd, joinToken) {
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
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        list_reg: async function (cmd) {
            const { data: teams } = await this.$http.get('/registrations/list/');
            let teamInfo = '';
            for (const team of teams) {
                teamInfo += `${this.getTeamInfo(team)}\n\n`;
            }

            this.log(cmd, teamInfo);
        },

        del_reg: async function (cmd, userId) {
            if (userId === undefined) {
                this.log(cmd, 'Missing argument: user_id');
                return;
            }

            try {
                await this.$http.post('/registrations/delete/', {
                    user_id: userId,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        yml: async function (cmd) {
            const { data } = await this.$http.get('/registrations/dump/');
            this.log(cmd, data);
        },

        upload_config: function (cmd) {
            this.logCommand(cmd);
            this.history.unshift({
                command: 'roflan',
                isCommand: 'upload_configs',
            });
        },

        upload_tokens: function (cmd) {
            this.logCommand(cmd);
            this.history.unshift({
                command: 'roflan',
                isCommand: 'upload_tokens',
            });
        },

        sendConfigFile: async function (e) {
            const file = e.target.dump.files[0];

            if (file === undefined) {
                this.logError('no file');
                return;
            }

            const formData = new FormData();
            formData.append('dump', file);

            try {
                await this.$http.post('/admin/configs/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                this.logOutput('OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logError(error);
            }
        },

        sendTokensFile: async function (e) {
            const file = e.target.tokens.files[0];

            if (file === undefined) {
                this.logError('no file');
                return;
            }

            const formData = new FormData();
            formData.append('tokens', file);

            try {
                await this.$http.post('/admin/tokens/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                this.logOutput('OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logError(error);
            }
        },

        get_password: async function (cmd) {
            const {
                data: { config_password },
            } = await this.$http.get('/state/');
            if (config_password === '') {
                this.log(cmd, 'not available');
            } else {
                this.log(cmd, config_password);
            }
        },

        set_password: async function (cmd, password) {
            if (password === undefined) {
                this.log(cmd, 'Missing argument: password');
                return;
            }

            try {
                await this.$http.post('/admin/config_password/', {
                    config_password: password,
                });

                this.log(cmd, 'OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logCmdError(cmd, error);
            }
        },

        pm: function (cmd, teamId) {
            if (teamId === undefined) {
                this.log(cmd, 'Missing argument: id');
                return;
            }

            this.logCommand(cmd);
            this.history.unshift({
                command: teamId,
                isCommand: 'pm_team',
            });
        },

        sendPMMessage: async function (e, teamId) {
            try {
                await this.$http.post('/admin/message/', {
                    form_id: parseInt(teamId),
                    message: e.target.message.value,
                });

                this.logOutput('OK');
            } catch (e) {
                const {
                    data: { error },
                } = e.response;
                this.logError(error);
            }
        },
    },
};
</script>

<style lang="scss">
html,
body {
    width: 100%;
    margin: 0;
    background-color: black;
    font-family: 'PT Mono', monospace;
    font-size: 1.05em;
}

input,
textarea,
select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}
</style>

<style lang="scss" scoped>
.upload {
    color: black;
}

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
    flex: 0 0 auto;
    min-height: 5vh;
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
    white-space: pre-wrap;
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

.pm-team {
    color: black;
}
</style>
