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

export const createNote = async (req, res) => {
    try{
        const {title, content} = req.body;
        const notes = await Notes.create({title, content});
        res.status(201).json(notes);
    }
    catch(error){
        console.log("Creating Note Error", error.message);
        console.error(error);
        res.status(500).json({message:"Error creating Note"});
    }
}