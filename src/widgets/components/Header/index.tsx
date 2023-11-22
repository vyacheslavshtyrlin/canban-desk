import { Dropdown } from "@/shared/ui/index";
import { navItems } from "./utils";
import { UserAvatar } from "@/features/components/index";
export const Header = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn normal-case text-xl">daisyUI</a>
      </div>
      <Dropdown
        onMenuSelect={(key) => console.log(key)}
        items={navItems}
        trigger={<UserAvatar />}
      />
    </div>
  );
};
