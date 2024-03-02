import React, { createContext, useState, ReactNode } from "react";
import { NodeType } from "../enums/nodeTypes";

// Step 1: Create a context with undefined initial values
export type SelectedNodeDataType = {
  id: string;
  type?: NodeType;
  value?: any;
};
type ContextType = {
  selectedNodeData: SelectedNodeDataType;
  setSelectedNodeData: React.Dispatch<
    React.SetStateAction<SelectedNodeDataType>
  >;
};
const SelectedNodeContext = createContext<ContextType>({
  selectedNodeData: { id: "" },
  setSelectedNodeData: () => {},
});

// Step 2: Provide context data
type Props = {
  children: ReactNode;
};
const SelectedNodeContextProvider = ({ children }: Props) => {
  const [selectedNodeData, setSelectedNodeData] =
    useState<SelectedNodeDataType>({ id: "" });

  return (
    <SelectedNodeContext.Provider
      value={{ selectedNodeData, setSelectedNodeData }}
    >
      {children}
    </SelectedNodeContext.Provider>
  );
};

export { SelectedNodeContext, SelectedNodeContextProvider };
