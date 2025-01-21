<!-- src/routes/demo/components/RecentOrders/OrdersWidgetV1.svelte -->
<script lang="ts">
    import { mockOrders } from "./mockOrders";
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import SimpleWidgetHeading from "@/routes/demo/components/WidgetHeadings/SimpleWidgetHeading.svelte";
    import Table from "@/components/Table/Table.svelte";

    const columns = [
        { key: "orderId", title: "ORDER ID" },
        { key: "dateOfPurchase", title: "DATE OF PURCHASE" },
        { key: "event", title: "EVENT", slot: true },
        { key: "customer", title: "CUSTOMER" },
        { key: "noOfTickets", title: "NO. OF TICKETS" },
        { key: "salesChannel", title: "SALES CHANNEL", slot: true },
        { key: "orderTotal", title: "ORDER TOTAL" },
    ];

    const paginated = {
        status: false,
        totalPages: 0,
        pageSize: 10,
    };

    const expandHandler = () => {

    };
</script>

<WidgetWrapper>
    <div class="mb-8">
        <SimpleWidgetHeading title="Recent Orders" {expandHandler} />
    </div>

    <!-- Table Component -->
    <Table
            classes="my-custom-table-classes"
            mobileView={[]}
            styles={{}}
            {columns}
            data={mockOrders}
            searchable={false}
            paginated={paginated}
            isRounded={true}
            bordered={false}
            hasActions={false}
            hasCheckBox={false}
            hasRadioButton={false}
            keyField="orderId"
            showTableHead={true}
            actionsContent={null}
            isDraggable={false}
    >
        <svelte:fragment slot="cell-event" let:row>
            <div class="flex items-center">
                <img src="{row.event.imageUrl}" alt="{row.event.name}" class="w-8 h-8 mr-2" />
                <span>{row.event.name}</span>
            </div>
        </svelte:fragment>


        <svelte:fragment slot="cell-salesChannel" let:row>
            <div class="flex items-center">
                <img src="{row.salesChannel.iconUrl}" alt="{row.salesChannel.name}" class="w-6 h-6 mr-2" />
                <span>{row.salesChannel.name}</span>
            </div>
        </svelte:fragment>
    </Table>
</WidgetWrapper>
