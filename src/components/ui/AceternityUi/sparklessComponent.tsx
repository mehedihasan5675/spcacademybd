"use client";
import { SparklesCore } from "../AceternityUi/sparkless";

export function SparklesPreview() {
  return (
    <div className="h-full relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div></div>
    </div>
  );
}
