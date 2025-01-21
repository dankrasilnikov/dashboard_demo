<script>
    import ExportIcon from '@/assets/icons/export.svg'
    import Button from "@/components/Button/Button.svelte";
</script>

<header class="px-4 md:py-2 md:px-0 bg-white border-gray-300 border-[1px] py-4 md:hidden">
    <h1 class="text-black text-lg font-medium text-left">Dashboard</h1>
    <p class="text-[#6B7280] text-sm hidden md:block">Last 30 days</p>
    <div class="flex w-full flex-row justify-end align-center gap-2">
        <div class="px-4 py-2 border-[1px] border-gray-300 rounded-lg">This month</div>
        <Button><img src={ExportIcon} alt="export" class="w-5 h-5 inline-block"/> Export </Button>
    </div>
</header>
