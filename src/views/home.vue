<template>
    <div>
        <h1>Roll the dice</h1>

        <dice v-for="(dice, key) in diceList" :dice="dice" v-bind:key="key"/>

        <diceResult />
    </div>
</template>

<script>
    import dice from '@/modules/dice/components/dice';
    import diceResult from '@/modules/dice/components/diceResult';

    export default {
        name: 'home',
        data() {
            return {
                diceList: [
                    {
                        number: 1,
                        faces: 6,
                    },
                    {
                        number: 1,
                        faces: 100,
                    },
                    {
                        number: 40,
                        faces: 2,
                    },
                ],
            };
        },
        components: {
            dice,
            diceResult,
        },
    };
</script>
