<script>
    import {socials} from '$lib/js/stores'

</script>
<div class="flex flex-row row-nowrap gap-4">
    {#each $socials as {url, title, icon}}
        <a href={url} alt={title}>{@html icon}</a>
    {/each}
</div>

<style>
        a.active {
        @apply text-secondary;
        text-shadow: -0.04ex 0 currentColor, 0.04ex 0 currentColor;
    }

    a {
        @apply bg-transparent uppercase font-header tracking-[0.15em]
    }

    a:hover {
        @apply text-secondary transition-colors;
    }
  </style>