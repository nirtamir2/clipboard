import type { ElectronApi } from "../../../preload/electron-api";

export function useElectron(): Readonly<ElectronApi> {
  return window.electron;
}
