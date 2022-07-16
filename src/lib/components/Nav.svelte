<script>
    export let scroll_up, page_offset;

    import {fly, fade} from 'svelte/transition'
    import Title from '$lib/components/Title.svelte'
    import {menu} from '$lib/js/stores'
    import {clickOutside} from '$lib/js/utils'
    import Navlink from '$lib/components/Navlink.svelte'
    import Socials from '$lib/components/Socials.svelte'
    import { onMount } from 'svelte';
    import { browser } from '$app/env';

    const navigation = [
        {
            title: 'Portfolio',
            url: '/',
        },
        {
            title: 'Commercial',
            url: '/commercial',
            navigation: [
                {
                    title: 'Wedding',
                    url: '/commercial/wedding'
                },
                {
                    title: 'Product',
                    url: '/commercial/product'
                }
            ]
        },
        {
            title: 'Blog',
            url: '/blog'
        },
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ]
    
    let open = $menu.open;

    $: $menu.open = open

    function handle_click() {
        if(open)
            return open = !open;
    }
</script>

{#if scroll_up && page_offset > 0}
    <nav in:fade="{{ duration: 150 }}" use:clickOutside on:click_outside={handle_click} class="py-2 sm:py-4 sm:pt-5 w-full flex flex-row flex-nowrap justify-between place-items-center !z-100 {scroll_up && page_offset > 0 ? "fixed w-full bg-white !z-50 top-0" : "hidden"} pr-12">
        <!-- Navbar content --> 
            <!-- Title -->
            <div class="w-fit">
                <a href="{navigation[0].url}"><Title {scroll_up} {page_offset}/></a>
            </div>

            <!-- Menu items -->
            <div class="hidden lg:flex text-base flex-row row-nowrap">
            <ul class="flex flex-row row-nowrap justify-start">
                {#each navigation as item}
                    {#if item.navigation}
                        <li class="mr-4 pl-2 dropdown dropdown-hover w-fit">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label tabindex="0" class="">
                                <Navlink href={item.url}>{item.title}</Navlink>
                            </label>
                            <ul tabindex="0" class="menu dropdown-content !top-full bg-white w-full">
                                {#each item.navigation as sub_item}
                                    <li class="w-fit mx-auto">
                                        <Navlink href={sub_item.url}>{sub_item.title}</Navlink>
                                    </li>
                                {/each}
                            </ul>
                        </li>
                    {:else}
                        <li class="pr-4 pl-2 last:border-r-2 last:border-primary"><Navlink href={item.url}>{item.title}</Navlink></li>
                    {/if}
                {/each}
            </ul>
                <div class="flex flex-row row-nowrap gap-4 pl-4 items-center">
                    <Socials navbar/>
                </div>
            </div>

            <!-- Hamburger icon -->
            <button class="lg:hidden hover:stroke-primary hover:cursor-pointer" on:click={() => open = !open}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
    </nav>
{/if}

<nav use:clickOutside on:click_outside={handle_click} class="py-2 sm:py-4 sm:pt-5 flex flex-row flex-nowrap justify-between place-items-center !z-100 text-primary">
    <!-- Navbar content -->
        <!-- Title -->
        <div class="w-fit">
            <a href="{navigation[0].url}"><Title {scroll_up} {page_offset}/></a>
        </div>

        <!-- Menu items -->
        <div class="hidden lg:flex text-base flex-row row-nowrap">
        <ul class="flex flex-row row-nowrap justify-start">
            {#each navigation as item}
                {#if item.navigation}
                    <li class="mr-4 pl-2 dropdown dropdown-hover w-fit">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label tabindex="0" class="">
                            <Navlink href={item.url}>{item.title}</Navlink>
                        </label>
                        <ul tabindex="0" class="menu dropdown-content !top-full bg-white w-full">
                            {#each item.navigation as sub_item}
                                <li class="w-fit mx-auto">
                                    <Navlink href={sub_item.url}>{sub_item.title}</Navlink>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {:else}
                    <li class="pr-4 pl-2 last:border-r-2 last:border-primary"><Navlink href={item.url}>{item.title}</Navlink></li>
                {/if}
            {/each}
        </ul>
            <div class="flex flex-row row-nowrap gap-4 pl-4 items-center">
                <Socials navbar />
            </div>
        </div>

        <!-- Hamburger icon -->
        <button class="lg:hidden hover:stroke-primary hover:cursor-pointer" on:click={() => open = !open}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
</nav>

<!--Sidebar content-->
{#if open}
<aside in:fly="{{ x: 100, duration: 300 }}" out:fly="{{ x: 100, duration: 300 }}" class="bg-base-100 fixed {open ? "right-0" : "-right-full"} lg:hidden w-full md:w-2/6 md:text-left text-center h-screen top-0 p-4 sm:p-6 !z-[52] flex flex-col min-h-screen">

    <!-- Sidebar header -->
    <div class="flex flex-row row-nowrap justify-between mb-8">
        <a sveltekit:prefetch href="{navigation[0].url}"><Title/></a>

        <button on:click={() => open = false} class="hover:stroke-primary hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <!-- Sidebar menu items -->
    <div class="flex-grow w-full md:block flex items-center">
        <ul class="h-[50vh] mb-12 w-full md:h-fit flex flex-col flex-nowrap justify-between text-xl md:text-lg">
            {#each navigation as item}
                {#if item.navigation}
                    <li class="pb-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <Navlink href={item.url}>{item.title}</Navlink>
                        <ul tabindex="0" class="menu dropdown-content !top-full bg-white w-full">
                            {#each item.navigation as sub_item}
                                <li class="w-fit mx-auto md:ml-0 md:mr-auto pt-2 text-base">
                                    <Navlink href={sub_item.url}>{sub_item.title}</Navlink>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {:else}
                    <li class="pb-4"><Navlink href={item.url}>{item.title}</Navlink></li>
                {/if}
            {/each}     
        </ul>
    </div>

    <!-- Area for social media icons -->
    <div class="w-fit mx-auto md:ml-0 md:mr-auto flex-row row-nowrap justify-center">
        <Socials navbar />
    </div>
</aside>
{/if}
<!--
  {
    "Homepage": [
      {"title": "Portfolio"},
      {"url": "/"}
    ],
    "Commercial": [
      {"title": "Commercial"},
      {"url": "/commercial"},
      {"submenu": [
          {"Wedding": [
              {"title": "Wedding"},
              {"url": "/commercial/wedding"}
          ]},
          {"Product": [
            {"title": "Product"},
            {"url": "/commercial/product"}
          ]}
    	]}
      ],
    "Blog": [
    	{"title": "Blog"},
		{"url": "/blog"}
    ],
   	"About": [
      {"title": "About"},
      {"url": "/about"}
    ],
    "Contact": [
      {"title": "Contact"},
      {"url": "/contact"}
     ]
  }
-->