<script>
    export let commercials, clients
    import Figure from "$lib/components/Figure.svelte";
    import {config} from '$lib/js/stores'
    import {fade, fly} from 'svelte/transition'
    let j = 0;

    setInterval(() => {
        if(j >= 2) {
            j = 0
        } else {
            j += 1
        }
    }, 2000);

    commercials.sort(function(a,b) {
        return a.index > b.index;
    })

    const nums_per_group = Math.ceil(clients.length / 3);
    const clients_grouped = new Array(3).fill('').map((_, i) => clients.slice(i * nums_per_group, (i + 1) * nums_per_group));

</script>

<svelte:head>
    <link rel="preload" as="image" href="{commercials[0].image[0].xxl}" imagesrcset="{commercials[0].image[0].sm} {$config.image_sizes.sm}, {commercials[0].image[0].md} {$config.image_sizes.md}, {commercials[0].image[0].lg} {$config.image_sizes.lg}, {commercials[0].image[0].xl} {$config.image_sizes.xl}, {commercials[0].image[0].xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
</svelte:head>

{#each commercials as {name, image, slug}, i} 
    <a sveltekit:prefetch class="mx-auto relative group grid place-items-center w-full pb-3 sm:pb-6" href="/commercial/{slug}">
        <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50 !aspect-video max-h-[75vh]" alt={name} img={image[0]} width={image[0].width} height={image[0].height} i={i}/>
        <h2 class="invisible group-hover:visible absolute text-white text-2xl uppercase sm:bottom-20 sm:left-16 left-4 bottom-6 font-extralight">{name}</h2>
    </a>
{/each}

<div class="flex flex-row flex-nowrap justify-between max-w-screen">
    {#each clients_grouped as clients_group}
        {#key j}
            <img in:fly="{{ y: -100, duration: 300, delay: 500 }}" out:fly="{{ y: 100, duration: 300 }}" class="p-3 sm:p-6 object-contain aspect-auto max-h-32"src={clients_group[j].logo.url} alt={clients_group[j].name}>
        {/key}
    {/each}
</div>
