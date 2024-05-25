import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "800",
        margin: "0 auto",
        padding: "0 16",
      }}
    >
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
