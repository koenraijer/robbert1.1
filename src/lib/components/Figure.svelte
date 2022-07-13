<script>
    import { useLazyImage } from "../js/utils";
    import {config} from '$lib/js/stores'
    import {browser} from '$app/env'
    import { onMount } from 'svelte'

    export let alt, img, width, height, css, i = 1
    export const sm = $config.image_sizes.sm, md = $config.image_sizes.md, lg = $config.image_sizes.lg, xl = $config.image_sizes.xl, xxl = $config.image_sizes.xxl;
    // https://codepen.io/shshaw/post/responsive-placeholder-image
    // https://yoksel.github.io/url-encoder/

    let loaded = false
    let this_image

    onMount(() => {
        this_image.onload = () => {
        loaded = true
        }
    }) 

    // Transition source: https://css-tricks.com/lazy-loading-images-in-svelte/
</script>

<img 
    class:loaded
    bind:this={this_image}
    class="{css}" 
    alt={alt}
    data-srcset="{img.sm} {sm}, {img.md} {md}, {img.lg} {lg}, {img.xl} {lg}, {img.xxl} {xxl}" 
    srcset='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+fOvJAAI7AMKHxaZiQAAAABJRU5ErkJggg=='
    data-src={img.xxl}
    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+fOvJAAI7AMKHxaZiQAAAABJRU5ErkJggg=='
    use:useLazyImage={{ threshold: 0}} 
    decoding={i < 1 ? "auto" : "async"} 
    loading={i < 1 ? "eager" : "lazy"}
    height
    width
/>
<noscript><img alt={alt} src="{img.xxl}" width="{width}" height="{height}" /></noscript>

<style>
    img {
        opacity: 0;
        transition: opacity 500ms ease-out;
    }

    img.loaded {
        opacity: 1;
    }
</style>


