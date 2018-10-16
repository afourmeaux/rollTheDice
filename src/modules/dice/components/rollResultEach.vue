<template>
    <p>each : <template v-for="result in eachResult">{{ result }} </template></p>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'rollResultEach',
        props: {
            roll: {
                default: null,
            },
        },
        computed: {
            ...mapGetters([
                'getRollResult',
            ]),
            eachResult() {
                if (this.roll) {
                    return this.roll.each;
                }

                return this.getRollResult.each;
            },
        },
    };
</script>
