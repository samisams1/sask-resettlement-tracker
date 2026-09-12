// src/hooks/useMilestones.js
import { useState, useEffect } from 'react';
import { milestoneService } from '../services/api';

export function useMilestones() {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Automatically fetch data when the hook is used
  useEffect(() => {
    milestoneService.getAll()
      .then((data) => {
        setMilestones(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 2. Wrap the creation action
  const addMilestone = async (name) => {
    const newItem = await milestoneService.create(name);
    setMilestones((prev) => [...prev, newItem]);
    return newItem;
  };

  // 3. Wrap the deletion action
  const removeMilestone = async (id) => {
    await milestoneService.delete(id);
    setMilestones((prev) => prev.filter(item => item.id !== id));
  };

  // Return the data states and the actions back to the UI component
  return { milestones, loading, error, addMilestone, removeMilestone };
}
