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
        <div>{{ user }}</div>
        <button class="unregister" type="button" @click="unregister">
            Unregister
        </button>
        <div>
            <input type="text" placeholder="Team Name" v-model="teamName" />
            <input
                type="password"
                placeholder="Team Password"
                v-model="password"
            />
            <button class="register" type="button" @click="register">
                Register
            </button>
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
            password: "",
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
        },
        register: async function () {
            await this.$http.post("/registrations/", {
                // eslint-disable-next-line @typescript-eslint/camelcase
                team_name: this.teamName,
                password: this.password,
            });
        },
        unregister: async function () {
            await this.$http.delete("/registrations/");
        },
        ...mapActions(["setAccessToken"]),
    },
    computed: {
        ...mapGetters({ user: "getUser" }),
    },
};
</script>
