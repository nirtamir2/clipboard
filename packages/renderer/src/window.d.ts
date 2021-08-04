import type { ElectronApi } from "../../preload/electron-api";

declare global {
  declare interface Window {
    electron: Readonly<ElectronApi>;
    electronRequire?: NodeRequire;
  }
}
