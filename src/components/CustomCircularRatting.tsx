import { CircularProgress, CircularProgressProps } from "@nextui-org/react";

interface CustomCircularProgressProps extends CircularProgressProps {
  valueLabel?: string;
  max?: number;
}

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = ({ value, valueLabel, ...props }) => {
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <CircularProgress value={value} {...props} showValueLabel={false} maxValue={10} minValue={1} />
      {props.showValueLabel && (
        <span className="absolute text-center text-[20px] laptop:text-base font-semibold">
          {valueLabel !== undefined ? valueLabel : value}
        </span>
      )}
    </div>
  );
};

export default CustomCircularProgress;
