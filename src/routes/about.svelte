<script>
    import {marked} from 'marked';
    import Figure from '$lib/components/Figure.svelte';
    export let author;
</script>

<article class="prose mx-auto text-base prose-headings:font-[500]">
    <Figure css="aspect-square w-full" alt={author.name} img={author.picture} sm md lg xl xxl width={author.picture.width} height={author.picture.height} i/>
    <h1 class="not-prose">About {author.name.split(" ")[0]}</h1>
    <p class="sm:py-6 py-3">{@html marked(author.intro.markdown)}</p>
    
    <h2 class="text-2xl">Biography</h2>
    <p>{@html marked(author.bio.markdown)}</p>
</article>