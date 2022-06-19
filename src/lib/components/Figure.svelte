<script>
    import { useLazyImage } from "../js/utils";
    import {config} from '$lib/js/stores'
    export let alt, img, sm, md, lg, xl, xxl, width, height, css, i = 1
    // https://codepen.io/shshaw/post/responsive-placeholder-image
    // https://yoksel.github.io/url-encoder/
</script>
    <img 
        class="w-full h-full object-cover aspect-auto {css}" 
        alt={alt}
        data-srcset="{img.sm} {sm + "w"}, {img.md} {md + "w"}, {img.lg} {lg + "w"}, {img.xl} {xl + "w"}, {img.xxl} {xxl + "w"}" 
        srcset={$config.svg_placeholder}
        data-src={img.xxl}
        src={$config.svg_placeholder}
        use:useLazyImage={{ threshold: 0}} 
        decoding={i < 1 ? "auto" : "async"} 
        loading={i < 1 ? "eager" : "lazy"}
        height
        width
    />
    <noscript><img alt={alt} src="{img.xxl}" width="{width}" height="{height}" /></noscript>

