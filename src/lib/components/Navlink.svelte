<script>
    import { page } from "$app/stores"
    export let href, css = " ", tabindex = 0;
    $: active = $page.url.pathname === href
  </script>
  
  <a sveltekit:prefetch {href} class:active class="{css}" tabindex="{tabindex}">
    <slot />
  </a>
  
  <style>
    a.active {
      @apply text-secondary-focus font-semibold
    }

    a {
        @apply bg-transparent uppercase
    }
  </style>