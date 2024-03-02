import { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  Connection,
  Edge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { SelectedNodeContext } from "../contexts/selectedNodeContext";

import { NODE_TYPES } from "../enums/nodeTypes";

type Props = {};
const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const FlowViewPort = (props: Props) => {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  const { selectedNodeData } = useContext(SelectedNodeContext);
  useEffect(() => {
    handleInputChange(selectedNodeData.id, selectedNodeData.value);
  }, [selectedNodeData]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Edge<any> | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain");
    setNodes((prev) => [
      ...prev,
      {
        id: "node-" + (prev.length + 1),
        type: type,
        position: { x: e.clientX, y: e.clientY },
        data: { initialData: "newNode" },
      },
    ]);
  };
  const handleInputChange = (nodeId: string, newValue: any) => {
    setNodes((prev) => {
      return prev.map((obj) =>
        obj.id === nodeId ? { ...obj, data: { initialData: newValue } } : obj
      );
    });
  };
  const defaultEdgeOptions = {
    markerEnd: {
      type: MarkerType.Arrow,
      color: "black",
    },
  };

  return (
    <div
      className="flex flex-col border border-grey-100 h-full basis-3/4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={NODE_TYPES}
        defaultEdgeOptions={defaultEdgeOptions}
        defaultMarkerColor={"#fffff"}
        // fitView
        style={rfStyle}
      />
    </div>
  );
};
// markerEnd: {
//   type: MarkerType.Arrow,
// }
export default FlowViewPort;
