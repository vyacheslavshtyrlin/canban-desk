import apiConfig from "@/shared/config/appwriteConfig";
import { ID, Teams } from "appwrite";

const teams = new Teams(apiConfig);

export const getTeamList = () => {
  return teams.list();
};

export const createTeam = (name: string) => {
  return teams.create(ID.unique(), name);
};

export const getTeamDescription = (teamId: string) => {
  return teams.getPrefs(teamId);
};
