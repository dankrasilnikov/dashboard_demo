<script>
    import { ResponsiveLine } from '@nivo/line';

    // Data for the chart
    const data = [
        {
            id: "Total Revenue",
            color: "hsl(220, 90%, 50%)", // Blue
            data: [
                { x: "01 Jan", y: 0 },
                { x: "05 Jan", y: 5000 },
                { x: "10 Jan", y: 10000 },
                { x: "15 Jan", y: 25000 },
                { x: "20 Jan", y: 20000 },
                { x: "25 Jan", y: 30000 },
                { x: "31 Jan", y: 40000 },
            ],
        },
        {
            id: "Previous Period",
            color: "hsl(220, 50%, 70%)", // Lighter Blue
            data: [
                { x: "01 Jan", y: 0 },
                { x: "05 Jan", y: 3000 },
                { x: "10 Jan", y: 7000 },
                { x: "15 Jan", y: 20000 },
                { x: "20 Jan", y: 15000 },
                { x: "25 Jan", y: 25000 },
                { x: "31 Jan", y: 35000 },
            ],
        },
    ];

    const theme = {
        axis: {
            ticks: {
                text: {
                    fill: "#4B5563", // Tailwind's gray-600
                },
            },
            legend: {
                text: {
                    fill: "#4B5563", // Tailwind's gray-600
                },
            },
        },
        grid: {
            line: {
                stroke: "#E5E7EB", // Tailwind's gray-200
                strokeWidth: 1,
            },
        },
    };
</script>

<div class="bg-white p-4 rounded-lg shadow border">
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Revenue</h2>
        <p class="text-sm text-gray-500">Last 30 days</p>
    </div>

    <div class="flex justify-end gap-2 mb-4">
        <button
                class="px-4 py-1 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
            Ticket Sales
        </button>
        <button
                class="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
            Revenue
        </button>
    </div>

    <div class="h-72">
        <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 40, bottom: 50, left: 50 }}
                xScale={{ type: "point" }}
                yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        legendPosition: "middle",
      }}
                axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
      }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                useMesh={true}
                theme={theme}
                enableGridX={false}
        />
    </div>
</div>
