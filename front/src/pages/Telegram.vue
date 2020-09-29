<template>
    <div>123</div>
</template>

<script>
export default {
    created: async function () {
        console.log('Called created!');
        console.log(this.$route.query);

        const user = this.$route.query;
        user['id'] = parseInt(user['id']);
        user['auth_date'] = parseInt(user['auth_date']);

        const { data } = await this.$http.post('/telegram/callback/', user);
        console.log('Got server response');
        console.log(data);

        const { token } = data;
        localStorage['access_token'] = token;

        this.$router.push({ name: 'index' });
    },
};
</script>
