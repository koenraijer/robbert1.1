<script context="module">
    import {client} from '$lib/js/graphql-client'
    import {commercialQuery} from '$lib/js/graphql-queries'
    export const load = async ({ params }) => {
        const {slug} = params

        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const variables = {sm, md, lg, xl, xxl, slug}

        const {commercial} = await client.request(commercialQuery, variables)

        return {
            props: {
                commercial, sm, md, lg, xl, xxl
            }
        }
    }
</script>

<script>
    import Figure from '$lib/components/Figure.svelte'
    import {config} from '$lib/js/stores'
    import {marked} from 'marked';
    export let commercial
</script>

<svelte:head>
    <link rel="preload" as="image" href="{commercial.image.xxl}" imagesrcset="{commercial.image.sm} {$config.image_sizes.sm}, {commercial.image.md} {$config.image_sizes.md}, {commercial.image.lg} {$config.image_sizes.lg}, {commercial.image.xl} {$config.image_sizes.xl}, {commercial.image.xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
</svelte:head>

<h1 class="text-4xl text-center mx-auto">{commercial.name}</h1>
<p class="text-center sm:w-5/6 mx-auto mb-6">{@html marked(commercial.description.markdown)}</p>
{#each commercial.image as image, i}
    <Figure css="transition-opacity group-hover:opacity-50 pb-6" alt={commercial.name} img={image} sm md lg xl xxl width={image.width} height={image.height} i={i}/>
{/each}

