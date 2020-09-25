<template>
    <div id="app">
        <vue-telegram-login
            mode="redirect"
            :redirect-url="url"
            telegram-login="cbsctf_regbot"
            :userpic="true"
            requestAccess="write"
            @callback="telegramAuth"
        />

        <div>
            <p>My registration:</p>
            <p>{{ registration }}</p>
        </div>

        <div>
            <button class="unregister" type="button" @click="unregister">Unregister</button>
        </div>

        <div>
            <p>Registration form</p>
            <input type="text" placeholder="Team Name" v-model="teamName" />
            <button class="register" type="button" @click="register">Register</button>
        </div>

        <div>
            <p>Join by token form</p>
            <input type="text" placeholder="Join token" v-model="joinToken" />
            <button class="join" type="button" @click="joinTeam">Join</button>
        </div>

        <div>
            <p>User status</p>
            <p>{{ status }}</p>
        </div>

        <div>
            <p>Game state form (if user role is admin)</p>
            <label>Select status</label>
            <select id="state-select" v-model="gameStatus">
                <option value="0">Not started</option>
                <option value="1">Registration open</option>
                <option value="2">Registration closed</option>
                <option value="4">Game started</option>
                <option value="5">Game finished</option>
            </select>
            <button class="set-game-state" type="button" @click="setGameState">Set game state</button>
        </div>
    </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { vueTelegramLogin },
    data: function () {
        return {
            teamName: '',
            joinToken: '',
            gameStatus: '',
            url: '',
        };
    },

    created: async function () {
        this.url = (window.location.origin + window.location.pathname + '/telegram').replaceAll('//', '/');
    },

    mounted: async function () {
        await this.refreshAll();
    },

    methods: {
        telegramAuth: async function (user) {
            console.log('Called the callback');
            console.log(user);

            const { data } = await this.$http.post('/telegram/callback/', user);
            console.log('Got server response');
            console.log(data);

            const { token } = data;
            localStorage['access_token'] = token;
            await this.refreshAll();
        },

        register: async function () {
            await this.$http.post('/registrations/', {
                team_name: this.teamName,
            });
            await this.refreshAll();
        },

        unregister: async function () {
            await this.$http.delete('/registrations/');
            await this.refreshAll();
        },

        joinTeam: async function () {
            await this.$http.post('/registrations/join/', {
                join_token: this.joinToken,
            });
            await this.refreshAll();
        },

        setGameState: async function () {
            await this.$http.post('/admin/state/', {
                status: +this.gameStatus,
            });
            await this.refreshAll();
        },

        refreshAll: async function () {
            await this.updateRegistration();
            await this.updateStatus();
            this.gameStatus = this.status.status.toString();
        },

        ...mapActions(['updateRegistration', 'updateStatus']),
    },
    computed: {
        ...mapGetters({ registration: 'getRegistration', status: 'getStatus' }),
    },
};
</script>
