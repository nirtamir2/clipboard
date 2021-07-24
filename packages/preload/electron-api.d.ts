import type { NativeImage } from "electron";

interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>;
  readonly clipboard: {
    readText: () => string;
    writeText: (text: string) => void;
    readImage: () => NativeImage;
    startListening: () => void;
    stopListening: () => void;
    addListener: (listener: (text: string) => void) => void;
  };
}

declare interface Window {
  electron: Readonly<ElectronApi>;
  electronRequire?: NodeRequire;
}

declare module "clipboard-event" {
  export function startListening(): void;
  export function stopListening(): void;
  export function on(change: "change", callback: () => void): void;
}
