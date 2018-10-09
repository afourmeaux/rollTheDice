<template>
    <div>
        <each />
        <total />
    </div>
</template>
<script>
    import each from './diceResultEach';
    import total from './diceResultTotal';

    export default {
        name: 'diceResult',
        components: {
            each,
            total,
        },
    };
</script>
