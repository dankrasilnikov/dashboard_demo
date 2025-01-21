<!-- src/routes/demo/components/RecentOrders/OrdersWidgetV1.svelte -->
<script lang="ts">
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import Table from "./Table/Table.svelte";
    import {mockOrders} from "@/routes/demo/components/RecentOrders/mockOrders";
    import SimpleWidgetHeading from "../WidgetHeadings/SimpleWidgetHeading.svelte";

    const columns = [
        "ORDER ID",
        "DATE OF PURCHASE",
        "EVENT",
        "CUSTOMER",
        "NO. OF TICKETS",
        "SALES CHANNEL",
        "ORDER TOTAL",
    ];

    const expandHandler = () => {

    }
</script>

<WidgetWrapper>
    <div class="mb-8">
        <SimpleWidgetHeading title="Recent Orders" {expandHandler} />
    </div>

    <Table {columns} data={mockOrders}/>
</WidgetWrapper>
