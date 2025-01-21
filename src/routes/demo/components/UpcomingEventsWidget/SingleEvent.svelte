<script lang="ts">
    import {tweened} from "svelte/motion";
    import {getRandomInt} from "@/utils/utils/getRandom";
    import {cubicOut} from "svelte/easing";
    import PerformersBlock from "@/routes/demo/components/UpcomingEventsWidget/ui/PerformersBlock.svelte";

    export let event;

    const progressStore = tweened(0, {
        duration: getRandomInt(600, 850),
        easing: cubicOut,
    });

    let progressFormula = (event.ticketsSold / event.ticketsTotal) * 100;

    $: progressStore.set(progressFormula);
    $: progressColor = progressFormula < 10
        ? 'bg-red-500'
        : progressFormula < 70
            ? 'bg-orange-500'
            : 'bg-green-500';
</script>

<li class="flex flex-col md:flex-row justify-between items-center px-4 py-6 md:p-6 border-b last:border-b-0 gap-6 md:gap-0">

    <!--MOBILE-->

    <div class="w-full md:hidden">
        <h2 class="text-gray-900 text-sm px-4">{event.title}</h2>

        <div class="flex flex-row justify-between px-4 text-gray-500 mt-4 gap-2">
            <div class="text-xs text-left w-24 flex flex-col justify-between">
                <p class="font-semibold">Date</p>
                <p class="lowercase">{`${event.month} ${event.date}`}</p>
            </div>
            <div class="text-xs text-left w-24 flex flex-col justify-between">
                <p class="font-semibold">Time</p>
                <p class="uppercase">{event.time}</p>
            </div>
            <div class="text-xs text-left w-16 flex flex-col justify-between">
                <p class="font-semibold">Revenue</p>
                <p class="lowercase text-green-500">{event.revenue}</p>
            </div>
        </div>

        <div class="flex flex-row justify-between px-4 text-gray-500 mt-4 gap-2">
            <div class="text-xs text-left w-24 flex flex-col justify-between">
                <p class="font-semibold">Performers</p>
                <PerformersBlock attendees={event.attendees}/>
            </div>

            <div class="text-xs text-left w-24 flex flex-col justify-between">
                <p class="font-semibold">Tickets</p>
                <p class="mb-1.5">{event.ticketsSold}/{event.ticketsTotal}</p>
                <div class="h-2 bg-gray-200 rounded-full">
                    <div
                            class={`h-2 rounded-full ${progressColor}`}
                            style="width: {$progressStore}%"
                    ></div>
                </div>
            </div>

            <div class="text-xs text-left w-16 flex flex-col justify-between">
                <p class="font-semibold">In Cart</p>
                <p>{event.inCart}</p>
            </div>
        </div>
    </div>

    <!--DESKTOP-->

    <div class="hidden md:flex w-full items-center flex-col md:flex-row justify-between">
        <div class="flex-shrink-0 text-center w-12">
            <p class="text-Text-Tartiary text-[0.5rem] uppercase hidden md:block">{'FRI'}</p>
            <p class="text-brand-Primary text-xl/[20px] hidden md:block">{event.date}</p>
            <p class="text-Text-Tartiary text-[0.5rem] uppercase hidden md:block">{event.month}</p>
        </div>

        <div class="flex gap-1 flex-col max-w-[45%] w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
            <p class="text-sm text-Text-Primary">{event.title}</p>
            <p class="text-xs text-Text-Tartiary">{event.time}</p>
        </div>

        <PerformersBlock attendees={event.attendees}/>

        <div class="w-24 flex flex-col justify-end text-right">
            <p class="text-xs text-gray-500 mb-1.5">{event.ticketsSold}/{event.ticketsTotal}</p>
            <div class="h-2 bg-gray-200 rounded-full">
                <div
                        class={`h-2 rounded-full ${progressColor}`}
                        style="width: {$progressStore}%"
                ></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">{event.inCart} in cart</p>
        </div>

        <div class="flex-shrink-0 text-right w-16">
            <p class="text-sm font-semibold text-green-500">${event.revenue}</p>
        </div>
    </div>
</li>
