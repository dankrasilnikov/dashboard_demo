<script>
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import ArrowDown from "@/assets/icons/arrowred.svg";
    import ArrowUp from "@/assets/icons/arrowgreen.svg";

    export let title;
    export let iconSrc;
    export let bgClass;
    export let value;
    export let percent;

    let isGrowing = percent >= 0;
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
            <div class="flex justify-center flex-row text-center items-center gap-1 font-semibold text-lg">
                <img src={isGrowing ? ArrowUp : ArrowDown} alt="arrow"/><span class:text-red-500={!isGrowing} class:text-green-500={isGrowing}>{percent.replace('-', '')}%</span>
            </div>
        </div>
    </div>
</WidgetWrapper>
