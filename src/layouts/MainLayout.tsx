import BottomNav from "../components/BottomNav";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen space-y-5 bg-white">
      {/* bottom */}
      {children}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
