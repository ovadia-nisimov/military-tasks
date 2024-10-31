import { MissionDTO } from "../DTO/MissionDto";
import { MissionStatus } from "../enums/MissionStatus";
import "../App.css";

interface MissionItemProps {
  mission: MissionDTO;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}

export default function MissionItem({ mission, onDelete, onUpdateStatus }: MissionItemProps) {
  const getClassNameByStatus = () => {
    switch (mission.status) {
      case MissionStatus.Pending:
        return "pending";
      case MissionStatus.InProgress:
        return "in-progress";
      case MissionStatus.Completed:
        return "completed";
      default:
        return "";
    }
  };

  return (
    <div className={`mission-item ${getClassNameByStatus()}`}>
      <h2>{mission.name}</h2>
      <p>{mission.description}</p>
      <p>Status: {mission.status}</p>
      <p>Priority: {mission.priority}</p>
      <button onClick={() => onDelete(mission._id!)}>Delete</button>
      {mission.status === MissionStatus.Pending && (
        <button onClick={() => onUpdateStatus(mission._id!)}>Progress</button>
      )}
      {mission.status === MissionStatus.InProgress && (
        <button onClick={() => onUpdateStatus(mission._id!)}>Completed</button>
      )}
    </div>
  );
}
