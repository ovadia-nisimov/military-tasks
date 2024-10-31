import { useEffect, useState } from "react";
import { getMissions, addMission, deleteMission, updateMissionStatus } from "./services/missionService";
import { MissionDTO } from "./DTO/MissionDto";
import MissionList from "./components/MissionList";
import AddMissionForm from "./components/AddMissionForm";
import "./App.css";

export default function App() {
  const [missions, setMissions] = useState<MissionDTO[]>([]);

  const loadMissions = async () => {
    try {
      const missions = await getMissions();
      setMissions(missions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMissions();
  }, []);

  const handleAddMission = async (mission: MissionDTO): Promise<void> => {
    try {
      await addMission(mission);
      setMissions(await getMissions());
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteMission(id);
      setMissions(await getMissions());
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async (id: string): Promise<void> => {
    try {
      await updateMissionStatus(id);
      setMissions(await getMissions());
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="App">
      <h1>Missions Task Manager</h1>
      <AddMissionForm onAdd={handleAddMission} />
      <MissionList
        missions={missions}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}
