<script context="module">
    import {client} from '$lib/js/graphql-client'
    import {postQuery} from '$lib/js/graphql-queries'
    export const load = async ({ params }) => {
        const {slug} = params

        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 2560;

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

<article class="prose mx-auto text-sm sm:text-base prose-headings:font-normal mb-8">
    <Figure css="pb-2 w-full h-full" alt={post.title} img={post.coverImage} width={post.coverImage.width} height={post.coverImage.height} i="0"/>
    <time title="Date first published" class="text-gray-500 text-sm font-header uppercase" datetime="{post.date}">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
    <h1 class="!text-2xl">{post.title}</h1>
    {@html marked(post.content.markdown)}
</article>
