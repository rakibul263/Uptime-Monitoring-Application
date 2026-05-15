# Uptime Monitoring Application

A RESTful API based uptime monitoring system built completely with Raw Node.js (without Express.js or any backend framework).

---

# Project Overview

This project allows users to monitor websites or APIs and receive SMS notifications whenever a monitored website goes UP or DOWN.

The application is designed using:

- Raw Node.js
- RESTful API Architecture
- File-based database system
- Background workers
- Token authentication
- Twilio SMS notifications

This project is focused on learning backend fundamentals deeply without relying on frameworks.

---

# Features

## Authentication System

- User Registration
- User Login
- User Logout
- Token Authentication
- Token Expiration
- Protected Routes

---

## User Management

Users can:

- Create account
- Update profile
- Delete account
- Change password
- Update phone number

---

## URL Monitoring System

Users can:

- Add URLs for monitoring
- Update monitoring settings
- Delete monitoring checks
- Enable/Disable monitoring

Each monitoring check supports:

- HTTP / HTTPS protocols
- GET / POST / PUT / DELETE methods
- Success status codes
- Timeout configuration

---

## Uptime Monitoring

The system periodically:

- Sends HTTP/HTTPS requests
- Detects UP/DOWN state
- Tracks response status
- Detects timeout or network failure
- Stores monitoring history

---

## SMS Notifications

Whenever website status changes:

- UP → DOWN
- DOWN → UP

The system sends SMS alerts using Twilio API.

Example:

```txt
Alert: Your site https://example.com is currently DOWN
```

---

# Tech Stack

| Technology       | Purpose           |
| ---------------- | ----------------- |
| Node.js          | Backend Runtime   |
| HTTP Module      | REST API Server   |
| HTTPS Module     | URL Monitoring    |
| File System (fs) | Database          |
| Crypto Module    | Password Hashing  |
| Twilio API       | SMS Notifications |

---

# Project Structure

```txt
Uptime-Monitoring-Application/
│
├── index.js
├── package.json
├── .gitignore
├── README.md
│
├── config/
│   └── config.js
│
├── handlers/
│   ├── usersHandler.js
│   ├── tokenHandler.js
│   ├── checksHandler.js
│   └── notFoundHandler.js
│
├── helpers/
│   ├── utilities.js
│   ├── environments.js
│   ├── notifications.js
│   └── handlers.js
│
├── lib/
│   ├── data.js
│   ├── workers.js
│   └── checks.js
│
├── routes/
│   └── routes.js
│
├── data/
│   ├── users/
│   ├── tokens/
│   └── checks/
│
└── logs/
```

---

# API Endpoints

# Users API

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | /users   | Create User |
| GET    | /users   | Get User    |
| PUT    | /users   | Update User |
| DELETE | /users   | Delete User |

---

# Tokens API

| Method | Endpoint | Description  |
| ------ | -------- | ------------ |
| POST   | /tokens  | Login        |
| GET    | /tokens  | Verify Token |
| PUT    | /tokens  | Extend Token |
| DELETE | /tokens  | Logout       |

---

# Checks API

| Method | Endpoint | Description  |
| ------ | -------- | ------------ |
| POST   | /checks  | Create Check |
| GET    | /checks  | Get Check    |
| PUT    | /checks  | Update Check |
| DELETE | /checks  | Delete Check |

---

# User Data Structure

```json
{
  "firstName": "Rakibul",
  "lastName": "Hasan",
  "phone": "017XXXXXXXX",
  "password": "hashedPassword",
  "tosAgreement": true
}
```

---

# Token Data Structure

```json
{
  "phone": "017XXXXXXXX",
  "id": "tokenId",
  "expires": 1719999999999
}
```

---

# Monitoring Check Structure

```json
{
  "id": "checkId",
  "userPhone": "017XXXXXXXX",
  "protocol": "https",
  "url": "google.com",
  "method": "get",
  "successCodes": [200, 201],
  "timeoutSeconds": 5,
  "state": "up",
  "lastChecked": 1719999999999
}
```

---

# Authentication Flow

```txt
User Registration
        ↓
User Login
        ↓
Token Generated
        ↓
Protected Route Access
        ↓
Token Expiration
        ↓
Logout
```

---

# Monitoring Workflow

```txt
Create Monitoring Check
          ↓
Worker Process Starts
          ↓
Send HTTP/HTTPS Request
          ↓
Detect Status
          ↓
Compare Previous State
          ↓
If State Changes
          ↓
Send SMS Notification
```

---

# Twilio Integration

Install Twilio:

```bash
npm install twilio
```

Example:

```js
const twilio = require("twilio");

const client = twilio(accountSid, authToken);

client.messages.create({
  body: "Your website is DOWN",
  from: "+1XXXXXXXXXX",
  to: "+8801XXXXXXXXX",
});
```

---

# Password Hashing

```js
const crypto = require("crypto");

const hash = crypto.createHmac("sha256", secret).update(password).digest("hex");
```

---

# Database Strategy

This project uses a File-Based Database.

Each:

- User
- Token
- Check

is stored as a separate JSON file.

Database folders:

```txt
/data/users
/data/tokens
/data/checks
```

---

# Environment Configuration

```js
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
  hashingSecret: "yourSecret",
};
```

---

# Installation

Clone repository:

```bash
git clone https://github.com/your-username/Uptime-Monitoring-Application.git
```

Move into project:

```bash
cd Uptime-Monitoring-Application
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
node index.js
```

Development mode:

```bash
npm run dev
```

---

# Recommended Scripts

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

# Recommended Packages

| Package | Purpose               |
| ------- | --------------------- |
| twilio  | SMS Notifications     |
| uuid    | Unique IDs            |
| dotenv  | Environment Variables |
| nodemon | Development Server    |

---

# Security Features

- Password Hashing
- Token Authentication
- Route Protection
- Input Validation
- Token Expiration
- Secure API Design

---

# Future Improvements

- Email Notifications
- MongoDB Integration
- Redis Queue System
- Frontend Dashboard
- Docker Support
- Kubernetes Deployment
- SSL Monitoring
- Analytics Dashboard
- Real-time Monitoring UI

---

# Learning Goals

This project helps learn:

- Raw Node.js
- REST API Development
- Authentication System
- File System Database
- Background Workers
- Backend Architecture
- Monitoring Systems
- API Security
- Production-level Backend Concepts

---

# .gitignore

```txt
node_modules
.env
.DS_Store
```

---

# License

MIT License

---

# Author

MD Rakibul Hasan

Programmer & Full Stack Developer
