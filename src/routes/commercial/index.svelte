<script>
    export let commercials, clients
    import Figure from "$lib/components/Figure.svelte";
    import {config} from '$lib/js/stores'

</script>

{#each commercials as {name, image, slug}, i} 
    <a sveltekit:prefetch class="mx-auto relative group grid place-items-center w-full pb-3 sm:pb-6" href="/commercial/{slug}">
        <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50 !aspect-video max-h-[75vh]" alt={name} img={image[0]} sm={$config.image_sizes.sm} md={$config.image_sizes.md} lg={$config.image_sizes.lg} xl={$config.image_sizes.xl} xxl={$config.image_sizes.xxl} width={image[0].width} height={image[0].height} i/>
        <h2 class="invisible group-hover:visible absolute text-white text-2xl uppercase sm:bottom-20 sm:left-16 left-4 bottom-6 font-extralight">{name}</h2>
    </a>
{/each}

<div class="flex flex-row flex-nowrap justify-between max-w-screen">
    {#each clients as {name, logo}}
        <img class="p-3 sm:p-6 object-contain aspect-auto max-h-32"src={logo.url} alt={name}>
    {/each}
</div>
