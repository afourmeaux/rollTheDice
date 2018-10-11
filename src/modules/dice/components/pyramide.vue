<template>
    <div class="scene">
        <div class="pyramide" v-bind:style="pyramideRotation">
            <div class="pyramide-face pyramide-face_front">1</div>
            <div class="pyramide-face pyramide-face_left">2</div>
            <div class="pyramide-face pyramide-face_right">3</div>
            <div class="pyramide-face pyramide-face_bottom">4</div>
        </div>
        <input type="range" v-model="rotateX" min="-180" max="180"/>
        <input type="range" v-model="rotateY" min="-180" max="180"/>
    </div>
</template>
<script>
    export default {
        name: 'pyramide',
        data() {
            return {
                rotateX: 0,
                rotateY: 0,
            };
        },
        computed: {
            pyramideRotation() {
                return {
                    transform: `rotateY(${this.rotateY}deg) rotateX(${this.rotateX}deg)`,
                };
            },
        },
    };
</script>
<style>
    input[type="range"] {
        width: 360px;
    }

    .scene {
        width: 200px;
        height: 200px;
        margin: 80px;
        /*perspective: 400px;*/
        margin-left: 150px;
    }

    .pyramide {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-100px);
        margin-bottom: 150px;
    }

    .pyramide-face {
        position: absolute;
        line-height: 200px;
        font-size: 40px;
        font-weight: bold;
        color: white;
        text-align: center;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 200px solid blue;
        border-width: 0 111px calc(1.732 * 111px) 111px;
    }

    .pyramide-face_front  { border-bottom-color: hsla(  0, 100%, 40%, 1); }
    .pyramide-face_left  { border-bottom-color: hsla( 60, 100%, 50%, 1); }
    .pyramide-face_right   { border-bottom-color: hsla(120, 100%, 50%, 1); }
    .pyramide-face_bottom   { border-bottom-color: hsla(300, 100%, 50%, 1); }

    .pyramide-face_front {
        transform: rotateY(-60deg) translateZ(-33px) rotateX(20deg);
        margin-left: -56px;
    }

    .pyramide-face_right {
        transform: rotateY(60deg) translateZ(-33px) rotateX(20deg);
        margin-left: 56px;
    }

    .pyramide-face_left {
        transform: rotateY(0deg) translateZ(-64px) rotateX(-20deg);
    }

    .pyramide-face_bottom {
        transform: rotateX(-90deg) translateZ(90px);
    }

    label {
        margin-right: 10px;
    }
</style>
