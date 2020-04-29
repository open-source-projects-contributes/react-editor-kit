import React from "react";
import { MarkButton } from "../marks/MarkButton";
import { IconProps } from "../buttons/IconButton";
import { TooltipContentProps } from "../popup/Tooltip";

export const BoldButton = (props: IconProps & TooltipContentProps) => {
  return <MarkButton {...props} type="bold" />;
};
