declare module "react-konva" {
    import * as React from "react";
    import * as Konva from "konva";
  
    export * from "konva";
    export const Stage: React.ComponentType<any>;
    export const Layer: React.ComponentType<any>;
    export const Rect: React.ComponentType<any>;
    export const Circle: React.ComponentType<any>;
    export const Text: React.ComponentType<any>;
    export const Line: React.ComponentType<any>;
  }
  