<template>
    <button @click="rollDice">{{ Dice.name }}</button>
</template>
<script>
    import { mapMutations } from 'vuex';
    import Dice from '../helpers/Dice';

    export default {
        name: 'dice',
        data() {
            return {
                numberKey: '%number%',
                facesKey: '%faces%',
            };
        },
        props: {
            number: {
                type: Number,
                default: 1,
            },
            faces: {
                type: Number,
                default: 1,
            },
            name: {
                type: String,
                default: null,
            },
            customFaces: {
                type: Object,
            },
        },
        computed: {
            Dice() {
                return new Dice({
                    number: this.number,
                    faces: this.faces,
                    name: this.name,
                    customFaces: this.customFaces,
                });
            },
        },
        methods: {
            rollDice() {
                this.setResult(this.Dice.roll());
            },
            ...mapMutations([
                'setResult',
            ]),
        },
    };
</script>
