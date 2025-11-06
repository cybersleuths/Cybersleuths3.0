import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500" />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        {/* Glowing circle background */}
        <div className="absolute inset-0 -z-10 w-64 h-64 mx-auto my-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-glow-pulse">
              <span className="text-white font-bold text-4xl">CS</span>
            </div>
          </div>

          {/* Title with scan effect */}
          <div className="relative">
            <h1 className="text-5xl font-bold neon-text mb-2">CyberSleuths</h1>
            <p className="text-blue-300 font-mono text-sm tracking-widest">INITIALIZING SYSTEM...</p>
          </div>

          {/* Loading bar with hacker style */}
          <div className="w-64 mx-auto space-y-2">
            <div className="h-1 bg-slate-900/50 border border-blue-500/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse" style={{ width: "100%" }}></div>
            </div>
            <p className="text-xs text-foreground/60 font-mono">
              <span className="text-green-400">●</span> SYSTEM READY
            </p>
          </div>

          {/* Animated text */}
          <div className="space-y-1">
            <p className="text-sm text-blue-300 font-mono animate-pulse">
              {">"} Accessing secure network...
            </p>
            <p className="text-sm text-purple-300 font-mono animate-pulse" style={{ animationDelay: "0.2s" }}>
              {">"} Loading encryption keys...
            </p>
            <p className="text-sm text-cyan-300 font-mono animate-pulse" style={{ animationDelay: "0.4s" }}>
              {">"} Initializing database...
            </p>
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan"></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-500/50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-500/50"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-cyan-500/50"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-blue-500/50"></div>
    </div>
  );
}

