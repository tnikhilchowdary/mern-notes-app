import Notes from "../models/Notes.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find({});
    return res.json(notes); 
  } catch (error) {
    console.log("Error Fetching Notes:", error);
    return res.status(500).json({ message: "Error Fetching Notes" });
  }
};
