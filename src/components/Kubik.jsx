import { useEffect } from "react";

export default function Kubik() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.3.5/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="kubik">
      <spline-viewer url="https://prod.spline.design/q3JZ-541i3VYuBbM/scene.splinecode"></spline-viewer>
      <p>Some text beside the 3D model</p>
    </div>
  );
}
