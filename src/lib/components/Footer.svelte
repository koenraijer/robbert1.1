<script>
    import Socials from "./Socials.svelte";
</script>
<footer class="mx-auto mb-2 sm:mb-4 mt-8 flex flex-col flex-nowrap justify-between w-full text-xs">
    <div class="w-full flex flex-row row-wrap justify-between text-slate-500">
        <span class="text-slate-500">© Robbert Lalisang {new Date().getFullYear()}. All rights reserved.</span>
        <Socials/>
        <a href="https://studio.koenraijer.io/" rel="noopener noreferrer" class="text-slate-500"><span class="text-xs">de</span> Studio <span class="text-xs">van</span> <b>Koen</b>.</a>
    </div>
</footer>