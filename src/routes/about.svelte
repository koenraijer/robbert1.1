<script>
    import {marked} from 'marked';
    import Figure from '$lib/components/Figure.svelte';
    import {config, pageInfo} from '$lib/js/stores'
    import {browser} from '$app/env'
    export let about;

    $: console.log($pageInfo)
</script>
<svelte:head>
    <link rel="preload" as="image" href="{about.picture.xxl}" imagesrcset="{about.picture.sm} {$config.image_sizes.sm}, {about.picture.md} {$config.image_sizes.md}, {about.picture.lg} {$config.image_sizes.lg}, {about.picture.xl} {$config.image_sizes.xl}, {about.picture.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
    <title>{$pageInfo.about.title}</title>
	<meta name="description" content="Robbert Lalisang Photography - About page." />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$config.descr} />
	<meta property="og:title" content={$config.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={$config.title} />
</svelte:head>

<article class="prose mx-auto text-base">
    <Figure css="object-cover w-5/6" alt={about.pageTitle} img={about.picture} width={about.picture.width} height={about.picture.height}/>
    <h1 class="!text-2xl mb-2 !py-0">{about.pageTitle}</h1>

    <p>{@html marked(about.content.markdown)}</p>

    <h2>Latest Instagram posts</h2> 
    <div class="tagembed-container" style=" width:100%;height:100%;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="50203" view-url="https://widget.tagembed.com/50203?view">  </div> <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script></div>
</article>

