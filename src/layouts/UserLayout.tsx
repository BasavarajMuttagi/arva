import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-y-auto bg-white p-2">{children}</div>
  );
};

export default UserLayout;
