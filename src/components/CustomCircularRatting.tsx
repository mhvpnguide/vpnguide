import { CircularProgress, CircularProgressProps } from "@nextui-org/react";
import { memo } from "react";

interface CustomCircularProgressProps extends CircularProgressProps {
  valueLabel?: string;
  max?: number;
}

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = memo(({ value, valueLabel, ...props }) => {
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <CircularProgress value={value} {...props} showValueLabel={false} maxValue={10} minValue={1} aria-label="Loading..." />
      {props.showValueLabel && (
        <span className="absolute text-center text-[20px] laptop:text-base font-semibold">
          {valueLabel !== undefined ? valueLabel : value}
        </span>
      )}
    </div>
  );
});

// Set the display name for better debugging
CustomCircularProgress.displayName = "CustomCircularProgress";

export default CustomCircularProgress;
