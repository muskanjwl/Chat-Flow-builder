import { BiMessageRoundedDetail } from "react-icons/bi";
import TextNode from "../Componnets/Nodes/TextNode";
import InputText from "../Componnets/InputText";

export type NodeType = keyof typeof NODE_TYPES;

export const NODE_TYPES = { textNode: TextNode };

export const NODES_MAPPING = [
  // Add more node types here
  {
    type: "textNode",
    displayName: "Message",
    NodeIcon: BiMessageRoundedDetail,
    Component: InputText,
  },
];
