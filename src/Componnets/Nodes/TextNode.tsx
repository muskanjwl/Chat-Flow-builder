import { useContext, useEffect } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { FaWhatsapp } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

import { SelectedNodeContext } from "../../contexts/selectedNodeContext";
import CustomSourceHandle from "../CustomSourceHandle";

export type TextData = {
  initialData: string;
};

const TextNode = ({ selected, data, id }: NodeProps<TextData>) => {
  const { selectedNodeData, setSelectedNodeData } =
    useContext(SelectedNodeContext);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selected && selectedNodeData.id !== id) {
      timeoutId = setTimeout(() => {
        setSelectedNodeData({
          id: id,
          type: "textNode",
          value: data?.initialData,
        });
      }, 0);
    } else if (!selected && selectedNodeData.id === id) {
      setSelectedNodeData({ id: "" });
    }
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div className={`${selected ? "border border-primary rounded" : ""}`}>
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <div className="flex flex-col">
        <div className="flex text-xs justify-between bg-secondary rounded px-2 py-1 gap-20">
          <div className="flex items-center gap-1">
            <TbMessageChatbot />
            <label htmlFor="text ">Send Message</label>
          </div>
          <FaWhatsapp />
        </div>
        <div id="text" className="bg-white w-full h-10">
          {data?.initialData}
        </div>
      </div>
      <CustomSourceHandle connectionLimit={1} />
    </div>
  );
};

export default TextNode;
