const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  addTaskToProject,
} = require("../services/firebaseService");

const fetchAllProjects = async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await getProjectById(id);
    res.json(project);
  } catch (error) {
    res.status(404).json({ message: "Project not found" });
  }
};

const createNewProject = async (req, res) => {
  const { name, description, status } = req.body;
  const userId = req.user.uid; 
  try {
    const projectData = {
      name,
      description,
      status,
      createdBy: userId, // Attach user ID 
      createdAt: new Date().toISOString(),
    };

    const newProject = await createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const { name, description, status } = req.body;
// const userId = req.user.uid; // Extract the user ID from the authMiddleware

// try {
//   const newProject = {
//     name,
//     description,
//     status,
//     createdBy: userId, // Attach the user ID here
//     createdAt: new Date().toISOString(),
//   };

//   const projectRef = await db.collection("projects").add(newProject);

//   res.status(201).json({
//     message: "Project created successfully",
//     projectId: projectRef.id,
//   });
// } catch (error) {
//   res.status(500).json({ message: "Failed to create project", error });
// }

const updateProjectDetails = async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  try {
    const updatedProject = await updateProject(id, {
      name,
      description,
      status,
    });
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const updatedProject = await addTaskToProject(id, task);
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchAllProjects,
  fetchProjectById,
  createNewProject,
  updateProjectDetails,
  addTask,
};
