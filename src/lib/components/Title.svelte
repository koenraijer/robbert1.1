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

<!--
<svg class="h-20 sm:h-28 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1085.59 563.14"><defs><style>.cls-1{font-size:250px;}.cls-1,.cls-4{fill:#00401f;}.cls-1,.cls-6{font-family:UnicaOne-Regular, Unica One;}.cls-2{letter-spacing:0.05em;}.cls-3{letter-spacing:0em;}.cls-5{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:12px;}.cls-6{font-size:63px;fill:#2d2d2d;letter-spacing:0.81em;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><text class="cls-1" transform="translate(362.11 206.25) scale(0.78 1)"><tspan class="cls-2">ROBBER</tspan><tspan x="802.5" y="0">T</tspan><tspan class="cls-3" x="0" y="211">LALISAN</tspan><tspan x="775" y="211">G</tspan></text><path class="cls-4" d="M69.67,213.83l56.68.16Q161,214,161,174V104q0-19-8.95-29.5T126.35,64l-56.68.2H6V34H128.4q30.35,0,46.09,18.5T190.24,104v70q0,51-34.22,65l47.83,120H173.91L128.4,244H69.67V213.83"/><path class="cls-5" d="M69.67,213.83l56.68.16Q161,214,161,174V104q0-19-8.95-29.5T126.35,64l-56.68.2H6V34H128.4q30.35,0,46.09,18.5T190.24,104v70q0,51-34.22,65l47.83,120H173.91L128.4,244H69.67V213.83"/><path class="cls-4" d="M6,425.32v-325H33.23v295H104.4v30Z"/><path class="cls-5" d="M6,425.32v-325H33.23v295H104.4v30Z"/><path class="cls-4" d="M335.92,425.32v-77H308.69v47h-46v30Z"/><path class="cls-5" d="M335.92,425.32v-77H308.69v47h-46v30Z"/><path class="cls-4" d="M335.92,35v77H308.69V65h-46V35Z"/><path class="cls-5" d="M335.92,35v77H308.69V65h-46V35Z"/><text class="cls-6" transform="translate(379.12 498.44) scale(0.79 1)">PHOTOGRAPHY</text></g></g></svg>
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1081.78 516.2"><defs><style>.cls-1{font-size:250px;}.cls-1,.cls-5{fill:#00401f;}.cls-1,.cls-8{font-family:UnicaOne-Regular, Unica One;}.cls-2{letter-spacing:0.05em;}.cls-3{letter-spacing:0.06em;}.cls-4{letter-spacing:0.01em;}.cls-6,.cls-7{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-6{stroke-width:9px;}.cls-7{stroke-width:10px;}.cls-8{font-size:63px;fill:#2d2d2d;letter-spacing:0.8em;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><text class="cls-1" transform="translate(360.61 206.25) scale(0.78 1)"><tspan class="cls-2">Robb</tspan><tspan class="cls-3" x="553.25" y="0">e</tspan><tspan class="cls-2" x="693.25" y="0">r</tspan><tspan x="806.25" y="0">t</tspan><tspan class="cls-4" x="0" y="211">Lalisan</tspan><tspan x="775" y="211">g</tspan></text><path class="cls-5" d="M68.17,213.83l56.68.16q34.62,0,34.62-40V104q0-19-8.95-29.5T124.85,64l-56.68.2H4.5V34H126.9q30.35,0,46.09,18.5T188.74,104v70q0,51-34.22,65l47.83,120H172.41L126.9,244H68.17V213.83"/><path class="cls-6" d="M68.17,213.83l56.68.16q34.62,0,34.62-40V104q0-19-8.95-29.5T124.85,64l-56.68.2H4.5V34H126.9q30.35,0,46.09,18.5T188.74,104v70q0,51-34.22,65l47.83,120H172.41L126.9,244H68.17V213.83"/><path class="cls-5" d="M4.5,425.32v-325H31.73v295H102.9v30Z"/><path class="cls-6" d="M4.5,425.32v-325H31.73v295H102.9v30Z"/><path class="cls-5" d="M334.42,425.32v-77H307.19v47h-46v30Z"/><path class="cls-7" d="M334.42,425.32v-77H307.19v47h-46v30Z"/><path class="cls-5" d="M334.42,35v77H307.19V65h-46V35Z"/><path class="cls-7" d="M334.42,35v77H307.19V65h-46V35Z"/><text class="cls-8" transform="translate(376.96 499.5) scale(0.79 1)">PHOTOGRAPHY</text></g></g></svg>
-->
<svg class="h-16 sm:h-28 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1083.78 516.45"><defs><style>.cls-1{font-size:250px;}.cls-1,.cls-5{fill:#00401f;}.cls-1,.cls-7{font-family:UnicaOne-Regular, Unica One;}.cls-2{letter-spacing:0.05em;}.cls-3{letter-spacing:0.06em;}.cls-4{letter-spacing:0.01em;}.cls-6{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:13px;}.cls-7{font-size:63px;fill:#2d2d2d;letter-spacing:0.8em;}</style></defs><g id="Laag_2" data-name="Laag 2"><g id="Laag_1-2" data-name="Laag 1"><text class="cls-1" transform="translate(362.61 206.25) scale(0.78 1)"><tspan class="cls-2">Robb</tspan><tspan class="cls-3" x="553.25" y="0">e</tspan><tspan class="cls-2" x="693.25" y="0">r</tspan><tspan x="806.25" y="0">t</tspan><tspan class="cls-4" x="0" y="213">Lalisan</tspan><tspan x="775" y="213">g</tspan></text><path class="cls-5" d="M70.17,214.08l56.68.16q34.62,0,34.62-40v-70q0-19-8.95-29.5t-25.67-10.5l-56.68.21H6.5V34.24H128.9q30.35,0,46.09,18.5t15.75,51.5v70q0,51-34.22,65l47.83,120H174.41l-45.51-115H70.17V214.08"/><path class="cls-6" d="M70.17,214.08l56.68.16q34.62,0,34.62-40v-70q0-19-8.95-29.5t-25.67-10.5l-56.68.21H6.5V34.24H128.9q30.35,0,46.09,18.5t15.75,51.5v70q0,51-34.22,65l47.83,120H174.41l-45.51-115H70.17V214.08"/><path class="cls-5" d="M6.5,425.57v-325H33.73v295H104.9v30Z"/><path class="cls-6" d="M6.5,425.57v-325H33.73v295H104.9v30Z"/><path class="cls-5" d="M336.42,425.57v-77H309.19v47h-46v30Z"/><path class="cls-6" d="M336.42,425.57v-77H309.19v47h-46v30Z"/><path class="cls-5" d="M336.42,35.24v77H309.19v-47h-46v-30Z"/><path class="cls-6" d="M336.42,35.24v77H309.19v-47h-46v-30Z"/><text class="cls-7" transform="translate(378.96 499.75) scale(0.79 1)">PHOTOGRAPHY</text></g></g></svg>




