<script>
    export let posts;
    import Figure from '$lib/components/Figure.svelte'
    import {config} from '$lib/js/stores'
</script>

<svelte:head>
    <link rel="preload" as="image" href="{posts[0].coverImage.xxl}" imagesrcset="{posts[0].coverImage.sm} {$config.image_sizes.sm}, {posts[0].coverImage.md} {$config.image_sizes.md}, {posts[0].coverImage.xl} {$config.image_sizes.xl}, {posts[0].coverImage.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
</svelte:head>

<div class="max-w-[65ch] mx-auto text-base prose-headings:font-[500]">
    <span class="prose"><h1>Blog</h1></span>
    {#each posts as {title, date, slug, coverImage, snippet}, i} 
        <a sveltekit:prefetch class="pb-3 h-fit" href="/blog/{slug}">
            <Figure css="pb-2 mb-0 object-cover !aspect-video" alt={title} img={coverImage} width={coverImage.width} height={coverImage.height} i={i}/>
            <h2 class="text-xl pb-2">{title}</h2>
            <p class="text-gray-600 pb-2">{snippet}</p>
            <span class="text-gray-500 text-xs">{date}</span>
        </a>
    {/each}
</div>