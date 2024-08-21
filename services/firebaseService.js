const { auth, db } = require("../config/config");
const admin = require("firebase-admin");

// Function to verify Firebase ID token
const verifyToken = async (token) => {
  try {
    const user = await auth.verifyIdToken(token);
    return user;
  } catch (error) {
    throw new Error("Authentication Failed");
  }
};

// Firestore operations for projects
const getProjects = async () => {
  const snapshot = await db.collection("projects").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getProjectById = async (projectId) => {
  const doc = await db.collection("projects").doc(projectId).get();
  if (!doc.exists) {
    throw new Error("Project not found");
  }
  return { id: doc.id, ...doc.data() };
};

const createProject = async (data) => {
  const res = await db.collection("projects").add(data);
  return { id: res.id, ...data };
};

const updateProject = async (projectId, data) => {
  await db.collection("projects").doc(projectId).update(data);
  return { id: projectId, ...data };
};

const addTaskToProject = async (projectId, task) => {
  try {
    const projectRef = db.collection("projects").doc(projectId);

    await projectRef.update({
      tasks: admin.firestore.FieldValue.arrayUnion(task),
    });
    return await getProjectById(projectId);
  } catch (error) {
    console.error("Error adding task to project:", error);
    throw error;
  }
};

module.exports = {
  verifyToken,
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  addTaskToProject,
};
