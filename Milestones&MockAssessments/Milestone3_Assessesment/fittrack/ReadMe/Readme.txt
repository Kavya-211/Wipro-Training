Setup Instructions:
Create Project Folder
mkdir fittrack
cd fittrack
------------------------
Setup Backend:
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv express-validator
npm install --save-dev nodemon mocha supertest chai
run-->node server.js
Backend runs at:
http://localhost:5000
----------------------------------
Setup Frontend
Go back to root folder:
cd ..
npx create-react-app frontend
cd frontend
npm install
Run frontend:-->npm start
Frontend runs at:
http://localhost:3000
-------------------------------------
Database Setup
Start MongoDB locally.
Connection used:mongodb://127.0.0.1:27017/fittrack
Create these collections:
- programs
- users
- enrollments
Insert sample programs and users from dataset.
---------------------------------------
List of APIs:
Create Program
POST /api/programs
samplebody:
{
"programId": "FTP006",
"name": "Athletic Conditioning",
"category": "Sports Training",
"level": "Advanced",
"price": 3499
}

 Get All Programs:
 GET /api/programs

Enroll in Program:
POST /api/enroll

Sample Body:
{
"userId": "USR101",
"programId": "FTP003"
}



