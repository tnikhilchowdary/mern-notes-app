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

export const updateNote = async (req, res) => {
    try{
        const {title, content} = req.body;
        const updated = await Notes.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {new: true}
        );
        if(!updated) return res.status(404).json({message:"Note Not Found"});
        res.json(updated);
    }
    catch(error){
        res.status(500).json({message:"Error Deleting Node"});
    }
}

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    res.json({ message: "Note deleted successfully", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Note", error });
  }
};
