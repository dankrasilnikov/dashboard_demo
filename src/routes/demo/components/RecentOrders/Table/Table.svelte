<script lang="ts">
    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";

    export let columns = [];
    export let data = [];
</script>

<table class="table-auto w-full rounded-md">
    <TableHead {columns} />
    <tbody>
    {#each data as order}
        <TableRow {order} />
    {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #e5e7eb;
    }

    th {
        background-color: #f9fafb;
    }
</style>
