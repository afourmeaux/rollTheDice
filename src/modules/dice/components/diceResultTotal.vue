<template>
    <p>total : {{ getResult.total }}</p>
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
