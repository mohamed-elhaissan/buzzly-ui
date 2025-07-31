import { setConfig } from "next/config";
import { useCallback, useState } from "react";

const useCopyToClipBoard = (text: string) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyToClipboard = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        })
        .catch(() => {
          console.log("Error While Copy the data to Clipboard");
        });
    }
  }, [text]);
  return { isCopied, copyToClipboard };
};

export default useCopyToClipBoard;
