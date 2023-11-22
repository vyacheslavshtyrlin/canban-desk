import { useUserStrore } from "@/entities/index";

export const UserAvatar = () => {
  const user = useUserStrore((state) => state.user);

  return (
    <>
      {user!.avatar ? (
        <div className="avatar cursor-pointer">
          <div className="w-12 rounded-full">
            <img src={user!.avatar} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder cursor-pointer ">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>{user!.name.substring(0, 2)}</span>
          </div>
        </div>
      )}
    </>
  );
};
