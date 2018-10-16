import rollMath from './rollMath';

const NUMBER_KEY = '%number%';
const FACES_KEY = '%faces%';
const DICE_NAME_FORMAT = `${NUMBER_KEY}D${FACES_KEY}`;

const DEFAULT_FACES = 1;
const DEFAULT_NUMBER = 1;
const DEFAULT_CUSTOM_FACES = {};

export default class Dice {
    constructor(dice) {
        this.faces = dice.faces ? dice.faces : DEFAULT_FACES;
        this.number = dice.number ? dice.number : DEFAULT_NUMBER;
        this.customFaces = dice.customFaces ? dice.customFaces : DEFAULT_CUSTOM_FACES;
        this.name = dice.name ? dice.name : this.formatName();
    }

    formatName() {
        return DICE_NAME_FORMAT
            .replace(NUMBER_KEY, this.number)
            .replace(FACES_KEY, this.faces);
    }

    roll() {
        if (this.faces > 1) {
            const each = [];

            for (let i = 0; i < this.number; i += 1) {
                const result = rollMath(this.faces);

                each[i] = this.customFaces[result] ? this.customFaces[result] : result;
            }

            return {
                each,
                total: each.reduce((total, value) => total + value),
            };
        } else if (this.number > 1) {
            throw new Error('Your dice should have at least 2 faces');
        } else {
            throw new Error('Your die should have at least 2 faces');
        }
    }
}
