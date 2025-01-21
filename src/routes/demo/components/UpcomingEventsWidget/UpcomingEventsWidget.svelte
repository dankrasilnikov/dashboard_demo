<script lang="ts">
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import {mockEvents} from "@/routes/demo/components/UpcomingEventsWidget/mock.js";
    import SimpleWidgetHeading from "@/routes/demo/components/WidgetHeadings/SimpleWidgetHeading.svelte";
    import SingleEvent from "@/routes/demo/components/UpcomingEventsWidget/SingleEvent.svelte";

    export let expandHandler;
</script>

<WidgetWrapper>
    <div class="mb-4">
        <SimpleWidgetHeading title="Upcoming Events" {expandHandler}/>
    </div>

    <ul>
        {#each mockEvents as event}
           <SingleEvent event={event} />
        {/each}
    </ul>
</WidgetWrapper>
