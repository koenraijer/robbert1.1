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
      @apply text-secondary;
      text-shadow: -0.04ex 0 currentColor, 0.04ex 0 currentColor;
    }

    a {
        @apply bg-transparent uppercase font-header tracking-[0.15em] text-base
    }

    a:hover {
        @apply text-secondary transition-colors;
    }
  </style>