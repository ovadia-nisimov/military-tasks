import { MissionDTO } from "../DTO/MissionDto";
import MissionItem from "./MissionItem";
import "../App.css";

interface MissionListProps {
  missions: MissionDTO[];
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}

export default function MissionList({ missions, onDelete, onUpdateStatus }: MissionListProps) {
  return (
    <div className="mission-list">
      {missions.map((mission) => (
        <MissionItem
          key={mission._id}
          mission={mission}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </div>
  );
}
