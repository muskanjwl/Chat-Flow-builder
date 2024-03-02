import { useContext } from "react";
import { SelectedNodeContext } from "../contexts/selectedNodeContext";
import NodesPannel from "./NodesPannel";
import SettingsPannel from "./SettingsPannel";

type Props = {};

const SidePannel = (props: Props) => {
  const { selectedNodeData } = useContext(SelectedNodeContext);

  return (
    <div className="flex border border-grey-100 basis-1/4 transition">
      {selectedNodeData.id === "" ? <NodesPannel /> : <SettingsPannel />}
    </div>
  );
};

export default SidePannel;
