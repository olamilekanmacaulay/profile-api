HNG Internship - Stage 0: Dynamic Profile API
This project is a simple RESTful API endpoint created for the HNG Internship Stage 0 task. It returns a JSON object containing my personal information along with a dynamic cat fact fetched from an external API.
API Endpoint
The single endpoint is available at:
 * GET /me
Example Response
{
  "status": "success",
  "user": {
    "email": "olalekan.macaulay1@gmail.com",
    "name": "Olalekan Macaulay",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T19:22:18.123Z",
  "fact": "A cat's brain is 90% similar to a human's."
}

Technologies Used
 * Backend: Node.js, Express.js
 * API Communication: Node-fetch
 * Hosting: PXXL APP
Setup and Installation
To run this project locally, follow these steps:
 * Clone the repository:
   git clone https://github.com/olamilekanmacaulay/profile-api.git
cd hng-stage0-api

 * Install dependencies:
   This project uses express. Install them using npm:
   npm install

 * Run the server:
   node server.js

   The server will start on https://olalekanm-hng0.pxxl.click.
Environment Variables
None used.

