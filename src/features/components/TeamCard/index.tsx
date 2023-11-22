import { Team, getTeamDescription } from "@/entities";
import { Card } from "@/shared/ui";
import { useEffect, useState } from "react";

export const TeamCard = ({ team }: { team: Team }) => {
  const [description, setDescription] = useState("");
  useEffect(() => {
    getTeamDescription(team.$id).then((value) => {
      setDescription(value.description);
    });
  }, []);
  return (
    <Card
      className="cursor-pointer"
      onClick={() => console.log(team.$id)}
      children={<p>{description}</p>}
      title={team.name}
    />
  );
};
