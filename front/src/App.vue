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
    </div>
</template>

<script>
import { vueTelegramLogin } from "vue-telegram-login";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { vueTelegramLogin },

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
        ...mapActions(["setAccessToken"]),
    },
    computed: {
        ...mapGetters({ user: "getUser" }),
    },
};
</script>
