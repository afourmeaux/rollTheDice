<template>
    <button @click="rollDice(dice)">{{ diceName }}</button>
</template>
<script>
    import rollDice from '../helpers/rollDice';

    export default {
        name: 'dice',
        data() {
            return {
                numberKey: '%number%',
                facesKey: '%faces%',
            };
        },
        props: {
            dice: {
                type: Object,
                required: true,
            },
        },
        computed: {
            diceNameFormat() {
                return `${this.numberKey}D${this.facesKey}`;
            },
            diceName() {
                if (this.dice.name) {
                    return this.dice.name;
                }
                return this.diceNameFormat
                    .replace(this.numberKey, this.dice.number)
                    .replace(this.facesKey, this.dice.faces);
            },
        },
        methods: {
            rollDice,
        },
    };
</script>
