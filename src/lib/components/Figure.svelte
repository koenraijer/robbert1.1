<script>
    import { useLazyImage } from "../js/utils";
    import {config} from '$lib/js/stores'
    export let alt, img, width, height, css, i = 1, sm = $config.image_sizes.sm, md = $config.image_sizes.md, lg = $config.image_sizes.lg, xl = $config.image_sizes.xl, xxl = $config.image_sizes.xxl;
    // https://codepen.io/shshaw/post/responsive-placeholder-image
    // https://yoksel.github.io/url-encoder/
</script>
    <img 
        class="w-full h-full object-cover aspect-auto {css}" 
        alt={alt}
        data-srcset="{img.sm} {sm}, {img.md} {md}, {img.lg} {lg}, {img.xl} {lg}, {img.xxl} {xxl}" 
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

