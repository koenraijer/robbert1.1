<script>
    export let clients;
    import {fly} from 'svelte/transition'

    const nums_per_group = Math.ceil(clients.length / 3);
    const clients_grouped = new Array(3).fill('').map((_, i) => clients.slice(i * nums_per_group, (i + 1) * nums_per_group));

    let j = 0;
    let k = 0;
    let l = 0;

    setInterval(() => {
        if(j >= 2) {
            j = 0
        } else {
            j += 1
        }
    }, 12000);

    setTimeout(() => {
        setInterval(() => {
            if(k >= 2) {
                k = 0
            } else {
                k += 1
            }
        }, 12000);
    }, 4000)

    setTimeout(() => {
        setInterval(() => {
            if(l >= 2) {
                l = 0
            } else {
                l += 1
            }
        }, 12000);
    }, 8000)
</script>

{#if clients.length >= 1}
    <div class="flex flex-col w-full border-opacity-50 py-8 my-8">
        <h2 class="divider font-header uppercase text-base">Partnered with</h2>
        <div class="flex flex-row flex-nowrap justify-between max-w-screen">
            {#each clients_grouped as clients_group, i}
                <div class="grid fill-gray-500">
                    {#if i === 0}
                        {#key j}
                            <img in:fly="{{ y: -50, duration: 300, delay: 1250 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 col-start-1 row-start-1 col-span-1 row-span-1" src={clients_group[j].logo.url} alt={clients_group[j].name}>
                        {/key}
                    {:else if i === 1}
                        {#key k}
                            <img in:fly="{{ y: -50, duration: 300, delay: 1250 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 col-start-1 row-start-1 col-span-1 row-span-1" src={clients_group[k].logo.url} alt={clients_group[k].name}>
                        {/key}
                    {:else if i === 2}
                        {#key l}
                            <img in:fly="{{ y: -50, duration: 300, delay: 1250 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 col-start-1 row-start-1 col-span-1 row-span-1" src={clients_group[l].logo.url} alt={clients_group[l].name}>
                        {/key}
                    {/if}
                </div>
            {/each}
        </div>
        <div class="divider"></div>
    </div>
{/if}