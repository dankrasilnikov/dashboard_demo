<script lang="ts">

    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";

    import WidgetHeading from "@/routes/demo/components/widgetHeadings/SimpleWidgetHeading.svelte";
    import SingleOrder from "@/routes/demo/components/recentOrders/SingleOrder.svelte";
    import {mockOrders} from "@/routes/demo/components/recentOrders/mockOrders";
    import TableHead from "@/components/Table/TableHead.svelte";

    const expandHandler = () => {

    }
</script>

<WidgetWrapper>
    <div class="mb-8">
        <WidgetHeading title="Recent Orders" {expandHandler}/>
    </div>

    <TableHead collapsed={['ORDER ID', 'DATE OF PURCHASE', 'EVENT', 'CUSTOMER', 'NO. OF TICKETS', 'SALES CHANNEL', 'ORDER_DATA']}/>
    {#each mockOrders as order}
        <SingleOrder/>
    {/each}
</WidgetWrapper>
