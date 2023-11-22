import { useTeamStore } from "@/entities";
import { getTeamList } from "@/entities";
import { useEffect } from "react";
import { TeamCard } from "@/features/components";
import cn from "@/shared/utils/cn";


export const TeamList = () => {
  const { teams, setLoading, setTeams, loading } = useTeamStore();

  useEffect(() => {
    setLoading(true);
    getTeamList()
      .then((teams: any) => {
        setTeams(teams.teams);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <>
      {teams ? (
        <div className={cn(`grid grid-cols-3 gap-4`)}>
          {teams.map((team) => (
            <TeamCard key={team.$id} team={team} />
          ))}
        </div>
      ) : (
        <div>test</div>
      )}
    </>
  );
};
