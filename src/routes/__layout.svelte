<script context="module">
	export async function load({ url }) {
		const currentRoute = url.pathname; 
		return {
			props: {
				currentRoute
			}
		};
	};
</script>
<script>
	import '../app.css';
	import {browser} from '$app/env'
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import {menu} from '$lib/js/stores'
	import {navigating} from '$app/stores'
	import {config, seo} from '$lib/js/stores'
	export let currentRoute

	$: if($navigating)
		$menu.open = false
	
	let scroll_up;
	let page_offset;
	let old_page_offset;

	if(browser) {
		window.addEventListener('scroll', (e) => {
			page_offset = window.pageYOffset;
			if (old_page_offset < page_offset) {
				scroll_up = false;
			} else if (old_page_offset > page_offset) {
				scroll_up = true;
			}
			old_page_offset = page_offset;
			});
	}
</script>

<svelte:head>
	<title>{$seo.title}</title>
	<meta name="description" content={$seo.description} />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$seo.description} />
	<meta property="og:title" content={$seo.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={$seo.title} />

	<!--Favicons-->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">

	<!--GoatCounter-->
	<script data-goatcounter="https://koenraijer.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet"> 
	<!--Preloading-->
</svelte:head>

<div class:overlay={$menu.open === true}></div>

<div class="flex flex-col min-h-screen mx-4 sm:mx-6">
	<Nav {scroll_up} {page_offset} />

	{#key currentRoute}
	<main in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="pt-0 sm:pt-6 h-fit overflow-hidden max-w-screen-xl mx-auto flex-grow">
			<slot></slot>
	</main>
	{/key}

	<Footer/>
</div>
<!--
	<Navigation>
	{#key currentRoute}
		<main in:fade={{ duration: 300 }} out:fade={{ duration: 300 }} class="pt-0 sm:pt-6 mx-3 sm:mx-6 overflow-x-hidden">
			<slot></slot>
		</main>
	{/key}
</Navigation>
-->

<style>
	.overlay {
		display: block;
		position: fixed;
		width: 100vw;
		height: 125vh;
		transform: translateY(-25vh);
		z-index: 51 !important;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: background-color 0.3s ease-in-out;
	}
</style>