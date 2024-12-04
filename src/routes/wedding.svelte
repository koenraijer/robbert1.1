<script>
    import { browser } from '$app/env'; 
    import Figure from '$lib/components/Figure.svelte'
    import {config, seo} from '$lib/js/stores'
    export let weddings, pageinfo

    // Validate data before rendering
    $: validWeddings = weddings?.filter(wedding => 
        wedding?.slug && 
        wedding?.name && 
        wedding?.image?.length > 0 && 
        wedding?.coverImage && 
        wedding.coverImage <= wedding.image.length
    ) ?? [];

    // Helper function for image safety
    function getCoverImage(wedding) {
        try {
            const imageIndex = (wedding.coverImage - 1) || 0;
            const image = wedding.image[imageIndex];
            if (!image) throw new Error('Invalid cover image');
            return image;
        } catch (error) {
            console.error(`Failed to get cover image for wedding ${wedding?.name}:`, error);
            return null;
        }
    }
</script>

<svelte:head>
    {#if validWeddings.length > 0 && getCoverImage(validWeddings[0])}
        {@const coverImage = getCoverImage(validWeddings[0])}
        <link rel="preload" 
              as="image" 
              href={coverImage.xxl} 
              imagesrcset="{coverImage.sm} {$config.image_sizes.sm}, 
                          {coverImage.md} {$config.image_sizes.md}, 
                          {coverImage.lg} {$config.image_sizes.lg}, 
                          {coverImage.xl} {$config.image_sizes.xl}, 
                          {coverImage.xxl} {$config.image_sizes.xxl}" 
              imagesizes="100vw">
    {/if}
    <title>{pageinfo?.wedding?.title ?? 'Weddings'}</title>
    <meta name="description" content={pageinfo?.wedding?.description ?? ''}>

    <!--Facebook-->
    <meta property="og:description" content={pageinfo?.wedding?.description ?? ''} />
    <meta property="og:title" content={pageinfo?.wedding?.title ?? 'Weddings'} />

    <!--Twitter-->
    <meta name="twitter:title" content={pageinfo?.wedding?.title ?? 'Weddings'} />
</svelte:head>

{#if validWeddings.length === 0}
    <p class="text-center py-4">No wedding galleries available</p>
{:else}
    {#each validWeddings as wedding, i} 
        {@const coverImage = getCoverImage(wedding)}
        {#if coverImage}
            <a sveltekit:prefetch 
               class="mx-auto relative group grid transition-all place-items-center w-full pb-3 sm:pb-6" 
               href="/wedding/{wedding.slug}">
                <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50" 
                       alt={wedding.name} 
                       img={coverImage} 
                       width={coverImage.width} 
                       height={coverImage.height} 
                       i={i}/>
                <h2 class="invisible font-header group-hover:visible absolute text-white text-2xl uppercase left-4 sm:left-8 font-extralight text-opacity-50">
                    {wedding.name}
                </h2>
            </a>
        {/if}
    {/each}
{/if}