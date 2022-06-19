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
    import { marked } from 'marked';
    export let project
</script>

<h1 class="text-4xl text-center mx-auto">{project.name}</h1>
<p class="text-center sm:w-5/6 mx-auto mb-6 sm:mb-12">{@html marked(project.description.markdown)}</p>
{#each project.image as image, i}
    <Figure css="pb-3 sm:pb-6 lg:max-h-[95vh]" alt={project.name} img={image} sm md lg xl xxl width={image.width} height={image.height} i/>
{/each}

