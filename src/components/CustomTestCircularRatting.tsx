import { CircularProgress, CircularProgressProps } from "@nextui-org/react";

interface CustomCircularProgressProps extends CircularProgressProps {
  valueLabel?: string;
  max?: number;
}

const CustomTestCircularRatting: React.FC<CustomCircularProgressProps> = ({ value, valueLabel, ...props }) => {
  console.log("CustomCard rendered");

  
  return (
    <div className="relative inline-flex items-center justify-center testCusCir">
      <CircularProgress value={value} {...props} showValueLabel={false} maxValue={10} minValue={1} />
      {props.showValueLabel && (
        <span className="absolute text-center text-xs laptop:text-base font-semibold">
          {valueLabel !== undefined ? valueLabel : value}
        </span>
      )}
    </div>
  );
};

export default CustomTestCircularRatting;
