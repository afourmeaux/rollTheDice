<template>
    <p>each : <template v-for="result in getResult.each">{{ result }} </template></p>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'diceResult',
        computed: {
            ...mapGetters([
                'getResult',
            ]),
        },
    };
</script>
