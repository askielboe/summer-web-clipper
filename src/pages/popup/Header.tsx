import { ReactNode } from "react";

import Icon from "@assets/Icon";

interface HeaderProps {
  subtitle: string;
  actions: ReactNode | ReactNode[];
}

const Header = ({ subtitle, actions }: HeaderProps) => {
  return (
    <header className="bg-white h-16 w-full flex items-center border-b border-gray-300">
      <div className="flex ml-3 items-center w-full">
        <Icon className="w-10 h-10" />
        <div className="ml-2">
          <span className="text-lg">Summber Web Clipper</span>
          <span className="text-xs ml-2">0.0.2</span>
          <p className="text-sm">{subtitle}</p>
        </div>
        {actions}
      </div>
    </header>
  );
};

export default Header;
