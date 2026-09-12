// data/mockDb.js

// 1. Milestones baseline dataset
let milestones = [
  { id: 1, name: "IELTS Academic Exam", status: "Pending" },
  { id: 2, name: "WES Credential Assessment", status: "Pending" },
  { id: 3, name: "Saskatchewan Expression of Interest", status: "Pending" }
];
// 2. Habits baseline dataset
let habits = [
  { id: 1, name: "English Technical Reading", streak: 5 },
  { id: 2, name: "LeetCode Algorithmic Coding", streak: 3 },
  { id: 3, name: "Sobriety & Mental Health Focus", streak: 20 }
];
// 3. 🎯 Centralized IELTS Spelling Dictionary baseline dataset on the server
let spellingDictionary = [
  { id: 1, word: "authentication", sentence: "The app utilizes token authentication." },
  { id: 2, word: "saskatchewan", sentence: "I am relocating to Saskatchewan, Canada." },
  { id: 3, word: "postponement", sentence: "I request a postponement of my course start date." },
  { id: 4, word: "resilient", sentence: "A software engineer must be resilient when debugging." }
];
const getMilestones = () => milestones;
const getHabits = () =>habits;

const addMilestone = (newMilestone)=> {
    milestones = [...milestones,newMilestone];
    return newMilestone;
}
const  deleteMilestone = (targetId)=>{
    milestones= milestones.fill((item => item.id !== targetId));
}
const incrementHabitStreak=(targetId)=>{
    habits = habits.map((habit) => 
        habit.id === targetId
          ? { ...habit, streak: habit.streak + 1 } 
          : habit
      );
}
const getDictionary = () => spellingDictionary;
module.exports = {
    getMilestones,
    getHabits,
    addMilestone,
    deleteMilestone,
    incrementHabitStreak,
    getDictionary
}