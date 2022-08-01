<script>
    import Figure from '$lib/components/Figure.svelte'
    import Clients from '$lib/components/Clients.svelte'
    import {config} from '$lib/js/stores'
    export let commercials, clients
</script>

<svelte:head>
    <link rel="preload" as="image" href="{commercials[0].image[commercials[0].coverImage - 1].xxl}" imagesrcset="{commercials[0].image[commercials[0].coverImage - 1].sm} {$config.image_sizes.sm}, {commercials[0].image[commercials[0].coverImage - 1].md} {$config.image_sizes.md}, {commercials[0].image[commercials[0].coverImage - 1].lg} {$config.image_sizes.lg}, {commercials[0].image[commercials[0].coverImage - 1].xl} {$config.image_sizes.xl}, {commercials[0].image[commercials[0].coverImage - 1].xxl} {$config.image_sizes.xxl}" imagesizes="100vw">
    <title>Robbert Lalisang Photography</title>
	<meta name="description" content="Robbert Lalisang Photography - Homepage" />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$config.descr} />
	<meta property="og:title" content={$config.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={$config.title} />
</svelte:head>

<Clients {clients}/>

{#each commercials as {slug, name, image, coverImage}, i} 
    <a sveltekit:prefetch class="mx-auto relative group grid transition-all place-items-center w-full pb-3 sm:pb-6" href="/commercial/{slug}">
        <Figure css="row-start-1 col-start-1 transition-all group-hover:brightness-50" alt={name} img={image[coverImage - 1]} width={image[coverImage - 1].width} height={image[coverImage - 1].height} i={i}/>
        <h2 class="invisible font-header group-hover:visible absolute text-white text-2xl uppercase left-4 sm:left-8 font-extralight text-opacity-50 ">{name}</h2>
    </a>
{/each}

