<script>
    import { useLazyImage } from "../js/utils";
    import {config} from '$lib/js/stores'
    export let alt, img, width, height, css, i = 1
    // https://codepen.io/shshaw/post/responsive-placeholder-image
    // https://yoksel.github.io/url-encoder/
</script>
    <img 
        class="w-full h-full object-cover aspect-auto {css}" 
        alt={alt}
        data-srcset="{img.sm} {$config.image_sizes.sm}, {img.md} {$config.image_sizes.md}, {img.lg} {$config.image_sizes.lg}, {img.xl} {$config.image_sizes.lg}, {img.xxl} {$config.image_sizes.xxl}" 
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

