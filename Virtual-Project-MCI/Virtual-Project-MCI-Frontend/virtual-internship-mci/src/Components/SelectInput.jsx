import { Select, Option } from "@material-tailwind/react";
 
export function SelectDefault({options, label}) {
  return (
    <div className="w-72 rounded-full">
      <Select label={label}>
        {options.map((option) => (
          <Option>{option}</Option>
        ))}
        {/* <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option> */}
      </Select>
    </div>
  );
}