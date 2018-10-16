<template>
    <div>
        <each :roll="roll" />
        <total :roll="roll" />
    </div>
</template>
<script>
    import each from './rollResultEach';
    import total from './rollResultTotal';

    export default {
        name: 'rollResult',
        props: {
            roll: {
                default: null,
            },
        },
        components: {
            each,
            total,
        },
    };
</script>
