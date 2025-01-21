<script lang="ts">
    import {tweened} from 'svelte/motion';
    import {cubicOut} from "svelte/easing";
    import {getRandomInt} from "@/utils/utils/getRandom";

    export let event;
    export let tableType: 'default' | 'underperforming' = 'default';

    let {date, name, revenue, progress} = event;

    const progressStore = tweened(0, {
        duration: getRandomInt(600, 750),
        easing: cubicOut,
    });

    $progressStore = progress;
</script>

<li class="flex justify-between items-center mb-2 relative">
    <span style={`right: ${100 - $progressStore}%;`} class={`absolute left-0 top-0 bottom-0 z-0 rounded`}
          class:bg-primary-50={tableType === 'default'}
          class:bg-red-50={tableType === 'underperforming'}></span>
    <div class="flex space-x-4 items-center z-10 p-2 w-full justify-between">
        <span class="text-xs w-20 whitespace-nowrap"
              class:text-primary-400={tableType === 'default'}
              class:text-red-400={tableType === 'underperforming'}>{new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })}</span>
        <span class="text-gray-700 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full text-left">{name}</span>
        <span class="text-xs z-10"
              class:text-primary-800={tableType === 'default'}
              class:text-red-700={tableType === 'underperforming'}>{revenue}</span>
    </div>

</li>
