<template>
    <div id="app">
        <vue-telegram-login 
            mode="callback"
            telegram-login="cbsctf_regbot"
            @callback="telegramAuth" />
    </div>
</template>

<script>
export default {
    methods: {
        telegramAuth: async function(data) {
            console.log(data);
        }
    }
}
</script>
