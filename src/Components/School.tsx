import React from "react";

function SchoolIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="M15 21v-8a1 1 0 00-1-1h-4a1 1 0 00-1 1v8"></path>
      <path d="M3 10a2 2 0 01.709-1.528l7-5.999a2 2 0 012.582 0l7 5.999A2 2 0 0121 10v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
    </svg>
  );
}

export default SchoolIcon;