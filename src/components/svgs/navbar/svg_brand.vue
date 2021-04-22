<template>
    <svg version="1.1" id="emblem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <g>
            <path class="st0" d="M43.7,4.6c0,0-19.1-10.3-31.8,1.8C-2.6,20.1,6.9,63,43.7,45.1V24.8H27v5.1h10.8V42c0,0-23.6,9.4-25.6-16.7 c0.1-6.4-0.6-15.4,13-18.9c0.1,0,0.2,0,0.3-0.1c4.6-0.6,10.3-1.5,17.6,5.4h0.5V4.6z"/>
            <g>
                <polygon class="st0" points="16.7,20.1 16.7,15.8 15,15.8 15,15.1 19.1,15.1 19.1,15.8 17.4,15.8 17.4,20.1"/>
                <polygon class="st0" points="22.9,15.1 19.7,15.1 19.7,20.1 22.9,20.1 22.9,19.4 20.7,19.4 20.4,19.4 20.4,17.7 22.9,17.7 22.9,17 21.7,17 20.4,17 20.4,15.8 22.9,15.8"/>
                <polygon class="st1" points="24.7,15.2 24.2,15.2 24.2,20 24.7,20 24.7,17.8 25.2,17.8 26.9,20 27.6,20 25.7,17.6 25.7,17.4 27.6,15.2 26.9,15.2 25.2,17.1 24.7,17.1"/>
                <polygon class="st1" points="29.2,15.2 29.2,20 29.9,20 29.9,17.8 32.1,17.8 32.1,20 32.8,20 32.8,15.2 32.1,15.2 32.1,17.1 29.9,17.1 29.9,15.2"/>
                <polygon class="st2" points="34.5,15.2 34.5,20 35,20 35,15.9 37.1,20 37.9,20 37.9,15.2 37.4,15.2 37.4,18.8 37.1,18.8 35.2,15.2"/>
                <path class="st1" d="M41.3,14.9c-1.2,0-2.2,1.2-2.2,2.7s1,2.7,2.2,2.7c1.2,0,2.2-1.2,2.2-2.7S42.5,14.9,41.3,14.9z M41.3,19.6 c-0.9,0-1.6-0.9-1.6-2s0.7-2,1.6-2s1.6,0.9,1.6,2S42.2,19.6,41.3,19.6z"/>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        name: "svg_brand"
    }
</script>

<style lang="scss" scoped >
    #emblem {
        height: 3.125rem;
        width: 3.125rem;
        .st0 {fill: #9aaecf;}
        .st1 {
            fill: #9aaecf;
            stroke: #9aaecf;
            stroke-width: 0.2415;
            stroke-miterlimit: 10;
        }
        .st2 {
            fill: #9aaecf;
            &:hover .st0 {fill: #90d4fd;}
            &:hover .st1 {
                fill: #90d4fd;
                stroke: #90d4fd;
            }
        }
    }
</style>