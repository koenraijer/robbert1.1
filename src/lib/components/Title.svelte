<script>
    import {config, seo} from '$lib/js/stores'
    import {onMount} from 'svelte'
    
    export let scroll_up, page_offset;

    let first_name_chars = []
    let last_name_chars = []

    function chars (string) {  
        return Array.from(
            String(string)
        )
    }

    let photography_chars = chars("photography")

    onMount(() => {
        for(let i = 0; i < $config.author.first_name.length; i++) {
            first_name_chars.push($config.author.first_name[i]);
        }

        for(let i = 0; i < $config.author.last_name.length; i++) {
            last_name_chars.push($config.author.last_name[i]);
        }

    
        first_name_chars = first_name_chars
        last_name_chars = last_name_chars
    })  

</script>

<div class="h-16 sm:h-24 w-auto">
    {@html $seo.logoSvg}
</div>

<!--
<h1 class="font-header capitalize font-[500] {scroll_up && page_offset > 10 ? "text-xl !leading-7" : "!leading-6 md:!leading-7 text-xl"} w-fit title text-primary h-fit">
    <span class="flex flex-row justify-between">
        {#each first_name_chars as char}
            <span class="mr-1">{char}</span>
        {/each}
    </span>
    <span class="flex flex-row justify-between">
        {#each last_name_chars as char}
            <span class="mr-1">{char}</span>
        {/each}
    </span>
    <span class="flex flex-row justify-between transform -translate-x-[0.15rem] text-black">
        {#each photography_chars as char}
            <span class="text-xs mx-[0.25rem]">{char}</span>
        {/each}
    </span>
</h1>
-->
