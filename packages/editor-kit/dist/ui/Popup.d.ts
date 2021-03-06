import React, { CSSProperties } from "react";
export interface PopupProps {
    onClose(event: React.MouseEvent<HTMLElement, MouseEvent>): any;
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    children: React.ReactNode;
    attributes?: any;
    className?: string;
}
export declare const Popup: (props: PopupProps) => JSX.Element;
export declare const overlayStyle: CSSProperties;
export declare const Overlay: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
