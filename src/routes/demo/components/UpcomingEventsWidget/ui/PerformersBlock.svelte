<script>
    export let attendees;
</script>

<div class="flex flex-row">
    <div class="mt-2 flex items-center w-[100%]">
        <div class="flex -space-x-2">
            {#each attendees.slice(0, 3) as attendee}
                <img
                        src={attendee.src}
                        alt={attendee.alt}
                        class="w-6 h-6 rounded-full border-2 border-white bg-Hue-Violet"
                />
            {/each}
            <div class="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-500 border-2 border-white">
                +{attendees.length - 3}
            </div>
        </div>
    </div>
</div>
