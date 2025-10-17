HNG Internship - Stage 0: Dynamic Profile API
This project is a simple RESTful API endpoint created for the HNG Internship Stage 0 task. It returns a JSON object containing my personal information along with a dynamic cat fact fetched from an external API.
API Endpoint
The single endpoint is available at:
 * GET /me
Example Response
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T19:22:18.123Z",
  "fact": "A cat's brain is 90% similar to a human's."
}

Technologies Used
 * Backend: Node.js, Express.js
 * API Communication: Axios
 * Hosting: [Mention your hosting platform, e.g., Railway, Heroku]
Setup and Installation
To run this project locally, follow these steps:
 * Clone the repository:
   git clone [https://github.com/your-username/hng-stage0-api.git](https://github.com/your-username/hng-stage0-api.git)
cd hng-stage0-api

 * Install dependencies:
   This project uses express and axios. Install them using npm:
   npm install

 * Run the server:
   node server.js

   The server will start on http://localhost:3000.
Environment Variables
This project does not require any environment variables.

