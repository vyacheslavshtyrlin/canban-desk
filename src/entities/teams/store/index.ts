import { TeamState } from "./types";
import { create } from "zustand";

export const useTeamStore = create<TeamState>()((set) => ({
  teams: null,
  loading: false,
  setTeams: (teams) => set(() => ({ teams: teams })),
  setLoading: (value) => set(() => ({ loading: value })),
}));
