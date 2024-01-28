import { FC, PropsWithChildren } from "react";

// A navigation bar, in the middle there is a link to a list of all solutions, in the right there is a link to a first solution
const NavigationBar: FC<{}> = () => {
  return (
    <div className="flex justify-between p-2">
      <a className="underline text-primary" href="/solutions/0">
        {"<<<"}
      </a>
      <a className="underline text-primary" href="/solutions">
        Solutions
      </a>
      <a className="underline text-primary" href="/solutions/1">
        {">>>"}
      </a>
    </div>
  );
};

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col h-dvh">
      <div className="px-8 md:px-32 lg:px-60">
        <NavigationBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
