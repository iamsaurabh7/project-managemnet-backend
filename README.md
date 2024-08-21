# Project Management API

## Overview

This project is a **Project Management API** built using Node.js, Express, and Firebase. It provides functionality for managing projects, including creating, updating, and retrieving project details, as well as managing tasks. The API is protected using Firebase Authentication and deployed on AWS.

## Features

- **User Authentication**: Secure user authentication using Firebase Authentication.
- **Project Management**: Create, read, update, and delete projects.
- **Task Management**: Add tasks to projects.
- **Protected Routes**: Middleware to ensure that routes are protected and only accessible to authenticated users.

## Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to build RESTful APIs.
- **Firebase**: Cloud-based platform for authentication and database services.
- **AWS**: Cloud service provider where the application is deployed.

## Setup and Configuration

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file to include your Firebase configuration and any other required settings.

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Projects

- **GET /api/projects**

  - Fetch all projects.
  - Protected route (requires authentication).

- **GET /api/projects/:id**

  - Fetch a specific project by ID.
  - Protected route (requires authentication).

- **POST /api/projects**

  - Create a new project.
  - Protected route (requires authentication).

- **PUT /api/projects/:id**

  - Update details of a specific project by ID.
  - Protected route (requires authentication).

- **POST /api/projects/:id/tasks**
  - Add a new task to a specific project by ID.
  - Protected route (requires authentication).

## Authentication Middleware

Routes are protected by the `authMiddleware` which verifies Firebase Authentication tokens. Ensure that requests to protected routes include a valid authentication token in the `Authorization` header.

## Deployment

The application is deployed on AWS. For deployment details, refer to the [AWS documentation](https://aws.amazon.com/documentation/).

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your changes adhere to the project's coding standards and include appropriate tests.

## Contact

For any questions or issues, please contact:

- **Email**: [your-email@example.com](mailto:iamsaurabhverma7@gmail.com)
- **GitHub**: [your-github-profile](https://github.com/iamsaurabh7)

---

Happy coding!

```

```
