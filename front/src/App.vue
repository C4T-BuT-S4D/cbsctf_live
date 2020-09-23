<template>
    <div id="app">
        <vue-telegram-login
            mode="callback"
            telegram-login="cbsctf_regbot"
            userpic="true"
            requestAccess="write"
            @callback="telegramAuth"
        />
    </div>
</template>

<script>
import { vueTelegramLogin } from "vue-telegram-login";

export default {
    components: { vueTelegramLogin },

    methods: {
        telegramAuth(data) {
            console.log("Called the callback");
            console.log(data);
        },
    },
};
</script>
