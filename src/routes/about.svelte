<script>
    import {marked} from 'marked';
    import Figure from '$lib/components/Figure.svelte';
    import {config} from '$lib/js/stores'
    export let about;

</script>

<svelte:head>
    <link rel="preload" as="image" href="{about.picture.xxl}" imagesrcset="{about.picture.sm} {$config.image_sizes.sm}, {about.picture.md} {$config.image_sizes.md}, {about.picture.lg} {$config.image_sizes.lg}, {about.picture.xl} {$config.image_sizes.xl}, {about.picture.xxl} {$config.image_sizes.xxl}" imagesizes="50vw">
    <title>{about.pageTitle}</title>
	<meta name="description" content="Robbert Lalisang Photography - About page." />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$config.descr} />
	<meta property="og:title" content={$config.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={$config.title} />
</svelte:head>

<article class="prose mx-auto text-base prose-headings:!font-normal">
    <Figure css="object-cover" alt={about.pageTitle} img={about.picture} width={about.picture.width} height={about.picture.height}/>
    <h1 class="uppercase">{about.pageTitle}</h1>
    
    <p>{@html marked(about.content.markdown)}</p>

    <h2>Latest Instagram posts</h2> 
    <div class="tagembed-container" style=" width:100%;height:100%;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="50203" view-url="https://widget.tagembed.com/50203?view">  </div> <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script></div>
</article>

