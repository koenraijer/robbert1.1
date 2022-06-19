<script>
	import {autoresize} from 'svelte-textarea-autoresize'
</script>

<div class="prose mx-auto">
    <h1 class="p-0 m-0">Contact</h1>
    <p class="pb-6">Leave a message and I'll get back to you as soon as possible!</p>
	<form>
		<div class="relative z-0 mb-8 w-full group">
			<input type="text" name="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_name" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
		</div>
		<div class="relative z-0 mb-8 w-full group">
			<input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_email" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
		</div>
        <div class="relative z-0 mb-6 w-full group">
			<textarea use:autoresize type="text" name="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-focus peer" placeholder=" " required />
			<label for="floating_message" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
		</div>
		<button type="submit" class="btn btn-outline btn-primary">Submit</button>
	</form>
</div>

