<template>
    <div>
        <h1>Roll the dice</h1>

        <dice v-for="(dice, key) in diceList" v-bind:key="key"
              :faces="dice.faces"
              :number="dice.number"
              :name="dice.name"
              :customFaces="dice.customFaces" />
        <roll />

        <!--<rollResult />-->
        <rollHistory />
        <!--<cube />-->
        <!--<pyramide />-->
    </div>
</template>

<script>
    import dice from '@/modules/dice/components/dice';
    import rollResult from '@/modules/dice/components/rollResult';
    import rollHistory from '@/modules/dice/components/rollHistory';
    import roll from '@/modules/dice/components/roll';
    import cube from '@/modules/dice/components/cube';
    import pyramide from '@/modules/dice/components/pyramide';

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
                        number: 2,
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
            rollResult,
            rollHistory,
            cube,
            pyramide,
            roll,
        },
    };
</script>
