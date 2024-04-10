import { useContext } from "react";
import { WindowSizeContext } from "./windowSizeContext";

export const useWindowSize = () => {
  return useContext(WindowSizeContext);
};
