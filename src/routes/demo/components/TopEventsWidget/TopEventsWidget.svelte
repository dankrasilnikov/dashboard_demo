<script lang="ts">
    import SmallEvent from "@/routes/demo/components/TopEventsWidget/SmallEvent.svelte";
    import SwitchTicketWidgetHeading from "@/routes/demo/components/WidgetHeadings/SwitchTicketWidgetHeading.svelte";

    export let widgetType: 'default' | 'underperforming' = 'default';

    const events = [
        { date: "2025-01-19", name: "The Chronicles from Your Journal", revenue: 86, progress: 100 },
        { date: "2025-01-20", name: "Insights from Your Diary", revenue: 75, progress: 75 },
        { date: "2025-01-24", name: "The Stories in Your Scribbles", revenue: 59, progress: 60},
        { date: "2025-02-01", name: "Whispers from Your Pages", revenue: 40, progress: 40 },
        { date: "2025-01-19", name: "The Secrets in Your Jotter", revenue: 36, progress: 25 },
    ];

    let widgetTitle = widgetType === 'default' ? 'Top Events' : 'Underperforming Events';
</script>

<div class="bg-white rounded-lg shadow p-6">
    <div class="mb-4">
        <SwitchTicketWidgetHeading expandHandler={() => {console.log(`Expand ${widgetTitle}`)}} title={widgetTitle}/>
    </div>
    <ul>
        {#each events as event}
            <SmallEvent event={event} tableType={widgetType} />
        {/each}
    </ul>
</div>
