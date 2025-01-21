<script>
    import SmallTopCard from "./components/SmallTopCard.svelte";
    import MoneyIcon from '@/assets/icons/money.svg';
    import CalendarIcon from '@/assets/icons/calendar.svg';
    import TicketIcon from '@/assets/icons/ticket.svg';
    import RevenueChart from "@/routes/demo/components/RevenueChart.svelte";
    import NotificationsWidget from "@/routes/demo/components/NotificationsWidget/NotificationsWidget.svelte";
    import TopEventsWidget from "@/routes/demo/components/TopEventsWidget/TopEventsWidget.svelte";
    import RecentOrders from "@/routes/demo/components/RecentOrders";
    import UpcomingEvents from "@/routes/demo/components/UpcomingEventsWidget/UpcomingEventsWidget.svelte";
</script>

<header class="px-4 py-2 bg-white border-gray-300 border-[1px]">
    <h1 class="text-black text-lg text-left">Dashboard</h1>
    <p class="text-[#6B7280] text-sm">Last 30 days</p>
</header>

<div class="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] p-4">
    <div class="flex flex-col gap-y-4 md:gap-y-8">
        <div class="flex justify-between flex-col md:flex-row gap-4">
            <SmallTopCard title="Revenue" iconSrc={MoneyIcon} bgClass="bg-accent-success/15" value="$6,397"
                          percent="-3"/>
            <SmallTopCard title="Ticket Sales" iconSrc={CalendarIcon} bgClass="bg-Hue-Violet/15" value="843"
                          percent="13"/>
            <SmallTopCard title="Total Events" iconSrc={TicketIcon} bgClass="bg-accent-Warning/15" value="36"
                          percent="3"/>
        </div>

        <UpcomingEvents/>
        <RevenueChart/>
        <RecentOrders/>
    </div>

    <div class="sidebar gap-4 flex flex-col-reverse md:flex-col md:block">
        <NotificationsWidget/>
        <TopEventsWidget/>
        <TopEventsWidget widgetType="underperforming"/>
    </div>
</div>

