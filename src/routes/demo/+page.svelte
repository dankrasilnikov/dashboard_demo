<script>
    import SmallTopCard from "./components/SmallTopCard.svelte";
    import MoneyIcon from '@/assets/icons/money.svg';
    import CalendarIcon from '@/assets/icons/calendar.svg';
    import TicketIcon from '@/assets/icons/ticket.svg';
    import EventsList from "@/routes/demo/components/EventsList.svelte";
    import RevenueChart from "@/routes/demo/components/RevenueChart.svelte";
    import NotificationsWidget from "@/routes/demo/components/notifications/NotificationsWidget.svelte";
    import TopEventsWidget from "@/routes/demo/components/eventsTop/TopEventsWidget.svelte";
    import OrdersWidget from "@/routes/demo/components/recentOrders/OrdersWidget.svelte";
    import UpcomingEvents from "@/routes/demo/components/upcomingEvents/UpcomingEventsWidget.svelte";
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] p-4">
    <div class="flex flex-col gap-y-8">
        <div class="flex justify-between flex-row gap-4">
            <SmallTopCard title="Revenue" iconSrc={MoneyIcon} bgClass="bg-accent-success/15" value="$6,397"
                          percent="-3"/>
            <SmallTopCard title="Ticket Sales" iconSrc={CalendarIcon} bgClass="bg-Hue-Violet/15" value="843"
                          percent="13"/>
            <SmallTopCard title="Total Events" iconSrc={TicketIcon} bgClass="bg-accent-Warning/15" value="36"
                          percent="3"/>
        </div>
        <UpcomingEvents/>
        <RevenueChart/>
        <OrdersWidget/>
    </div>

    <div class="sidebar gap-4 flex flex-col">
        <NotificationsWidget/>
        <TopEventsWidget/>
        <TopEventsWidget widgetType="underperforming"/>
    </div>
</div>

