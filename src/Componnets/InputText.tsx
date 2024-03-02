import { useState } from "react";

import { SelectedNodeDataType } from "../contexts/selectedNodeContext";

type Props = {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<SelectedNodeDataType>>;
};

const InputText = ({ value, handleChange }: Props) => {
  const [text, setText] = useState(value);
  return (
    <div className="p-2 flex flex-col gap-5 text-grey-200">
      Text
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          handleChange((prev) => {
            return { ...prev, value: e.target.value };
          });
        }}
        className="border-2 border-grey-100 p-1"
      />
    </div>
  );
};

export default InputText;
