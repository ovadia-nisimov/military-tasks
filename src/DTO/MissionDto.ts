import { MissionStatus } from "../enums/MissionStatus";
import { MissionPriority } from "../enums/MissionPriority";

export interface MissionDTO {
  _id?: string;
  name: string;
  status: MissionStatus;
  priority: MissionPriority;
  description: string;
}
