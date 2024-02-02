import { NavigationBar } from "@/components/NavigationBar";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="px-8 md:px-32 lg:px-60">
        <NavigationBar />
      </div>
      <div className="px-8 md:px-32 lg:px-60">{children}</div>
    </div>
  );
};

export default Layout;
