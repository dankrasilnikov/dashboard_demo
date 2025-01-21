<script lang="ts">
    import {scaleTime} from 'd3-scale';
    import {timeParse} from 'd3-time-format';
    import {format} from 'date-fns';

    import {Axis, Chart, Highlight, Spline, Svg, Tooltip} from 'layerchart';
    import WidgetWrapper from "@/routes/demo/components/WidgetWrapper.svelte";
    import SwitchTicketWidgetHeading from "@/routes/demo/components/WidgetHeadings/SwitchTicketWidgetHeading.svelte";

    const parseDate = timeParse("%Y-%m-%d");

    const mockData = Array.from({length: 31}).map((_, i) => {
        const day = String(i + 1).padStart(2, "0");
        return {
            date: parseDate(`2025-01-${day}`),
            revenue: Math.floor(Math.random() * 30000),
            previousRevenue: Math.floor(Math.random() * 30000),
        };
    });

    const mockCharts = {
        total: '#3F83F8',
        previous: '#60A5FA',
    };

    const yTickValues = [0, 20000, 40000, 60000, 80000, 100000];
</script>

<WidgetWrapper>
    <div class="p-2">
        <div class="mb-8">
            <SwitchTicketWidgetHeading title='Revenue' description="Last 30 days" mobileWrap={false}/>
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
                    yDomain={[0, 100000]}
                    yNice={false}
                    padding={{ left: 40, bottom: 24, right: 24 }}
                    tooltip={{ mode: "bisect-x" }}
            >
                <Svg>
                    <Axis
                            placement="left"
                            grid
                            rule
                            format={(value) => `$${value.toLocaleString()}`}
                            ticks={yTickValues}
                    />

                    <Axis
                            placement="bottom"
                            rule
                            format={(d) => format(d, "dd MMM")}
                            ticks={7}
                    />

                    <Spline y={(d) => d.y} class="stroke-2" stroke={mockCharts.total}/>
                    <Spline y={(d) => d.y1} class="stroke-2 dotted-line" stroke={mockCharts.previous}/>

                    <Highlight y={(d) => d.y} points={{ fill: mockCharts.total }}/>
                    <Highlight y={(d) => d.y1} points={{ fill: mockCharts.previous }}/>
                    <Highlight lines/>
                </Svg>

                <Tooltip.Root let:data>
                    <Tooltip.List>
                        <Tooltip.Item label="Total Revenue" value={`$${data.y.toLocaleString()}`}/>
                        <Tooltip.Item label="Previous Period" value={`$${data.y1.toLocaleString()}`}/>
                    </Tooltip.List>
                </Tooltip.Root>
            </Chart>
        </div>

        <div class="flex flex-row justify-start gap-4 mt-8">
            <span class="flex items-center flex-row justify-center gap-1 text-xs text-gray-500">
                <span class="inline-block w-6 border-t-2 border-primary-500"></span> Total Revenue
            </span>
            <span class="flex items-center flex-row justify-center gap-1 text-xs text-gray-500">
                <span class="inline-block w-6 border-t-2 border-primary-500 border-dashed"></span> Previous Period
            </span>
        </div>
    </div>
</WidgetWrapper>
