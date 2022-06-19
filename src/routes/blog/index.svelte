<script>
    export let posts;
    import Figure from '$lib/components/Figure.svelte'
</script>

<div class="prose-headings:font-[500] prose mb-6">
    <h1 class="text-center mx-auto w-screen">Blog</h1>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 h-full">
    {#each posts as {title, date, slug, coverImage, snippet}, i} 
        <a sveltekit:prefetch class="pb-3 h-fit" href="/blog/{slug}">
            <Figure css="pb-2 mb-0 object-cover !aspect-video" alt={title} img={coverImage} sm md lg xl xxl width={coverImage.width} height={coverImage.height} i/>
            <h2 class="text-xl pb-2">{title}</h2>
            <p class="text-gray-600 pb-2">{snippet}</p>
            <span class="text-gray-500 text-xs">{date}</span>
        </a>
    {/each}
</div>

<!--
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
    {#each posts as post, i} 
        <a sveltekit:prefetch class="group grid place-items-center w-full h-full pb-3 sm:pb-6" href="/commercial/{post.slug}">
            <img    
                    class="row-start-1 col-start-1 aspect-auto transition-opacity group-hover:opacity-50 w-full h-full" 
                    alt="{post.name}" 
                    data-srcset="{post.coverImage.sm} {sm + "w"}, {post.coverImage.md} {md + "w"}, {post.coverImage.lg} {lg + "w"}, {post.coverImage.xl} {xl + "w"}, {post.coverImage.xxl} {xxl + "w"}" 
                    srcset="{base64pixel}"
                    data-src="{post.coverImage.xxl}"
                    src="{base64pixel}"
                    use:useLazyImage={{ threshold: 0}} 
                    decoding={i < 1 ? "auto" : "async"} 
                    loading={i < 1 ? "eager" : "lazy"}
            />
            <h2 class="row-start-1 col-start-1 p-4 text-xl invisible group-hover:visible">{post.title} - {post.date}</h2>
        </a>
    {/each}
</div>
-->