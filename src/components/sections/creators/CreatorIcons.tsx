import React from "react";

// --- ICON COMPONENTS (No changes) ---
const MusicIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9 18V5l12-2v13"
    ></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);
const PenIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    ></path>
  </svg>
);
const PaintIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M18.37 2.63L14 7l-1.59-1.59a2.24 2.24 0 0 0-3.16 0L4 10.5V16h5.5l5.16-5.16a2.24 2.24 0 0 0 0-3.16L17 6l4-4M16 5l3 3"
    ></path>
  </svg>
);
const MasksIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M10 16.5c.5-1.5 1.7-3 3-3s2.5 1.5 3 3"
    ></path>
    <path d="M7 10a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M17 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z"></path>
    <path d="M14.5 18a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1"></path>
    <path d="M2.5 4.8c1.7 4.5 5.5 8.2 10 8.2s8.3-3.7 10-8.2"></path>
  </svg>
);

export { MusicIcon, PenIcon, PaintIcon, MasksIcon };