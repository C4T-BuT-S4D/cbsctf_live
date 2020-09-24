<template>
    <div id="app">
        <vue-telegram-login
            mode="callback"
            telegram-login="cbsctf_regbot"
            userpic="true"
            requestAccess="write"
            @callback="telegramAuth"
        />
        <div>My registration:</div>
        <div>{{ registration }}</div>
        <button class="unregister" type="button" @click="unregister">
            Unregister
        </button>
        <div>
            <p>Registration form</p>
            <input type="text" placeholder="Team Name" v-model="teamName" />
            <button class="register" type="button" @click="register">
                Register
            </button>
        </div>

        <div>
            <p>Join by token form</p>
            <input type="text" placeholder="Join token" v-model="joinToken" />
            <button class="join" type="button" @click="joinTeam">Join</button>
        </div>
    </div>
</template>

<script>
import { vueTelegramLogin } from "vue-telegram-login";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { vueTelegramLogin },
    data: function () {
        return {
            teamName: "",
            joinToken: "",
        };
    },
    methods: {
        telegramAuth: async function (user) {
            console.log("Called the callback");
            console.log(user);

            const { data } = await this.$http.post("/telegram/callback/", user);
            console.log("Got server response");
            console.log(data);

            const { token } = data;
            this.setAccessToken(token);
            this.updateRegistration();
        },
        register: async function () {
            await this.$http.post("/registrations/", {
                // eslint-disable-next-line @typescript-eslint/camelcase
                team_name: this.teamName,
            });
            this.updateRegistration();
        },
        unregister: async function () {
            await this.$http.delete("/registrations/");
            this.updateRegistration();
        },
        joinTeam: async function () {
            await this.$http.post("/registrations/join/", {
                // eslint-disable-next-line @typescript-eslint/camelcase
                join_token: this.joinToken,
            });
            this.updateRegistration();
        },
        ...mapActions(["setAccessToken", "updateRegistration"]),
    },
    computed: {
        ...mapGetters({ registration: "getRegistration" }),
    },
};
</script>
