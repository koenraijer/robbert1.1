<script context="module">
    import {client} from '$lib/js/graphql-client'
    import {weddingQuery} from '$lib/js/graphql-queries'
    export const load = async ({ params }) => {
        const {slug} = params

        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const variables = {sm, md, lg, xl, xxl, slug}

        const {wedding} = await client.request(weddingQuery, variables)

        const project = wedding
        return {
            props: {
                project, sm, md, lg, xl, xxl
            }
        }
    }
</script>
<script>
    import Figure from '$lib/components/Figure.svelte'
    import {config} from '$lib/js/stores'
    import {marked} from 'marked';
    import { browser } from '$app/env';
    export let project

    const threePartIndex = Math.ceil(project.image.length / 3);
    const twoPartIndex = Math.ceil(project.image.length / 2);
    let images = project.image

    const secondOfTwo = images.slice().splice(-twoPartIndex);
    const firstOfTwo = images.slice().splice(0, (project.image.length % 2 === 0 ? twoPartIndex : twoPartIndex - 1));

    const thirdOfThree = images.splice(-threePartIndex);
    const secondOfThree = images.splice(-threePartIndex);
    const firstOfThree = images.splice(0, threePartIndex); 

</script>

<svelte:head>
    <link rel="preload" as="image" href="{project.image.xxl}" imagesrcset="{project.image.sm} {$config.image_sizes.sm}, {project.image.md} {$config.image_sizes.md}, {project.image.lg} {$config.image_sizes.lg}, {project.image.xl} {$config.image_sizes.xl}, {project.image.xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
    <title>{project.name}</title>
	<meta name="description" content="Robbert Lalisang Photography - {project.name}" />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$config.descr}/>
	<meta property="og:title" content={project.name} />

	<!--Twitter-->
	<meta name="twitter:title" content={project.name} />
</svelte:head>

<h1 class="text-xl font-headings text-primary text-center mx-auto my-4">{project.name}</h1>
<p class="text-center text-sm sm:w-5/6 mx-auto mb-6 sm:mb-12">{@html marked(project.description.markdown)}</p>

<section class="">
    {#if project.colNum === 3}
        <div class="grid md:grid-cols-3 grid-cols-1 w-full h-full gap-4">
            <div class="flex flex-col row-nowrap gap-4 items-start">
                {#each firstOfThree as image, i}
                        <Figure css="w-full h-auto object-contain" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
            <div class="flex flex-col row-nowrap gap-4 items-start">
                {#each secondOfThree as image, i}
                        <Figure css="w-full h-auto object-contain" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
            <div class="flex flex-col row-nowrap gap-4 items-start">
                {#each thirdOfThree as image, i}
                        <Figure css="w-full h-auto  object-contain" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
        </div>
    {:else if project.colNum === 2}
        <div class="grid sm:grid-cols-2 grid-cols-1 w-full h-full gap-4">
            <div class="flex flex-col row-nowrap gap-4">
                {#each firstOfTwo as image, i}
                        <Figure css="max-h-full min-w-full object-cover" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
            <div class="flex flex-col row-nowrap gap-4 items-start">
                {#each secondOfTwo as image, i}
                        <Figure css="max-h-full min-w-full object-cover" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
        </div>
    {:else if project.colNum === 1}
        <div class="grid grid-cols-1 w-full h-full gap-4">
            <div class="flex flex-col row-nowrap gap-4">
                {#each firstOfTwo as image, i}
                        <Figure css="max-h-full min-w-full object-cover" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
            <div class="flex flex-col row-nowrap gap-4 items-start">
                {#each secondOfTwo as image, i}
                        <Figure css="max-h-full min-w-full object-cover" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
                {/each}
            </div>
        </div>
    {/if}
</section>


<!--
Simple flex-row design
<section class="flex flex-row flex-wrap gap-4 justify-start">
    {#each firstOfThree as image, i}
        <Figure css="h-auto w-[30rem]" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
    {/each}
</section>


<div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-dense gap-3 sm:gap-6">
    {#each project.image as image, i}
        <Figure css="{image.width > image.height ? "col-span-2 lg:max-h-[95vh]" : "col-span-2 sm:col-span-1 lg:max-h-full"}" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
    {/each}
</div>

<section class="gap-2 p-2 justify-center grid grid-rows-[masonry] grid-cols-[repeat(auto-fit,_min({project.minWidth}em,_100%))]">
    {#each project.image as image, i}
        <Figure css="" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
    {/each}
</section>

<ul class="flex flex-wrap h-full">
    <li class="min-h-48 flex-grow">
        {#each project.image as image, i}
        <Figure css="object-cover max-h-full min-h-full h-48 align-botom" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
        {/each}
    </li>
</ul>
-->


<style>
    .grid--masonry {
        display: grid;
        grid-template-columns: repeat(auto-fit, min(25em, 100%));
        grid-template-rows: masonry;
        justify-content: center;
        grid-gap: 0.5rem;
        padding: 0.5rem;
    }

li:last-child {
  flex-grow: 10;
}

 /* https://css-tricks.com/adaptive-photo-layout-with-flexbox/ */
</style>