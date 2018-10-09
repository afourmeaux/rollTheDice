import diceStore from '../store';

function rollDice(faces) {
    return Math.floor((Math.random() * faces) + 1);
}

export default (dice) => {
    if (dice.faces && dice.faces > 1) {
        const diceNumber = dice.number ? dice.number : 1;
        const each = [];

        for (let i = 0; i < diceNumber; i += 1) {
            each[i] = rollDice(dice.faces);
        }

        diceStore.mutations.setResult(diceStore, {
            each,
            total: each.reduce((total, value) => total + value),
        });
    } else if (dice.number && dice.number > 1) {
        throw new Error('Your dice should have at least 2 faces');
    } else {
        throw new Error('Your die should have at least 2 faces');
    }
};
