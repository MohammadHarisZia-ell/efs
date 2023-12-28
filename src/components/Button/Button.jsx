import { useState } from "react";

function Button() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <div
        className={`w-72 h-11 px-6 py-3 ${
          isPressed
            ? "rounded-lg bg-slate-50 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.15)] "
            : "bg-slate-50 rounded-lg shadow-[0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.15)]"
        } justify-center items-center gap-3 inline-flex`}
        onMouseDown={() => {
          setIsPressed(true);
        }}
        onMouseUp={() => {
          setIsPressed(false);
        }}
      >
        <div className="text-sky-500 text-lg font-medium font-['SF Pro Rounded']">
          Button Text
        </div>
      </div>
    </>
  );
}

export default Button;
