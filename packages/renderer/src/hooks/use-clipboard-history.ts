import type { IClipboardItem } from "/@/types";
import React from "react";
import { useElectron } from "/@/use/electron";

function getClipboardHistoryMock(): Array<IClipboardItem> {
  return ["aaa", "lorem ipsum", "The only way to go fast is to go well"].map(
    (value, i) => {
      return { id: String(i), value };
    },
  );
}

const { clipboard } = useElectron();

export function useClipboardHistory(): Array<IClipboardItem> {
  React.useEffect(() => {
    clipboard.startListening();

    return () => {
      clipboard.stopListening();
    };
  }, []);

  return getClipboardHistoryMock();
}
