# REST API Fundamentals

## Introduction

REST stands for **Representational State Transfer**.

REST is a common architectural style used for communication between applications over the internet. Most modern web applications use REST APIs to allow the frontend and backend to exchange information.

A REST API uses standard HTTP methods to perform actions such as retrieving, creating, updating, and deleting data.

---

## Why We Use REST

REST provides a simple and organized way for different systems to communicate.

Developers use REST because it:

- Uses standard web technologies
- Works across many programming languages
- Separates frontend and backend responsibilities
- Makes applications easier to scale
- Creates predictable communication patterns

For example, a React frontend can send requests to a Node.js backend using REST APIs.

---

## How REST Works

A client sends an HTTP request to a server.

The server processes the request and sends back a response.

### Example Flow

1. A user opens a weather app
2. The frontend sends a request to a weather API
3. The server retrieves weather data
4. The server sends the data back to the frontend
5. The frontend displays the weather information

---

## Common HTTP Methods

REST APIs commonly use the following HTTP methods:

| Method | Purpose |
| --- | --- |
| GET | Retrieve data |
| POST | Create new data |
| PUT | Replace existing data |
| PATCH | Update part of existing data |
| DELETE | Remove data |

---

## GET Method

The `GET` method retrieves data from a server.

Think of it as:

> "Please send me information."

### GET Request Example

```http
GET /users
```

### Example Response

```json
[
  {
    "id": 1,
    "name": "Jason"
  },
  {
    "id": 2,
    "name": "Sarah"
  }
]
```

### Common Uses for GET

- Loading webpage data
- Retrieving users from a database
- Fetching weather information
- Displaying products in an online store

---

## POST Method

The `POST` method creates new data on the server.

Think of it as:

> "Please create something new."

### POST Request Example

```http
POST /users
```

### POST: Data Sent to the Server

```json
{
  "name": "Jason"
}
```

### POST: Example Response

```json
{
  "id": 3,
  "name": "Jason"
}
```

### Common Uses for POST

- Creating user accounts
- Submitting forms
- Adding comments
- Creating blog posts

---

## PUT Method

The `PUT` method completely replaces existing data.

Think of it as:

> "Replace the old version with this new version."

### PUT Request Example

```http
PUT /users/3
```

### PUT: Data Sent to the Server

```json
{
  "name": "Jason Timm"
}
```

### Common Uses for PUT

- Replacing a full user profile
- Updating an entire object
- Overwriting existing data

---

## PATCH Method

The `PATCH` method updates only part of existing data.

Think of it as:

> "Only update this specific piece of information."

### PATCH Request Example

```http
PATCH /users/3
```

### PATCH: Data Sent to the Server

```json
{
  "name": "JT"
}
```

### Common Uses for PATCH

- Updating a username
- Editing a single field
- Changing settings without replacing all data

---

## DELETE Method

The `DELETE` method removes data from a server.

Think of it as:

> "Please remove this item."

### DELETE Request Example

```http
DELETE /users/3
```

### Common Uses for DELETE

- Removing users
- Deleting comments
- Removing products
- Deleting tasks from a todo app

---

## REST API Example in React

React applications commonly use REST APIs with `fetch()`.

### Example Using fetch()

```javascript
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));
```

### What Happens in This Example

1. The frontend sends a GET request
2. The server returns JSON data
3. The React app displays or uses the data

---

## Understanding JSON

REST APIs commonly send data in JSON format.

JSON stands for:

## **JavaScript Object Notation**

### Example JSON

```json
{
  "name": "Jason",
  "role": "Instructor"
}
```

JSON is easy for both humans and computers to read.

---

## REST API Cheat Sheet

| Method | Action |
| --- | --- |
| GET | Retrieve data |
| POST | Create data |
| PUT | Replace data |
| PATCH | Partially update data |
| DELETE | Remove data |

---

## Key Takeaways

- REST is a standard way for applications to communicate
- REST APIs use HTTP methods to perform actions
- Frontend and backend applications commonly use REST together
- JSON is commonly used for sending data
- Each HTTP method has a specific purpose

REST APIs are one of the foundational technologies used in modern web development.
