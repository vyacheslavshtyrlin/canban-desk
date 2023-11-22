export type Team = {
  name: string;
  $id: string;
  description: string;
};

export interface TeamState {
  teams: null | Team[];
  loading: boolean;
  setTeams: (teams: Team[]) => void;
  setLoading: (value: boolean) => void;
}
