<script lang="ts">
    export let columns: string[];
</script>

<thead class="bg-gray-50 border-b-[1px] border-gray-200">
<tr>
    {#each columns as column}
        <th class="text-left px-4 py-4 text-xs text-gray-500 font-semibold">{column}</th>
    {/each}
</tr>
</thead>
