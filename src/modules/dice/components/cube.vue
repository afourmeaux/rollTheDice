<template>
    <div class="scene">
        <div class="cube" v-bind:style="cubeRotation">
            <div class="cube-face cube-face_front">front</div>
            <div class="cube-face cube-face_back">back</div>
            <div class="cube-face cube-face_right">right</div>
            <div class="cube-face cube-face_left">left</div>
            <div class="cube-face cube-face_top">top</div>
            <div class="cube-face cube-face_bottom">bottom</div>
        </div>
        <input type="range" v-model="rotateX" min="-180" max="180"/>
        <input type="range" v-model="rotateY" min="-180" max="180"/>
    </div>
</template>
<script>
    export default {
        name: 'cube',
        data() {
            return {
                rotateX: 0,
                rotateY: 0,
            };
        },
        computed: {
            cubeRotation() {
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
        perspective: 400px;
        margin-left: 150px;
    }

    .cube {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-100px);
        margin-bottom: 150px;
    }

    .cube-face {
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 40px;
        font-weight: bold;
        color: white;
        text-align: center;
        background: #fff;
    }

    .cube-face_front  { background: hsla(  0, 100%, 40%, 0.7); }
    .cube-face_right  { background: hsla( 60, 100%, 50%, 0.7); }
    .cube-face_back   { background: hsla(120, 100%, 50%, 0.7); }
    .cube-face_left   { background: hsla(180, 100%, 50%, 0.7); }
    .cube-face_top    { background: hsla(240, 100%, 50%, 0.7); }
    .cube-face_bottom { background: hsla(300, 100%, 50%, 0.7); }

    .cube-face_front {
        transform: rotateY(0deg) translateZ(100px);
    }

    .cube-face_right {
        transform: rotateY(90deg) translateZ(100px);
    }

    .cube-face_back {
        transform: rotateY(180deg) translateZ(100px);
    }

    .cube-face_left {
        transform: rotateY(-90deg) translateZ(100px);
    }

    .cube-face_top {
        transform: rotateX(90deg) translateZ(100px);
    }

    .cube-face_bottom {
        transform: rotateX(-90deg) translateZ(100px);
    }

    label {
        margin-right: 10px;
    }
</style>
