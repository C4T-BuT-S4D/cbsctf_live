<template>
    <div>123</div>
</template>

<script>
export default {
    created: async function () {
        console.log('Called created');
        console.log(this.$route.query);

        // const { data } = await this.$http.post('/telegram/callback/', user);
        // console.log('Got server response');
        // console.log(data);

        // const { token } = data;
        // localStorage['access_token'] = token;
    },
};
</script>
