<template>
    <p v-if="Number(totalResult)">total : {{ totalResult }}</p>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'rollResultTotal',
        props: {
            roll: {
                default: null,
            },
        },
        computed: {
            ...mapGetters([
                'getRollResult',
            ]),
            totalResult() {
                if (this.roll) {
                    return this.roll.total;
                }

                return this.getRollResult.total;
            },
        },
    };
</script>
