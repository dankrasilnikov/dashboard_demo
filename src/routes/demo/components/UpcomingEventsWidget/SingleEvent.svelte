<script lang="ts">
    import {tweened} from "svelte/motion";
    import {getRandomInt} from "@/utils/utils/getRandom";
    import {cubicOut} from "svelte/easing";

    export let event;

    const progressStore = tweened(0, {
        duration: getRandomInt(600, 850),
        easing: cubicOut,
    });

    $progressStore = (event.ticketsSold / event.ticketsTotal) * 100;

</script>

<li class="flex items-center justify-between pr-4 border-b last:border-b-0 gap-9 p-3">
    <!-- Date -->
    <div class="flex-shrink-0 text-center w-12">
        <p class="text-Text-Tartiary text-[0.5rem] uppercase">{'FRI'.toUpperCase()}</p>
        <p class="text-brand-Primary text-xl/[20px]">{event.date.toUpperCase()}</p>
        <p class="text-Text-Tartiary text-[0.5rem] uppercase">{event.month.toUpperCase()}</p>
    </div>

    <div class="flex gap-1 flex-col w-[45%]">
        <p class="text-sm text-Text-Primary">{event.title}</p>
        <p class="text-xs text-Text-Tartiary">{event.time}</p>
    </div>

    <div class="flex flex-row">
        <div class="mt-2 flex items-center w-[100%]">
            <div class="flex -space-x-2">
                {#each event.attendees.slice(0, 3) as attendee}
                    <img
                            src={attendee.src}
                            alt={attendee.alt}
                            class="w-6 h-6 rounded-full border-2 border-white bg-Hue-Violet"
                    />
                {/each}
                <div class="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-500 border-2 border-white">
                    +{event.attendees.length - 3}
                </div>
            </div>
        </div>
    </div>

    <!-- Progress Bar -->
    <div class="w-24 flex flex-col justify-end text-right">
        <p class="text-xs text-gray-500 mb-1.5">{event.ticketsSold}/{event.ticketsTotal}</p>
        <div class="h-2 bg-gray-200 rounded-full">
            <div
                    class={`h-2 rounded-full ${event.progressColor}`}
                    style="width: {$progressStore}%"
            ></div>
        </div>
        <p class="text-xs text-gray-500 mt-1">{event.inCart} in cart</p>
    </div>

    <!-- Revenue -->
    <div class="flex-shrink-0 text-right w-16">
        <p class="text-sm font-semibold text-green-500">${event.revenue}</p>
    </div>
</li>
