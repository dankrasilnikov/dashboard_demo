<script>
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";

    export let title;
    export let iconSrc;
    export let bgClass;
    export let value;
    export let percent;
</script>

<WidgetWrapper>
    <div class='flex flex-row content-center align-center items-center'>
        <div class={`${bgClass} p-4 rounded-xl`}>
            <img class="w-6 h-6" src={iconSrc} alt="icon"/>
        </div>
        <div class="flex flex-row justify-between items-center w-full">
            <div class="pl-4">
                <p class="text-Text-Tartiary text-base">{title}</p>
                <p class="text-Text-Secondary text-2xl">{value}</p>
            </div>
            <div class="flex content-center text-center items-center">
                <span class:text-red-500={true} class:text-green-500={false}>{percent}%</span>
            </div>
        </div>
    </div>
</WidgetWrapper>
