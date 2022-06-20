<script>
    import {marked} from 'marked';
    import Figure from '$lib/components/Figure.svelte';
    import {config} from '$lib/js/stores'
    export let author;

</script>

<svelte:head>
    <link rel="preload" as="image" href="{author.picture.xxl}" imagesrcset="{author.picture.sm} {$config.image_sizes.sm}, {author.picture.md} {$config.image_sizes.md}, {author.picture.lg} {$config.image_sizes.lg}, {author.picture.xl} {$config.image_sizes.xl}, {author.picture.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
</svelte:head>

<article class="prose mx-auto text-base prose-headings:font-[500]">
    <Figure css="aspect-square w-full" alt={author.name} img={author.picture} width={author.picture.width} height={author.picture.height} i/>
    <h1 class="not-prose">About {author.name.split(" ")[0]}</h1>
    <p class="sm:py-6 py-3">{@html marked(author.intro.markdown)}</p>
    
    <h2 class="text-2xl">Biography</h2>
    <p>{@html marked(author.bio.markdown)}</p>
</article>