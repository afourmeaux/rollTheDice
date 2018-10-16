<template>
    <div>
        <rollResult :roll="roll" v-for="(roll, index) in getRollHistory" v-bind:key="index" /><br />
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import rollResult from './rollResult';

    export default {
        name: 'rollHistory',
        computed: {
            ...mapGetters([
                'getRollHistory',
            ]),
        },
        components: {
            rollResult,
        },
    };
</script>
