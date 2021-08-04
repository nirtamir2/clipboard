import type { NativeImage } from "electron";

export interface ElectronApi {
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
