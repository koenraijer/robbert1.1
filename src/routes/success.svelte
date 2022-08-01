<script>
    import {marked} from 'marked';
    export let contactContent, pageinfo;
</script>

<svelte:head>
    <title>{pageinfo.success.title}</title>
	<meta name="description" content={pageinfo.success.description}/>

	<!--Facebook-->
	<meta property="og:description" content={pageinfo.success.description} />
	<meta property="og:title" content={pageinfo.success.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={pageinfo.success.title} />
</svelte:head>
<div class="prose mx-auto pt-16">
    <h1 class="p-0 m-0 !text-2xl">{contactContent.formSuccessTitle}</h1>
    <p class="pb-2 text-sm sm:text-base">{@html marked(contactContent.formSuccessText.markdown)}</p>
    <a href="/" class="no-underline py-2 text-primary px-3 hover:bg-primary transition-colors border-2 border-primary hover:text-white cursor-pointer" alt="Links to home">Go back</a>
</div>