import { Link } from "react-router-dom";

type ItemsType = {
  key: string;
  name: string;
  element?: React.ReactNode;
};

interface Props {
  trigger: React.ReactNode;
  items: ItemsType[];
  onMenuSelect?: (key: string) => void;
}

export const Dropdown = ({ trigger, items, onMenuSelect }: Props) => {
  const onClick = (key: string) => {
    if (!onMenuSelect) return;
    onMenuSelect(key);
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>{trigger}</label>
      <ul
        tabIndex={0}
        className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        {items.map((item) => (
          <li key={item.key} onClick={() => onClick(item.key)}>
            {item.element ? <>{item.element}</> : <a>{item.name}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};
