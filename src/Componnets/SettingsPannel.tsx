import { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { NODES_MAPPING } from "../enums/nodeTypes";
import { SelectedNodeContext } from "../contexts/selectedNodeContext";
type Props = {};

const SettingsPannel = (props: Props) => {
  const { selectedNodeData, setSelectedNodeData } =
    useContext(SelectedNodeContext);
  const nodeTypeDetails = NODES_MAPPING.find(
    (node) => node.type === selectedNodeData.type
  );

  const Component = nodeTypeDetails?.Component;
  return (
    <div className="flex flex-col w-full ">
      <div className=" flex border-b border-grey-200 w-full h-10 p-2 items-center">
        <IoArrowBack onClick={() => setSelectedNodeData({ id: "" })} />
        <div className="flex justify-center w-full">
          {nodeTypeDetails?.displayName}
        </div>
      </div>
      {Component && (
        <Component
          value={selectedNodeData.value}
          handleChange={setSelectedNodeData}
        />
      )}
    </div>
  );
};

export default SettingsPannel;
