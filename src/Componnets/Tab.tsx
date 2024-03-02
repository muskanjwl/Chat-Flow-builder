import { useState } from "react";
import { useEdges, useNodes } from "reactflow";
import InfoBar, { InfoBarProps } from "./InfoBar";

const Tab = () => {
  const edges = useEdges();
  const nodes = useNodes();
  const [info, setInfo] = useState<InfoBarProps | null>(null);
  const handleSave = () => {
    const nodeEdgeMap: { [key: string]: number } = {};
    edges.forEach((edge) => {
      if (!nodeEdgeMap[edge.target]) nodeEdgeMap[edge.target] = 1;
    });

    // Check if each node has a corresponding edge with target handle equal to the node ID
    console.log(Object.keys(nodeEdgeMap).length, nodes.length);
    if (Object.keys(nodeEdgeMap).length < nodes.length - 1) {
      setInfo({ status: "ERROR", message: "Error Saving Flow ;((" });
    } else {
      setInfo({ status: "SUCCESS", message: "Flow Saved!" });
    }
    setTimeout(() => {
      setInfo(null);
    }, 1000);
  };

  return (
    <div className="flex justify-end w-full p-2 bg-grey-100 pr-20 ">
      <div className="basis-3/4 flex justify-center">
        {info && <InfoBar status={info.status} message={info.message} />}
      </div>
      <div className="basis-1/4">
        <button
          className="text-primary border border-primary rounded px-8 py-1"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Tab;
