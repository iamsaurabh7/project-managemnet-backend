
// const { auth } = require('../config/config');

// // Sign up a new user
// const signUp = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userRecord = await auth.createUser({
//       email: email,
//       password: password,
//     });
//     // 4kQ5uScBwiggo1cVd6n3L1l2btd2
//     res.status(201).json({ message: 'User signed up successfully', user: userRecord });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to sign up', error: error.message });
//   }
// };

// // Sign in an existing user
// const signIn = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userRecord = await auth.getUserByEmail(email);
//     // Firebase Admin SDK doesn't directly handle sign-in, so you'd have to verify user credentials using the Firebase Client SDK on the front end.
//     res.status(200).json({ message: 'User found', user: userRecord });
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid email or password', error: error.message });
//   }
// };

// module.exports = {
//   signUp,
//   signIn,
// };
