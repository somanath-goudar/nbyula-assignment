
# Nbyula Appointment Scheduler

Hi Team, Here is the completed assignment 1 where I have built an appointment scheduler where terraformers can schedule appointments with other terraformers. Below I have provided detailed information about how i planned and built this project.


## 🔗 Link to Live Demo
Hosted on vercel

[![portfolio](https://img.shields.io/badge/Live_Demo-000?style=for-the-badge)](https://nbyula-assignment-appointment.vercel.app/)



## Tech Stack

**Client:** Next JS 13, ReactJS

**Authentication:** next-auth

**Databse:** Mongodb

**Key takeways:**
- I choose next js because its the new trending technology. 
- Even though next js 13 is still in beta mode, I was able to build this application. 
- Most liked thing about next js is folder based routing.


## Estimations Done Prior to Development

- Understanding Requirements : **2 Hours**
- Planning, Research on chossing Techstack : **4 Hours**
- Implementing user login and registration : **6 Hours**
- Adding authentication using next-auth : **4 Hours**
- Creating api endpoints for login, signup, getting users, booking appointment, get single user : **8 Hours**
- Creating Dashboard and booking page : **6 Hours**
- Code Cleanup : **2 Hours**
- Deployment : **2 Hours**

Total Development Time: **35 Hours**


## Screenshots
- Login Screen
![App Screenshot](https://i.ibb.co/3NH6W5t/login-screen.png)

- Register Screen
![App Screenshot](https://i.ibb.co/ZXxz3KR/register-screen.png)

- Dashboard Page
<br/>
![App Screenshot](https://i.ibb.co/zfqxd9y/dashboard-screen.png)

- Appointmet Booking Page
![App Screenshot](https://i.ibb.co/6JvXBp2/Screenshot-2023-04-23-at-10-05-56-PM.png)
## API Reference

#### Register an user

```http
  POST /api/register
```

| Parameter | Type     |
| :-------- | :------- |
| `name` | `string` | 
| `email` | `string` | 
| `password` | `string` | 

#### Get all users

```http
  GET /api/users
```

#### Get single user

```http
  GET /api/user/id
```

| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` | 

#### Add an appointment

```http
  POST /api/addAppointment
```

| Parameter | Type     |
| :-------- | :------- |
| `data` | `object` | 



## Lessons Learned

- Learned to use next js documentation to its fullest.
- As next js 13 is still in beta mode, its not stable. Faced a lots of issues.
- Explored npm packages to make the development easier.
- Understanding the requirement is highest priority.
- Was unable to implement all the requirements due to time constraints.
- Breaking the requirements into small tasks helped.


## Installation

Install this with npm

```bash
  clone this repo
  cd into the folder
  npm install
  npm run dev
```
    
## Feedback

If you have any feedback, please reach out to me at somugowda8050@gmail.com

