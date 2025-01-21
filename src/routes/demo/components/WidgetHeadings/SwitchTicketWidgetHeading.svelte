<script lang="ts">
    import Button from "@/components/Button/Button.svelte";

    export let expandHandler;
    export let title: string;
    export let description: string = '';
    export let mobileWrap = false;
</script>

<div class="flex flex-row justify-between items-center">
    <div>
        <h2 class="text-Text-Primary text-xl">{title}</h2>

        {#if description}
            <p class="text-gray-500 font-medium tex-xs">{description}</p>
        {/if}
    </div>

    <div class="flex flex-row justify-center items-center">
        <Button className="!rounded-r-none !rounded-l !text-xs !py-1 !px-3 !text-[#6B7280]" strokebtn={true}>Ticket Sales</Button>
        <Button className="!rounded-l-none !rounded-r !text-xs !py-1 !px-3 !bg-primary-500 border-primary-500 border-[1px]">Revenue</Button>
    </div>
</div>
