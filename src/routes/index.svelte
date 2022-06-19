<script>
    import Figure from '$lib/components/Figure.svelte'
    export let projects, nav, sm, md, lg, xl, xxl

    /*
    $config.domain = configuration.configuration.domain
    $config.title = configuration.configuration.title
    $config.descr = configuration.configuration.description
    $config.OG_image = configuration.configuration.openGraphImage.url
    */

</script>

{#each projects as {slug, name, image}, i} 
    <a sveltekit:prefetch class="mx-auto group grid place-items-center w-full pb-3 sm:pb-6" href="/projects/{slug}">
        <Figure css="row-start-1 col-start-1 transition-opacity group-hover:opacity-90 !aspect-video max-h-[70vh]" alt={name} img={image[0]} sm md lg xl xxl width={image[0].width} height={image[0].height} i/>
        <h2 class="row-start-1 col-start-1 p-4 text-xl invisible group-hover:visible">{name}</h2>
    </a>
{/each}
