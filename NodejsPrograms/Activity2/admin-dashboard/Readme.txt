User Story 2: Validation Middleware for Student Routes
As a backend validator, I want a custom middleware to validate incoming student data, so that invalid form submissions do not reach the business logic.
Acceptance Criteria
Middleware checks if name and email fields exist in the request body.
If missing, middleware must stop execution and return a proper error response.
If valid, request flows to the route handler.
-------------------------------------------------------------
User Story 3: Using Built-in Middleware for Body Parsing
As a developer,
I want to use built-in Express middleware (express.json, express.urlencoded) so that I can correctly process JSON and form submissions.
Acceptance Criteria
Application must support POST requests from forms.
Body data should be accessible using req.body
---------------------------------------------------------
userstory1:
mkdir admin-dashboard
cd admin-dashboard
npm init -y
npm install express ejs
node server.js
Server running at http://localhost:3000
Server running at http://localhost:3000/dashboard
terminal shows:
[2026-02-05T04:20:31.123Z] GET /
[2026-02-05T04:20:35.456Z] GET /dashboard

How Thunder Client Tests It

Open VS Code → Thunder Client

Create request:

Method: GET

URL: http://localhost:3000/dashboard

Send request

Check VS Code terminal → logs appear
---------------------------------------------
userstory2:
http://localhost:3000/student
