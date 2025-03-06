import { useContext } from "react";
import { ColorContext } from "../ColorProvider";

export const useColors = () => useContext(ColorContext);
