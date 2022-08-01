<script>
    export let clients;
    import {fly} from 'svelte/transition'

    const nums_per_group = Math.round(clients.length / 3);
    const clients_grouped = new Array(3).fill('').map((_, i) => clients.slice(i * nums_per_group, (i + 1) * nums_per_group));

    let j = 0;
    let k = 0;
    let l = 0;

    (async function() {
        await new Promise(r => setTimeout(r, 3000));
        if(j >= 2) {
            j = 0
        } else {
            j += 1
        }
    })(); 

    (async function() {
        await new Promise(r => setTimeout(r, 5000));
        if(k >= 2) {
            k = 0
        } else {
            k += 1
        }
    })(); 

    (async function() {
        await new Promise(r => setTimeout(r, 7000));
        if(l >= 2) {
            l = 0
        } else {
            l += 1
        }
    })(); 

    setTimeout(() => {
        setInterval(() => {
        if(j >= 2) {
            j = 0
        } else {
            j += 1
        }
    }, 6000);
    }, 3000)


    setTimeout(() => {
        setInterval(() => {
            if(k >= 2) {
                k = 0
            } else {
                k += 1
            }
        }, 6000);
    }, 5000)

    setTimeout(() => {
        setInterval(() => {
            if(l >= 2) {
                l = 0
            } else {
                l += 1
            }
        }, 6000);
    }, 7000)
    
   /* 
   - You need to tell the next item when to start, based on the on:outroend event.
   - To do this, each logo needs a boolean that the previous logo can set to true when it has finished the transition. 
   - 
   */
</script>

<div class="w-full border-opacity-50 py-8 my-8 overflow-hidden">
    <h2 class="divider font-header uppercase text-base text-primary">Partnered with</h2>
    <div class="flex flex-row flex-nowrap justify-between max-w-screen !overflow-hidden">
        {#each clients_grouped as clients_group, i}
            <div class="grid h-24 sm:h-32 fill-gray-500">
                {#if i === 0}
                <div class="!overflow-hidden bg-clip-content">
                    {#key j}
                    <img in:fly="{{ y: -50, duration: 300, delay: 500 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 w-24 sm:h-32 sm:w-32" src={clients_group[j].logo.url} alt={clients_group[j].name}>
                    {/key}
                </div>
                {:else if i === 1}
                    <div class="!overflow-hidden">
                        {#key k}
                        <img in:fly="{{ y: -50, duration: 300, delay: 500 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 w-24 sm:h-32 sm:w-32" src={clients_group[k].logo.url} alt={clients_group[k].name}>
                        {/key}
                    </div>
                {:else if i === 2}
                    <div class="!overflow-hidden">
                        {#key l}
                        <img in:fly="{{ y: -50, duration: 300, delay: 500 }}" out:fly="{{ y: 50, duration: 100 }}" class="p-3 sm:p-6 object-contain aspect-auto h-24 w-24 sm:h-32 sm:w-32" src={clients_group[l].logo.url} alt={clients_group[l].name}>
                        {/key}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div class="divider"></div>
</div>

