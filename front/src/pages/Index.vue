<template>
    <div class="terminal">
        <div class="hide">
            <vue-telegram-login
                mode="redirect"
                :redirect-url="url"
                telegram-login="cbsctf_regbot"
                :userpic="true"
                requestAccess="write"
            />
        </div>
        <div class="command-list">
            <div class="command" v-for="(command, index) of history" :key="index">
                <span class="prompt" v-if="command.isCommand">{{ prompt }}</span>
                <form class="user-input-wrapper" v-if="command.isCommand">
                    <input v-model="history[index].command" type="text" class="user-input" disabled>
                </form>
                <pre class="output" v-else>{{ command.command }}</pre>
            </div>
        </div>
        <div class="command-input">
            <span class="prompt">{{ prompt }}</span>
            <form @submit.prevent="enterCommand" class="user-input-wrapper">
                <input v-model="command" type="text" class="user-input" ref="input" maxlength="41" placeholder="Type help to get help">
            </form>
        </div>
    </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';

export default {
    components: { vueTelegramLogin },

    data: function() {
        return {
            history: [],
            prompt: '❯',
            command: '',
            commands: ['help', 'auth', 'register', 'join', 'leave'],
            url: ''
        };
    },

    created: async function () {
        this.url = (window.location.pathname + '/tg').replaceAll('//', '/');
    },

    mounted: function() {
        this.$refs.input.addEventListener('keydown', this.keydown);
    },

    beforeDestroy: function() {
        this.$refs.input.removeEventListener('keydown', this.keydown);
    },

    methods: {
        keydown: function(e) {
            if (e.key === "Tab") {
                e.preventDefault();
                this.autocomplete();
            }
        },

        autocomplete: function() {
            console.log('bruh');
        },

        logCommand: function(text) {
            this.history.unshift({
                command: text,
                isCommand: true,
            });
        },

        logOutput: function(text) {
            this.history.unshift({
                command: text,
                isCommand: false,
            });
        },

        log: function(cmd, output) {
            this.logCommand(cmd);
            this.logOutput(output);
        },

        enterCommand: function() {
            const argv = this.command.split(' ');
            const cmdName = argv[0];
            if (!this.commands.includes(cmdName)) {
                console.log(123);
            } else {
                this[cmdName](...argv.slice(1));
                this.command = '';
            }
        },

        help: function() {
            this.log(this.command, 'Type auth to authenticate with telegram\nType register <team_name> to register team\nType join <token> to join team\nType leave to leave team');
        },

        auth: function() {
            window.TWidgetLogin.auth();
        }
    }
}
</script>

<style lang="scss">
html,
body {
    width: 100%;
    margin: 0;
    overflow-y: hidden;
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
.command-list {
    max-height: 95vh;
    display: flex;
    flex-direction: column-reverse;
}

.hide {
    display: none;
}

.output {
    margin-left: 1em;
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

.command {
    color: greenyellow;
}
</style>
