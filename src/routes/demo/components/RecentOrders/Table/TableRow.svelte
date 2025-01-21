<script lang="ts">
    import ChevronIcon from '@/assets/icons/chevron-down.svg';
    import {slide} from 'svelte/transition';


    export let order;

    let extended = false;

    const toggleExtended = () => {
        extended = !extended;
    };
</script>

<!-- Desktop Main Row -->
<tr class="border-b text-gray-500 hidden md:table-row">
    <td class="px-4 py-6 text-gray-900 font-medium text-sm">{order.orderId}</td>
    <td class="px-4 py-6 text-sm">{order.dateOfPurchase}</td>
    <td class="px-4 py-6 flex items-center gap-2 text-sm">
        <img src={order.event.imageUrl} alt={order.event.name} class="w-8 h-8 rounded"/>
        <span>{order.event.name}</span>
    </td>
    <td class="px-4 py-6 text-sm">{order.customer}</td>
    <td class="px-4 py-6 text-sm">{order.noOfTickets}</td>
    <td class="px-4 py-6 text-sm flex items-center">
        <img src={order.salesChannel.iconUrl} alt={order.salesChannel.name} class="w-5 h-5 inline-block mr-2"/>
        <span>{order.salesChannel.name}</span>
    </td>
    <td class="px-4 py-6 text-green-500 text-sm">{order.orderTotal}</td>
</tr>

<tr
        on:click={toggleExtended}
        class={`transition-all box-border text-gray-500 md:hidden cursor-pointer ${extended ? '!border-b-0 border-l-4 border-blue-500' : 'border-b border-gray-200'}`}
        aria-expanded={extended}
        aria-controls={`order-details-${order.orderId}`}
        tabindex="0"
        on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleExtended();
            e.preventDefault();
        }
    }}
>
    <td class="px-4 py-6 text-gray-900 font-medium">{order.orderId}</td>
    <td class="px-4 py-6">{order.noOfTickets}</td>
    <td class="px-4 py-6 text-green-500 flex justify-between items-center">
        <span>{order.orderTotal}</span>
        <img
                src={ChevronIcon}
                alt="Toggle details"
                class="transition-transform duration-200 w-4 h-4"
                style={`transform: rotate(${extended ? '180deg' : '0deg'});`}
        />
    </td>
</tr>

{#if extended}
    <tr on:click={toggleExtended} transition:slide={{duration: 300, y:20}} id={`order-details-${order.orderId}`}
        class={`md:hidden ${extended ? 'border-l-4 border-l-blue-500 border-b-gray-200 border-b-[1px] transition-all' : ''}`}>
        <td colspan="3" class="px-4 py-4 text-left">
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between text-gray-500">
                    <div class="text-xs text-left w-1/2 gap-1">
                        <p class="font-semibold">Date of Purchase</p>
                        <p class="lowercase">{order.dateOfPurchase}</p>
                    </div>
                    <div class="text-xs text-left w-1/2 gap-1">
                        <p class="font-semibold">Event</p>
                        <p class="lowercase">{order.event.name}</p>
                    </div>
                </div>
                <div class="flex flex-row justify-between text-gray-500">
                    <div class="text-xs text-left w-1/2 gap-1">
                        <p class="font-semibold">Customer</p>
                        <p class="lowercase">{order.customer}</p>
                    </div>
                    <div class="text-xs text-left w-1/2 flex flex-col gap-1">
                        <p class="font-semibold mr-2">Sales Channel</p>
                        <div>
                            <img src={order.salesChannel.iconUrl} alt={order.salesChannel.name}
                                 class="w-5 h-5 inline-block mr-2"/>
                            <span class="lowercase">{order.salesChannel.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
{/if}
