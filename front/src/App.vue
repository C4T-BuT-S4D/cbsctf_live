<template>
    <div id="app">
        <vue-telegram-login 
            mode="callback"
            telegram-login="cbsctf_regbot"
            @callback="telegramAuth" />
    </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login'

export default {
    components: { vueTelegramLogin },

    methods: {
        telegramAuth: async function(data) {
            console.log(data);
        }
    }
}
</script>
