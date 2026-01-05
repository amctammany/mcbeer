"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { FermentationStep } from "@/generated/prisma/browser";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";

export type ChartReducer = {
  currentTemp?: number;
  currentDay: number;
  data: { day: number; temperature: number }[];
};
export function makeChartData(src: AdjustedFermentationProfileType) {
  return (src.steps ?? ([] as FermentationStep[])).reduce<ChartReducer>(
    (acc, step) => {
      //   const dt = acc.currentTemp ? step.temperature - acc.currentTemp : 0;
      const ramps = Array(step.rampTime.value)
        .fill(0)
        .map((r, i) => ({
          day: i,
          temp: 0,
        }));
      const days = Array(step.time.value)
        .fill(0)
        .map((d, i) => ({
          day: acc.currentDay + i + 0,
          temp: step.temperature.value,
        }));

      return {
        currentTemp: step.temperature.value,
        currentDay: acc.currentDay + days.length,
        data: [...acc.data, ...days],
      } as any;
    },
    { currentTemp: undefined, currentDay: 0, data: [] }
  );
}

export type FermentationChartProps = {
  src: AdjustedFermentationProfileType;
};
const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
export default function FermentationChart({ src }: FermentationChartProps) {
  const { data } = makeChartData(src);
  console.log(data);
  return (
    <div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis label="Temp (F)" />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="temp"
            type="linear"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
