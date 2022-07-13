<script>
    export let posts;
    import Figure from '$lib/components/Figure.svelte'
    import {config} from '$lib/js/stores'
</script>

<svelte:head>
    <link rel="preload" as="image" href="{posts[0].coverImage.xxl}" imagesrcset="{posts[0].coverImage.sm} {$config.image_sizes.sm}, {posts[0].coverImage.md} {$config.image_sizes.md}, {posts[0].coverImage.xl} {$config.image_sizes.xl}, {posts[0].coverImage.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
</svelte:head>

<div class="max-w-[65ch] mx-auto text-base prose-headings:!font-normal mb-8">
    <span class="prose"><h1 class="">Blog</h1></span>
    {#each posts as {title, date, slug, coverImage, snippet}, i} 
        <a sveltekit:prefetch class="block mb-20 h-fit group" href="/blog/{slug}" alt={title}>
            <Figure css="pb-4 mb-0 mt-8 object-contain w-full h-auto" alt={title} img={coverImage} width={coverImage.width} height={coverImage.height} i={i}/>
            <h2 class="text-xl pb-2 group-hover:underline uppercase text-inherit">{title}</h2>
            <p class="text-gray-500 pb-6 pt-2 text-base">{snippet}</p>
            <div class="flex flex-row row-nowrap justify-between items-end">
                <time title="Date first published" class="text-gray-600 text-xs font-header uppercase" datetime="{date}">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <div class="">
                    <a href="/blog/{slug}" alt="{title}" class="group-hover:text-secondary-focus transition-colors text-xs font-header uppercase">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-secondary-focus w-3 h-3 inline-flex transform transition-transform group-hover:translate-x-1" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
                    </a>
                </div>
            </div>
            <div class="w-full border-t border-gray-200 border"></div>
        </a>
    {/each}
</div>