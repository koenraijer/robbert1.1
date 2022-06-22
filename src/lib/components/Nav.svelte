<script>
    export let scroll_up, page_offset;

    import {fly, fade} from 'svelte/transition'
    import Title from '$lib/components/Title.svelte'
    import {menu} from '$lib/js/stores'
    import {clickOutside} from '$lib/js/utils'
    import Navlink from '$lib/components/Navlink.svelte'

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

{#if scroll_up && page_offset > 60}
    <nav in:fade="{{ duration: 100 }}" out:fade="{{ duration: 100 }}" use:clickOutside on:click_outside={handle_click} class="py-2 w-full pr-4 flex flex-row flex-nowrap justify-between place-items-center !z-100 {scroll_up && page_offset > 60 ? "fixed w-full bg-white !z-50 top-0" : "hidden"} pr-12">
        <!-- Navbar content -->
            <!-- Title -->
            <div class="w-fit">
                <a href="{navigation[0].url}"><Title {scroll_up} {page_offset}/></a>
            </div>

            <!-- Menu items -->
            <div class="hidden lg:block text-sm">
            <ul class="flex flex-row row-nowrap justify-start">
                {#each navigation as item}
                    {#if item.navigation}
                        <li class="pr-4 pl-2 dropdown dropdown-hover">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label tabindex="0" class="">
                                <Navlink href={item.url}>{item.title}</Navlink>
                            </label>
                            <ul tabindex="0" class="menu dropdown-content !top-full pl-2 bg-white w-5/6 shadow-md rounded-md">
                                {#each item.navigation as sub_item}
                                    <li><Navlink href={sub_item.url}>{sub_item.title}</Navlink></li>
                                {/each}
                            </ul>
                        </li>
                    {:else}
                        <li class="pr-4 pl-2"><Navlink href={item.url}>{item.title}</Navlink></li>
                    {/if}
                {/each}
            </ul>
            </div>

            <!-- Hamburger icon -->
            <button class="lg:hidden hover:stroke-primary hover:cursor-pointer" on:click={() => open = !open}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
    </nav>
{/if}

<nav use:clickOutside on:click_outside={handle_click} class="py-4 sm:py-6 flex flex-row flex-nowrap justify-between place-items-center !z-100">
    <!-- Navbar content -->
        <!-- Title -->
        <div class="w-fit">
            <a href="{navigation[0].url}"><Title {scroll_up} {page_offset}/></a>
        </div>

        <!-- Menu items -->
        <div class="hidden lg:block text-sm">
        <ul class="flex flex-row row-nowrap justify-start">
            {#each navigation as item}
                {#if item.navigation}
                    <li class="pr-6 dropdown dropdown-hover">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label tabindex="0" class="">
                            <Navlink href={item.url}>{item.title}</Navlink>
                        </label>
                        <ul tabindex="0" class="menu dropdown-content !top-full pl-2 bg-white w-5/6 shadow-md rounded-md">
                            {#each item.navigation as sub_item}
                                <li><Navlink href={sub_item.url}>{sub_item.title}</Navlink></li>
                            {/each}
                        </ul>
                    </li>
                {:else}
                    <li class="pr-4 pl-2"><Navlink href={item.url}>{item.title}</Navlink></li>
                {/if}
            {/each}
        </ul>
        </div>

        <!-- Hamburger icon -->
        <button class="lg:hidden hover:stroke-primary hover:cursor-pointer" on:click={() => open = !open}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
</nav>

<!--Sidebar content-->
{#if open}
<aside in:fly="{{ x: 100, duration: 300 }}" out:fly="{{ x: 100, duration: 300 }}" class="bg-base-100 fixed {open ? "right-0" : "-right-full"} lg:hidden w-full md:w-2/6 md:text-left text-center h-screen top-0 p-4 sm:p-6 !z-[52]">

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
    <ul class="text-lg">
        {#each navigation as item}
            {#if item.navigation}
                <li class="pb-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <Navlink href={item.url}>{item.title}</Navlink>
                    <ul class="pl-4 pt-2 text-base">
                        {#each item.navigation as sub_item}
                            <li class="pb-2 !gap-0 !p-0"><Navlink css="!gap-0 !p-0" href={sub_item.url}>{sub_item.title}</Navlink></li>
                        {/each}
                    </ul>
                </li>
            {:else}
                <li class="pb-2"><Navlink href={item.url}>{item.title}</Navlink></li>
            {/if}
        {/each}
    </ul>
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