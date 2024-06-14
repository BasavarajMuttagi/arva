import { HTMLAttributes } from "react";

const IconButton = (
  props: HTMLAttributes<HTMLDivElement> & {
    title: string;
  }
) => {
  const { children, title } = props;
  return (
    <div
      {...props}
      className="cursor-pointer space-y-2 p-5  text-disabled fill-disabled rounded-3xl  flex flex-col items-center min-w-24 has-[>svg.active]:text-deep-lagoon-blue has-[>svg.active]:fill-deep-lagoon-blue has-[>svg.active]:bg-seafoam-100"
    >
      {children}
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default IconButton;
