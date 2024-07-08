import { HTMLAttributes } from "react";

const IconButton = (
  props: HTMLAttributes<HTMLDivElement> & {
    title: string;
  },
) => {
  const { children, title } = props;
  return (
    <div
      {...props}
      className="flex min-w-24 cursor-pointer flex-col items-center space-y-2 rounded-3xl fill-disabled p-5 text-disabled has-[>svg.active]:bg-seafoam-100 has-[>svg.active]:fill-deep-lagoon-blue has-[>svg.active]:text-deep-lagoon-blue"
    >
      {children}
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default IconButton;
