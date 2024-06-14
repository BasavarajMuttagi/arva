import { SVGProps } from "react";

function Mug(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-coffee"
      {...props}
    >
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 1L6 4" />
      <path d="M10 1L10 4" />
      <path d="M14 1L14 4" />
    </svg>
  );
}

export default Mug;
