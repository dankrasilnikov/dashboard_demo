<script lang="ts">
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import NotificationGroup from "@/components/Notification/NotificationGroup.svelte";
    import {mockNotifications} from "@/routes/demo/components/NotificationsWidget/mock";
    import WidgetHeading from "@/routes/demo/components/WidgetHeadings/SimpleWidgetHeading.svelte";

    const handleShowAllNotifications = () => {
        //state change here
    }
</script>

<WidgetWrapper>
    <div class="mb-9">
        <WidgetHeading title="Notifications" expandHandler={handleShowAllNotifications}/>
    </div>
    <NotificationGroup notifications={mockNotifications} />
</WidgetWrapper>
