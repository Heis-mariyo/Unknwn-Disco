// "use client";
// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     const updateCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });

//       // Check if hovering over a clickable element
//       const target = e.target as HTMLElement;
//       setIsPointer(
//         window.getComputedStyle(target).cursor === "pointer" ||
//           target.tagName.toLowerCase() === "a" ||
//           target.tagName.toLowerCase() === "button"
//       );
//     };

//     window.addEventListener("mousemove", updateCursor);
//     return () => window.removeEventListener("mousemove", updateCursor);
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`,
//       }}
//     >
//       {/* The Dot */}
//       <div
//         className={`w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
//           isPointer ? "scale-[3] opacity-50" : "scale-100 opacity-100"
//         }`}
//       />

//       {/* The Glow Ring (Optional - remove if it causes lag) */}
//       <div
//         className={`absolute top-0 left-0 w-8 h-8 border border-un-teal rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out delay-75 ${
//           isPointer ? "scale-[2] border-un-purple" : "scale-100"
//         }`}
//       />
//     </div>
//   );
// }
