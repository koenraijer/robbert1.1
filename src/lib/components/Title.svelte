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


