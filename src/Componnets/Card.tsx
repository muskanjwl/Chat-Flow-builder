import { createElement } from "react";
import { IconType } from "react-icons";

type Props = {
  nodeIcon: IconType;
  text: string;
  type: string;
};

const Card = ({ nodeIcon, text, type }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", type);
  };
  return (
    <div
      className="flex flex-col text-primary border border-primary rounded w-1/2 h-20 items-center justify-center cursor-pointer"
      draggable
      onDragStart={handleDragStart}
    >
      {createElement(nodeIcon, { size: 30 })}
      {text}
    </div>
  );
};

export default Card;
