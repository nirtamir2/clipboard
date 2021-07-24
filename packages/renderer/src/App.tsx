import React from "react";
import { useElectron } from "/@/use/electron";
import "modern-css-reset";
import styles from "./App.module.css";
import { motion } from "framer-motion";
import emptyClipboardSrc from "./empty-clipboard.svg";
import { useClipboardHistory } from "/@/hooks";
import type { IClipboardItem } from "/@/types/IClipboardItem";

const { clipboard } = useElectron();

function App(): JSX.Element {
  const clipboardHistory = useClipboardHistory();

  function renderEmptyClipboardItems() {
    return (
      <div className={styles.emptyClipboard}>
        <img
          src={emptyClipboardSrc}
          height={63.217383}
          width={64.763626}
          alt="Empty clipboard"
        />
      </div>
    );
  }

  function handleCopyToClipboard(item: IClipboardItem) {
    clipboard.writeText(item.value);
  }

  return (
    <motion.div className={styles.container}>
      <input
        type="text"
        placeholder="Search for text..."
        className={styles.input}
      />
      {clipboardHistory.length === 0 ? (
        renderEmptyClipboardItems()
      ) : (
        <ul className={styles.list}>
          {clipboardHistory.map((clipboardItem) => {
            return (
              <li
                key={clipboardItem.id}
                className={styles.item}
                onClick={() => handleCopyToClipboard(clipboardItem)}
              >
                {clipboardItem.value}
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}

export default App;
