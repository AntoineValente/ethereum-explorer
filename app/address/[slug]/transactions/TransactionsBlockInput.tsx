import { Input } from "@/components/ui/input";
import { type FC, useState } from "react";

type Props = {
  onEnter: (value: string) => void;
  onClear: VoidFunction;
  initialValue: string | undefined;
  label: string;
};

export const TransactionsBlockInput: FC<Props> = ({
  onEnter,
  onClear,
  initialValue,
  label,
}) => {
  const [value, setValue] = useState<string>(initialValue || "");

  return (
    <Input
      type="search"
      className="flex-1"
      placeholder={label}
      value={value}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter(value);
        }
      }}
      onChange={(e) => {
        if (!e.currentTarget.value) onClear();
        setValue(e.target.value);
      }}
    />
  );
};
