import THEME from "../constants/theme";
import { useSelector } from "react-redux";
import { IRootState } from "../interfaces/IRootState";
import { themeType } from "../types/themeType";

export function useTheme(): themeType {
  const { value: currentTheme } = useSelector((state: IRootState) => state.theme);
  return currentTheme === 1 ? THEME.LIGHT : THEME.DARK;
}
