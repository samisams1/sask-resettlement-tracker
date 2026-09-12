// src/services/api.js
import { API_BASE_URL } from '../config'; // 🚀 Import the master constant link

export const milestoneService = {
  // GET: Fetch all records
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/milestones`);
    if (!response.ok) throw new Error("Failed to fetch milestones array from network layer.");
    return await response.json();
  },

  // POST: Create a record
  create: async (milestoneName) => {
    const response = await fetch(`${API_BASE_URL}/milestones`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: milestoneName })
    });
    if (!response.ok) throw new Error("Failed to persist milestone object down to storage.");
    return await response.json();
  },

  // DELETE: Remove a record by ID token
  delete: async (idToDelete) => {
    const response = await fetch(`${API_BASE_URL}/milestones/${idToDelete}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error("Failed to prune milestone row inside backend database.");
    return await response.json();
  }
};
