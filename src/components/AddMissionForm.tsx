import React, { useState } from 'react';
import { MissionDTO } from '../DTO/MissionDto';
import { MissionStatus } from '../enums/MissionStatus';
import { MissionPriority } from '../enums/MissionPriority';
import "../App.css";

interface AddMissionFormProps {
  onAdd: (mission: MissionDTO) => void;
}

export default function AddMissionForm({ onAdd }: AddMissionFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(MissionPriority.Low);
  const [status, setStatus] = useState(MissionStatus.Pending);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, description, priority, status });
    setName('');
    setDescription('');
    setPriority(MissionPriority.Low);
    setStatus(MissionStatus.Pending);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Mission Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as MissionPriority)}>
        {Object.values(MissionPriority).map((priority) => (
          <option key={priority} value={priority}>{priority}</option>
        ))}
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value as MissionStatus)}>
        {Object.values(MissionStatus).map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <button type="submit">Add Mission</button>
    </form>
  );
};

