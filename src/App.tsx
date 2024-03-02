import { ReactFlowProvider } from "reactflow";
import "./App.css";
import FlowViewPort from "./Componnets/FlowViewPort";
import SidePannel from "./Componnets/SidePannel";
import Tab from "./Componnets/Tab";
import { SelectedNodeContextProvider } from "./contexts/selectedNodeContext";

function App() {
  return (
    <SelectedNodeContextProvider>
      <ReactFlowProvider>
        <div className="App h-screen">
          <div className="flex flex-col h-full">
            <Tab />
            <div className="flex w-full h-full">
              <FlowViewPort />
              <SidePannel />
            </div>
          </div>
        </div>
      </ReactFlowProvider>
    </SelectedNodeContextProvider>
  );
}

export default App;
