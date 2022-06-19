<script>
    export let commercials, clients
    import Figure from "$lib/components/Figure.svelte";
</script>

<div class="mb-6">
    <h1 class="w-screen">Commercial</h1>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
    {#each commercials as {name, image, slug}, i} 
        <a sveltekit:prefetch class="group grid place-items-center w-full max-w-screen pb-3 sm:pb-6" href="/commercial/{slug}">
            <Figure css="row-start-1 col-start-1 transition-opacity group-hover:opacity-50" alt={name} img={image[0]} sm md lg xl xxl width={image[0].width} height={image[0].height} i/>
            <h2 class="row-start-1 col-start-1 p-4 text-xl invisible group-hover:visible">{name}</h2>
        </a>
    {/each}
</div>
<div class="flex flex-row flex-nowrap justify-between max-w-screen">
    {#each clients as {name, logo}}
        <img class="p-3 sm:p-6 object-contain aspect-auto max-h-32"src={logo.url} alt={name}>
    {/each}
</div>
