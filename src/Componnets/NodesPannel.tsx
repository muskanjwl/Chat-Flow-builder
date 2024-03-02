import Card from "./Card";
import { NODES_MAPPING } from "../enums/nodeTypes";

type Props = {};

const NodesPannel = (props: Props) => {
  return (
    <div className="flex gap-2 h-full w-full  p-5">
      {NODES_MAPPING.map((node, i) => (
        <Card
          key={i}
          nodeIcon={node.NodeIcon}
          text={node.displayName}
          type={node.type}
        />
      ))}
    </div>
  );
};

export default NodesPannel;
