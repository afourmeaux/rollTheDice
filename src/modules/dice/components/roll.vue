<template>
    <div>
        <label for="number">Number of dice</label>
        <input type="number" v-model="number" id="number" /><br />
        <label for="faces">Number of faces</label>
        <input type="number" v-model="faces" id="faces" /><br />
        <button @click="rollDice({ number, faces })">Roll</button>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'roll',
        data() {
            return {
                number: '',
                faces: '',
            };
        },
        methods: {
            ...mapActions([
                'rollDice',
            ]),
        },
    };
</script>
