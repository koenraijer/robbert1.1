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
	<!--Facebook-->
	<meta property="og:image" content={$seo.ogImageUrl} />

	<!--Favicons-->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">
</svelte:head>

<div class:overlay={$menu.open === true}></div>

<div class="flex flex-col min-h-screen mx-4 md:mx-12">
	<Nav {scroll_up} {page_offset} />

	{#key currentRoute}
	<main in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="h-fit overflow-hidden mx-auto flex-grow max-w-screen-lg  xl:max-w-screen-2xl">
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