<script>
    import Figure from '$lib/components/Figure.svelte'
    export let projects

    projects.sort(function(a,b) {
        return a.index > b.index;
    })

    console.log(projects)
</script>

{#each projects as {slug, name, image}, i} 
    <a sveltekit:prefetch class="mx-auto relative group grid place-items-center w-full pb-3 sm:pb-6" href="/projects/{slug}">
        <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50 !aspect-video max-h-[75vh]" alt={name} img={image[0]} sm md lg xl xxl width={image[0].width} height={image[0].height} i/>
        <h2 class="invisible group-hover:visible absolute text-white text-2xl uppercase bottom-20 left-16">{name}</h2>
    </a>
{/each}
