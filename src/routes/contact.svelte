<script>
	import {autoresize} from 'svelte-textarea-autoresize'
	export let contactContent, pageinfo
	import {marked} from 'marked';
	import {seo} from '$lib/js/stores'
	let name, email, message
</script>

<svelte:head>
    <title>{pageinfo.contact.title}</title>
	<meta name="description" content={pageinfo.contact.description}/>

	<!--Facebook-->
	<meta property="og:image" content={$seo.ogImageUrl} />
	<meta property="og:description" content={pageinfo.contact.description} />
	<meta property="og:title" content={pageinfo.contact.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={pageinfo.contact.title} />
</svelte:head>


<div class="prose mx-auto pt-16">
    <h1 class="p-0 m-0 !text-2xl">Contact</h1>
    <p class="pb-6 text-sm sm:text-base">{@html marked(contactContent.formIntro.markdown)}</p>
		<form action="https://formsapi.jabwn.com/key/7jVUo8g3vfB22j8Dt5BW" method="post">
			<input type="hidden" name="_after" value="http://robbertlalisang.com/success">
			<input type="hidden" name="_confirmation" value="Thank you! We have received your message and will get back to you asap.">
			<input type="hidden" name="_subject" value="New form submitted">
			<div class="relative z-0 mb-8 w-full group">
				<input bind:value={name} type="text" name="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
				<label for="floating_name" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
				<input type="hidden" name="_valid[floating_name]" value="required">
			</div>
			<div class="relative z-0 mb-8 w-full group">
				<input bind:value={email} type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
				<label for="floating_email" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
				<input type="hidden" name="_valid[floating_email]" value="required|valid_email">
			</div>
			<div class="relative z-0 mb-6 w-full group">
				<textarea bind:value={message} use:autoresize type="text" name="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
				<label for="floating_message" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
				<input type="hidden" name="_valid[floating_message]" value="required">
			</div>
			<button type="submit" class="py-1 pb-[0.15rem] text-primary px-3 hover:bg-primary transition-colors border-2 border-primary hover:text-white">Submit</button>
			<input type="text" name="_honey" value="" style="display:none">
		</form>
</div>
