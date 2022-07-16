<script>
    export let commercials, clients
    import Figure from "$lib/components/Figure.svelte";
    import {config} from '$lib/js/stores'
    import Clients from '$lib/components/Clients.svelte'


    commercials.sort(function(a,b) {
        return a.index > b.index;
    })

    const nums_per_group = Math.ceil(clients.length / 3);
    const clients_grouped = new Array(3).fill('').map((_, i) => clients.slice(i * nums_per_group, (i + 1) * nums_per_group));

</script>

<svelte:head>
    <link rel="preload" as="image" href="{commercials[0].image[0].xxl}" imagesrcset="{commercials[0].image[0].sm} {$config.image_sizes.sm}, {commercials[0].image[0].md} {$config.image_sizes.md}, {commercials[0].image[0].lg} {$config.image_sizes.lg}, {commercials[0].image[0].xl} {$config.image_sizes.xl}, {commercials[0].image[0].xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
    
</svelte:head>

<section class="max-w-screen-lg">
    {#each commercials as {name, image, slug, coverImage}, i} 
        <a sveltekit:prefetch class="mx-auto relative group grid transition-all place-items-center w-full pb-3 sm:pb-6" href="/commercial/{slug}">
            <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50" alt={name} img={image[coverImage - 1]} width={image[coverImage - 1].width} height={image[coverImage - 1].height} i={i}/>
            <h2 class="invisible group-hover:visible absolute text-white text-2xl uppercase left-4 sm:left-8 font-extralight text-opacity-50 ">{name}</h2>
        </a>
    {/each}
</section>
<Clients {clients}/>