<script>
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";

    let events = [
        {
            date: "23",
            month: "SEP",
            title: "Jetpack Comedy",
            time: "12:30PM PST",
            attendees: [
                { src: "https://via.placeholder.com/32", alt: "User 1" },
                { src: "https://via.placeholder.com/32", alt: "User 2" },
                { src: "https://via.placeholder.com/32", alt: "User 3" },
                { src: "https://via.placeholder.com/32", alt: "User 4" },
                { src: "https://via.placeholder.com/32", alt: "User 5" },
            ],
            ticketsSold: 875,
            ticketsTotal: 1023,
            inCart: 2,
            revenue: 1482,
            progressColor: "bg-green-500",
        },
        {
            date: "23",
            month: "SEP",
            title: "Adrenaline",
            time: "12:30PM PST",
            attendees: [
                { src: "https://via.placeholder.com/32", alt: "User 1" },
                { src: "https://via.placeholder.com/32", alt: "User 2" },
                { src: "https://via.placeholder.com/32", alt: "User 3" },
                { src: "https://via.placeholder.com/32", alt: "User 4" },
                { src: "https://via.placeholder.com/32", alt: "User 5" },
            ],
            ticketsSold: 240,
            ticketsTotal: 500,
            inCart: 2,
            revenue: 1482,
            progressColor: "bg-orange-500",
        },
        {
            date: "23",
            month: "SEP",
            title: "The Reading Out of Your Notebook",
            time: "12:30PM PST",
            attendees: [
                { src: "https://via.placeholder.com/32", alt: "User 1" },
                { src: "https://via.placeholder.com/32", alt: "User 2" },
                { src: "https://via.placeholder.com/32", alt: "User 3" },
                { src: "https://via.placeholder.com/32", alt: "User 4" },
                { src: "https://via.placeholder.com/32", alt: "User 5" },
            ],
            ticketsSold: 15,
            ticketsTotal: 889,
            inCart: 2,
            revenue: 1482,
            progressColor: "bg-red-500",
        },
        {
            date: "23",
            month: "SEP",
            title: "Mister Vape Face Dies on Stage",
            time: "12:30PM PST",
            attendees: [
                { src: "https://via.placeholder.com/32", alt: "User 1" },
                { src: "https://via.placeholder.com/32", alt: "User 2" },
                { src: "https://via.placeholder.com/32", alt: "User 3" },
                { src: "https://via.placeholder.com/32", alt: "User 4" },
                { src: "https://via.placeholder.com/32", alt: "User 5" },
            ],
            ticketsSold: 875,
            ticketsTotal: 1023,
            inCart: 2,
            revenue: 1482,
            progressColor: "bg-green-500",
        },
        {
            date: "23",
            month: "SEP",
            title: "The Nicole Show",
            time: "12:30PM PST",
            attendees: [
                { src: "https://via.placeholder.com/32", alt: "User 1" },
                { src: "https://via.placeholder.com/32", alt: "User 2" },
                { src: "https://via.placeholder.com/32", alt: "User 3" },
                { src: "https://via.placeholder.com/32", alt: "User 4" },
                { src: "https://via.placeholder.com/32", alt: "User 5" },
            ],
            ticketsSold: 240,
            ticketsTotal: 500,
            inCart: 2,
            revenue: 1482,
            progressColor: "bg-orange-500",
        },
    ];
</script>

<WidgetWrapper>
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Upcoming Events</h2>
        <span class="text-blue-500 text-sm cursor-pointer">Show all</span>
    </div>

    <ul>
        {#each events as event}
            <li class="flex items-center justify-between py-4 border-b last:border-b-0">
                <!-- Date -->
                <div class="flex-shrink-0 text-center w-12">
                    <p class="text-blue-500 font-bold text-lg">{event.date}</p>
                    <p class="text-gray-500 text-sm uppercase">{event.month}</p>
                </div>

                <!-- Event Details -->
                <div class="flex-1 ml-4">
                    <p class="text-sm font-semibold text-gray-800">{event.title}</p>
                    <p class="text-xs text-gray-500">{event.time}</p>
                    <div class="mt-2 flex items-center">
                        <div class="flex -space-x-2">
                            {#each event.attendees.slice(0, 4) as attendee}
                                <img
                                        src={attendee.src}
                                        alt={attendee.alt}
                                        class="w-6 h-6 rounded-full border-2 border-white"
                                />
                            {/each}
                            <div class="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-500 border-2 border-white">
                                +{event.attendees.length - 4}
                            </div>
                        </div>
                        <p class="ml-4 text-xs text-gray-500">{event.ticketsSold}/{event.ticketsTotal}</p>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="w-24 ml-4">
                    <div class="h-2 bg-gray-200 rounded-full">
                        <div
                                class={`h-2 rounded-full ${event.progressColor}`}
                                style="width: {(event.ticketsSold / event.ticketsTotal) * 100}%"
                        ></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{event.inCart} in cart</p>
                </div>

                <!-- Revenue -->
                <div class="flex-shrink-0 text-right">
                    <p class="text-sm font-semibold text-green-500">${event.revenue}</p>
                </div>
            </li>
        {/each}
    </ul>
</WidgetWrapper>
