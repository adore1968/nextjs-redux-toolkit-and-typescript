"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
