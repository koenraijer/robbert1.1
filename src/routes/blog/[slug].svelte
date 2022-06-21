<script context="module">
    import {client} from '$lib/js/graphql-client'
    import {postQuery} from '$lib/js/graphql-queries'
    export const load = async ({ params }) => {
        const {slug} = params

        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const variables = {sm, md, lg, xl, xxl, slug}

        const {post} = await client.request(postQuery, variables)

        return {
            props: {
                post, sm, md, lg, xl, xxl
            }
        }
    }
</script>
<script>
    import Figure from '$lib/components/Figure.svelte'
    import {config} from "$lib/js/stores"
    import {marked} from 'marked';
    export let post
</script>

<svelte:head>
    <link rel="preload" as="image" href="{post.coverImage.xxl}" imagesrcset="{post.coverImage.sm} {$config.image_sizes.sm}, {post.coverImage.md} {$config.image_sizes.md}, {post.coverImage.lg} {$config.image_sizes.lg}, {post.coverImage.xl} {$config.image_sizes.xl}, {post.coverImage.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
</svelte:head>

<article class="prose mx-auto text-base prose-headings:font-[500]">
    <Figure css="transition-opacity group-hover:opacity-50 pb-6" alt={post.title} img={post.coverImage} width={post.coverImage.width} height={post.coverImage.height} i="0"/>
    <h2 class="m-0 p-0 pb-6 text-base text-gray-500 font-normal">{post.date}</h2>
    <h1 class="m-0 p-0 pb-2">{post.title}</h1>
    {@html marked(post.content.markdown)}
</article>
