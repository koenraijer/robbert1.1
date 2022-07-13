<script>
	import {autoresize} from 'svelte-textarea-autoresize'
	import {config} from '$lib/js/stores'
	let name, email, message;
	let show_success_message = false; 
	let show_user_instructions = false;
	let user_instructions

	async function submit_form() {
		const res = await fetch('./api/send_message.json', {
			method: 'POST',
			body: JSON.stringify({name: name, email: email, message: message})
		})
		if(res.ok) {
			show_success_message = true;
			name = ""
			email = ""
			message = ""
		}
		if (!res.ok) {
			const response = await res.text()
			console.log(response)
			show_user_instructions = true
			user_instructions = response
		}
	} 
      
	
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Get in touch with Robbert." />

	<!--Facebook-->
	<meta property="og:image" content={$config.OG_image} />
	<meta property="og:description" content={$config.descr} />
	<meta property="og:title" content={$config.title} />

	<!--Twitter-->
	<meta name="twitter:title" content={$config.title} />
</svelte:head>
<div class="prose mx-auto">
    <h1 class="p-0 m-0 uppercase">Contact</h1>
    <p class="pb-6">Leave a message and I'll get back to you as soon as possible!</p>
	<form method="POST">
		<div class="relative z-0 mb-8 w-full group">
			<input bind:value={name} type="text" name="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_name" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
		</div>
		<div class="relative z-0 mb-8 w-full group">
			<input bind:value={email} type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_email" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
		</div>
        <div class="relative z-0 mb-6 w-full group">
			<textarea bind:value={message} use:autoresize type="text" name="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_message" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
		</div>
		<button on:click|preventDefault={submit_form} type="submit" class="btn btn-outline btn-primary">Submit</button>
		{#if show_success_message}
			<span>You've successfully submitted the message!</span>
		{:else if show_user_instructions}
			<span>{user_instructions}</span>
		{/if}
	</form>
</div>

<!--
	- Capture form values on contact page. 
	- POST request to `send_message.js` with form values as params_obj.Contact
	- Inside `send_message.js`, decode params_obj, then use `messageQuery` to create a new message.

	TO SEND IT BY EMAIL:
	- Configure webhook in GraphCMS that triggers when new draft Contact entry is received.
	- Send that webhook as a POST request to an endpoint. From there, use https://vercel.com/docs/concepts/solutions/email to send the email. 
-->