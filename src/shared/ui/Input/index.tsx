import { HTMLInputTypeAttribute } from "react";

interface Props {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, type, onChange, value}: Props) => {
  return (
    <div className="join mb-4">
      <label className=" w-full input-group">
        <span className="text-neutral">{label}</span>
        <input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          autoComplete="off"
          placeholder={label}
          className="input input-bordered text-neutral join-item "
          type={type}
        />
      </label>
    </div>
  );
};
