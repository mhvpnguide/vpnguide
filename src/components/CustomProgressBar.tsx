import { Progress } from "@nextui-org/react";

const CustomProgress = ({value}:{value: number}) => {
    const test =1;
  
  return (
    <Progress aria-label="Loading..." value={value} className={`w-full customProgress ${test >= 9.5 ? 'r-9': test >= 8 ? 'r-8': test >= 5 ? 'r-5': 'r-1'}`} maxValue={10} minValue={0}/>

  );
};

export default CustomProgress;
