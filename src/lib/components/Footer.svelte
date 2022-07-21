<script>
    import Socials from "./Socials.svelte";
</script>
<footer class="mx-auto mb-2 sm:mb-4 sm:mt-16 mt-8 flex flex-col flex-nowrap justify-between w-full text-[0.60rem] sm:text-xs text-slate-500">
    <div class="divider w-full mb-8">
        <Socials/>
    </div>
    <div class="flex flex-wrap justify-between">
        <span class="w-fit flex-shrink-0">© Robbert Lalisang {new Date().getFullYear()}. All rights reserved.</span>
        <a href="https://studio.koenraijer.io/" rel="noopener noreferrer" class="text-slate-500"><span class="text-[0.50rem] sm:text-[0.60rem]">de</span> Studio <span class="text-[0.50rem] sm:text-[0.60rem]">van</span> <b>Koen</b>.</a>
    </div>
</footer>