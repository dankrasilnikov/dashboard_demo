<script lang="ts">
    export let expandHandler;
    export let title: string;
</script>

<div class="flex flex-row justify-between items-center">
    <h2 class="text-Text-Primary text-xl">{title}</h2>
    <span class="text-brand-Primary text-sm font-medium cursor-pointer" on:click={expandHandler}>
            Show all
        </span>
</div>
