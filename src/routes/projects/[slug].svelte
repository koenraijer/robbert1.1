<script context="module">
    import {client} from '$lib/js/graphql-client'
    import {projectQuery} from '$lib/js/graphql-queries'
    export const load = async ({ params }) => {
        const {slug} = params

        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const variables = {sm, md, lg, xl, xxl, slug}

        const {project} = await client.request(projectQuery, variables)

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
    export let project
</script>

<svelte:head>
    <link rel="preload" as="image" href="{project.image.xxl}" imagesrcset="{project.image.sm} {$config.image_sizes.sm}, {project.image.md} {$config.image_sizes.md}, {project.image.lg} {$config.image_sizes.lg}, {project.image.xl} {$config.image_sizes.xl}, {project.image.xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
</svelte:head>

<h1 class="text-4xl text-center mx-auto">{project.name}</h1>
<p class="text-center sm:w-5/6 mx-auto mb-6 sm:mb-12">{@html marked(project.description.markdown)}</p>

<div class="grid grid-cols-2 grid-flow-dense gap-3 sm:gap-6">
    {#each project.image as image, i}
        <Figure css="{image.width > image.height ? "col-span-2 lg:max-h-[95vh]" : "col-span-1 lg:max-h-full"}" alt={project.name} img={image} width={image.width} height={image.height} i={i}/>
    {/each}
</div>


