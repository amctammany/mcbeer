import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

export type WhiskerBarPlotProps = {
  label?: string;
  precision?: number;
  buffer?: number;
  range: [number | null, number | null];
  value?: number | null;
  className?: string;
  min?: number;
  max?: number;
} & VariantProps<typeof whiskerBarPlotStyles>;
const labelStyles = cva("uppercase underline mr-2 w-6", {
  variants: {
    variant: {
      default: [""],
      warning: [""],
    },
    size: {
      default: ["text-lg"],
      small: ["text-sm"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
const valueStyles = cva("flex pr-1 text-center text-xs mt-2", {
  variants: {
    type: {
      above: ["flex-row-reverse  -ml-2"],
      below: ["flex-row ml-1"],
      default: ["flex-row ml-1"],
    },
    variant: {
      default: [""],
      warning: [""],
    },
    size: {
      default: [""],
      small: ["text-sm"],
    },
  },
  defaultVariants: {
    type: "default",
    variant: "default",
    size: "default",
  },
});
const rangeStyles = cva(
  "absolute top-0 bottom-0 block h-full border-l-2 border-black border-r-2 mx-3",
  {
    variants: {
      variant: {
        default: ["bg-blue-300"],
        secondary: ["bg-secondary-300"],
        warning: ["bg-warning-300"],
      },
      size: {
        default: [""],
        small: ["text-sm"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
const rangeValueStyles = cva(
  "absolute top-0 bottom-0 text-center block h-full bg-purple-300 border-l-2 border-black border-r-2",
  {
    variants: {
      type: {
        above: ["left-"],
        below: [""],
        default: ["text-cener"],
      },
      variant: {
        default: [""],
        warning: [""],
      },
      size: {
        default: [""],
        small: ["text-sm"],
      },
    },
    defaultVariants: {
      type: "default",
      variant: "default",
      size: "default",
    },
  },
);

const whiskerBarPlotStyles = cva("flex px-4 py-1 mb-1 ", {
  variants: {
    variant: {
      default: [""],
      warning: [""],
    },
    size: {
      default: [""],
      small: ["text-sm"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "small",
  },
});
enum RangeType {
  Above = "above",
  Below = "below",
  Default = "default",
}
export default function WhiskerBarPlot({
  label,
  buffer: _buffer,
  precision,
  range,
  variant,
  min,
  max,
  size,
  value: _value,
  className,
}: WhiskerBarPlotProps) {
  const value = _value ?? 0;
  const buffer =
    _buffer ?? 0.1 * (Math.max(range[1]!, value) - Math.min(range[0]!, value));
  const sMin = min ?? Math.min(range[0]!, value) - buffer;
  const sMax = max ?? Math.max(range[1]!, value) + buffer;

  const scaleX = sMax - sMin;

  const width = (100 * (range[1]! - range[0]!)) / scaleX;
  const left = (100 * (range[0]! - sMin)) / scaleX;
  const valLeft =
    value < range[0]!
      ? 5
      : value > range[1]!
        ? 95
        : (100 * (value - sMin)) / scaleX;
  const type =
    value < range[0]!
      ? RangeType.Below
      : value > range[1]!
        ? RangeType.Above
        : RangeType.Default;

  console.log({
    buffer,
    sMin,
    range,
    value,
    sMax,
    scaleX,
    width,
    left,
    valLeft,
  });
  const leftAlign =
    value < (range?.[0] ?? 0)
      ? "text-left"
      : value > (range?.[1] ?? 1)
        ? "text-right"
        : "text-center";
  return (
    <div className={clsx(whiskerBarPlotStyles({ variant, size }), className)}>
      <h4 className={labelStyles({ variant, size })}>{label}</h4>
      <div className="w-full h-6 block m-auto relative border border-black">
        <span className="block absolute top-full left-3 text-center -translate-x-1/2 hidden">
          {sMin.toPrecision(3)}
        </span>
        <span className="block absolute left-auto top-full right-3 text-center translate-x-1/2 hidden">
          {sMax.toPrecision(3)}
        </span>
        <div
          style={{
            display: value !== undefined ? "block" : "none",
            width: 1,
            zIndex: 1,
            left: `${valLeft}%`,
          }}
          className="absolute top-0 bottom-0 block h-full bg-purple-300 border-l-2 border-black border-r-2"
        >
          <div className="absolute flex w-full my-0 h-full">
            <div className="absolute block top-full left-0 w-full ">
              <span className={`absolute -left-1 text-[9px] ${leftAlign}`}>
                {value?.toPrecision(4)}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ width: `${width}%`, left: `${left}%` }}
          className={rangeStyles({ variant, size })}
        >
          <div className="absolute flex w-full my-3 h-full">
            <div className="absolute block -top-1/2 left-0 w-full ">
              <span className="absolute left-0.5 text-[9px]">{range?.[0]}</span>
              <span className="absolute right-0.5 text-[9px]">
                {range?.[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
