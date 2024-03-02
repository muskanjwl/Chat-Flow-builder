import { useMemo } from "react";
import {
  getConnectedEdges,
  Handle,
  HandleProps,
  Position,
  useNodeId,
  useStore,
} from "reactflow";

const selector = (s: { nodeInternals: any; edges: any }) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

type Props = { connectionLimit: number };

const CustomSourceHandle = ({ connectionLimit }: Props, props: HandleProps) => {
  const { nodeInternals, edges } = useStore(selector);
  const nodeId = useNodeId();

  const isHandleConnectable = useMemo(() => {
    const node = nodeInternals.get(nodeId);

    const connectedEdges = getConnectedEdges([node], edges);

    const filteredConnectedEdges = connectedEdges.filter(
      (edge) => edge.source === nodeId
    );
    return filteredConnectedEdges.length < connectionLimit;
  }, [nodeInternals, edges, nodeId, connectionLimit]);

  return (
    <Handle
      type="source"
      position={Position.Right}
      id="a"
      isConnectable={isHandleConnectable}
    ></Handle>
  );
};

export default CustomSourceHandle;
