import { Loader } from "lucide-react";
import React from "react";

const FallbackLoader = () => {
  return (
    <div
      className="w-full h-svh bg-black/5 flex 
      items-center justify-center"
    >
      <Loader className="w-12 h-12 animate-spin" />;
    </div>
  );
};

export default FallbackLoader;
