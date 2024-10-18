import { Progress } from "@nextui-org/react";
interface CustomProgressProps {
  value: number;
  size?: "sm" | "md" | "lg";  // Optional size prop
}

const CustomTestVpnProgressbar = ({ value, size = 'md' }: CustomProgressProps) => {
    const test =1;
  
  return (
    <Progress aria-label="Loading..." value={value} className={`w-full  customTestProgress`} maxValue={10} minValue={0} size={size}/>

  );
};

export default CustomTestVpnProgressbar;
