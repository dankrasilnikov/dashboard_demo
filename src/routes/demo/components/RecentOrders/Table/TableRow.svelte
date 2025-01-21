<script lang="ts">
    export let order;
</script>

<tr class="border-b text-[#6B7280]">
    <!-- Order ID -->
    <td class="px-4 py-6 text-gray-900 font-medium text-sm">{order.orderId}</td>

    <!-- Date of Purchase -->
    <td class="px-4 py-6 text-sm">{order.dateOfPurchase}</td>

    <!-- Event -->
    <td class="px-4 py-6 flex items-center gap-2 text-sm">
        <img src={order.event.imageUrl} alt={order.event.name} class="w-8 h-8 rounded" />
        <span>{order.event.name}</span>
    </td>

    <!-- Customer -->
    <td class="px-4 py-6 text-sm">{order.customer}</td>

    <!-- No. of Tickets -->
    <td class="px-4 py-6 text-sm">{order.noOfTickets}</td>

    <!-- Sales Channel -->
    <td class="px-4 py-6 text-sm">
        <img src={order.salesChannel.iconUrl} alt={order.salesChannel.name} class="w-5 h-5 inline-block mr-2" />
        <span>{order.salesChannel.name}</span>
    </td>

    <!-- Order Total -->
    <td class="px-4 py-6 text-green-500 text-sm">{order.orderTotal}</td>
</tr>
