<script>
    import Figure from '$lib/components/Figure.svelte'
    import {config} from '$lib/js/stores'
    export let projects

    projects.sort(function(a,b) {
        return a.index > b.index;
    })
</script>

<svelte:head>
    <link rel="preload" as="image" href="{projects[0].image[0].xxl}" imagesrcset="{projects[0].image[0].sm} {$config.image_sizes.sm}, {projects[0].image[0].md} {$config.image_sizes.md}, {projects[0].image[0].lg} {$config.image_sizes.lg}, {projects[0].image[0].xl} {$config.image_sizes.xl}, {projects[0].image[0].xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
</svelte:head>

{#each projects as {slug, name, image}, i} 
    <a sveltekit:prefetch class="mx-auto relative group grid place-items-center w-full pb-3 sm:pb-6" href="/projects/{slug}">
        <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50 !aspect-video max-h-[75vh]" alt={name} img={image[0]} width={image[0].width} height={image[0].height} i={i}/>
        <h2 class="invisible group-hover:visible absolute text-white text-2xl uppercase sm:bottom-20 sm:left-16 left-4 bottom-6 font-extralight">{name}</h2>
    </a>
{/each}

