<script>
    import {scaleTime} from 'd3-scale';
    import {timeParse} from 'd3-time-format';
    import {format} from 'date-fns';

    import {Axis, Chart, Highlight, Spline, Svg, Tooltip} from 'layerchart';
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";

    const parseDate = timeParse("%Y-%m-%d");

    const mockData = Array.from({length: 31}).map((_, i) => {
        const day = String(i + 1).padStart(2, "0"); // "01", "02", ...
        return {
            date: parseDate(`2025-01-${day}`),
            revenue: Math.floor(Math.random() * 10000),
            previousRevenue: Math.floor(Math.random() * 10000),
        };
    });

    const mockCharts = {
        total: '#3F83F8',
        previous: '#3F83F8',
    };

    const xTickDates = [
        parseDate("2025-01-01"),
        parseDate("2025-01-05"),
        parseDate("2025-01-10"),
        parseDate("2025-01-15"),
        parseDate("2025-01-20"),
        parseDate("2025-01-25"),
        parseDate("2025-01-31"),
    ];
</script>

<WidgetWrapper>
    <div class="p-2">
        <div class="flex flex-row justify-between mb-8">
            <div>
                <p class="text-gray-900 text-xl">Revenue</p>
                <p class="text-xs text-gray-500 font-medium">Last 30 days</p>
            </div>
            <div class="flex flex-row items-center justify-center">
                <button class="bg-white border-[1px] border-gray-300">Ticket Sales</button>
                <button class="bg-primary-600 border-[1px] border-gray-300">Revenue</button>
            </div>
        </div>

        <div class="h-[300px]">
            <Chart
                    data={mockData.map((item) => ({
                        x: item.date,
                        y: item.revenue,
                        y1: item.previousRevenue,
                      }))}
                    x="x"
                    xScale={scaleTime()}
                    y="y"
                    yDomain={[0, null]}
                    yNice
                    padding={{ left: 40, bottom: 24, right: 24 }}
                    tooltip={{ mode: "bisect-x" }}
            >
                <Svg>
                    <!-- Left axis -->
                    <Axis placement="left"
                          grid
                          rule
                          format={(value) => `$${value.toLocaleString()}`}
                    />

                    <!-- Bottom axis with custom tick values -->
                    <Axis
                            placement="bottom"
                            rule
                            tickValues={xTickDates}
                            format={(d) => format(d, "dd MMM")}
                    />

                    <!-- Lines -->
                    <Spline y={(d) => d.y} class="stroke-2" stroke={mockCharts.total}/>
                    <Spline y={(d) => d.y1} class="stroke-2 dotted-line" stroke={mockCharts.previous}/>

                    <!-- Point highlights -->
                    <Highlight y={(d) => d.y} points={{ fill: mockCharts.total }}/>
                    <Highlight y={(d) => d.y1} points={{ fill: mockCharts.previous }}/>
                    <Highlight lines/>
                </Svg>

                <!-- Tooltip -->
                <Tooltip.Root let:data>
                    <Tooltip.List>
                        <Tooltip.Item label="Total Revenue" value={data.y}/>
                        <Tooltip.Item label="Previous Period" value={data.y1}/>
                    </Tooltip.List>
                </Tooltip.Root>
            </Chart>
        </div>

        <div class="flex flex-row justify-start gap-4 mt-8">
            <span class="flex items-center flex-row justify-center gap-1 text-xs text-gray-500">
                <span class="inline-block w-6 border-primary-500 border-t-[2px]"/> Total Revenue
            </span>
            <span class="flex items-center flex-row justify-center gap-1 text-xs text-gray-500">
                <span class="inline-block w-6 border-primary-500 border-t-[2px] border-dashed"/> Previous Period
            </span>
        </div>
    </div>
</WidgetWrapper>
