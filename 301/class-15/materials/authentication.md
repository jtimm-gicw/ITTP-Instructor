# Authentication & Auth0 Quick Reference Guide

## What is Authentication?

**Authentication** is the process of proving who a user is.

Think of authentication like showing your driver's license at the airport. Security checks your ID to confirm you are who you claim to be.

Authentication answers one question:

> **"Who are you?"**

Examples:
- Logging into Gmail
- Logging into Canvas
- Logging into GitHub
- Clicking **Continue with Google**

---

## What is Authorization?

**Authorization** happens after authentication.

It determines what a user is allowed to access.

Authorization answers the question:

> **"What are you allowed to do?"**

Examples:

| User | Can View | Can Edit |
|------|----------|-----------|
| Jason | ✅ Own Favorites | ✅ Own Favorites |
| Sarah | ❌ Jason's Favorites | ❌ Jason's Favorites |

Authentication happens first.

Authorization happens second.

---

# What is OAuth?

OAuth (Open Authorization) is a secure way for users to sign into an application using an existing account instead of creating a new username and password.

Instead of your application handling passwords, a trusted company like Google, GitHub, Microsoft, or Auth0 handles the login.

Examples:

- Continue with Google
- Continue with GitHub
- Continue with Microsoft
- Continue with Facebook

Benefits:

- Fewer passwords to remember
- Better security
- Your application never stores the user's password

---

# What is Auth0?

Auth0 is an authentication service.

It handles:

- Login
- Logout
- User accounts
- Password security
- Multi-factor authentication
- JSON Web Tokens (JWT)

Instead of writing all of this yourself, Auth0 does the hard work.

Your application simply asks:

> "Is this user logged in?"

---

# Authentication Flow

```
User
   │
Clicks Login
   │
   ▼
React App
   │
Redirects user
   │
   ▼
Auth0
   │
User signs in
   │
   ▼
Auth0 verifies identity
   │
Returns JWT
   │
   ▼
React App
   │
Sends JWT
   │
   ▼
Express Backend
   │
Verifies JWT
   │
   ▼
MongoDB
```

---

# JSON Web Token (JWT)

A JWT (JSON Web Token) is a secure digital ID card.

After a user logs in, Auth0 gives the application a JWT.

The application sends the JWT to the backend on every protected request.

The backend verifies the JWT before allowing access.

Think of a JWT like a concert wristband.

Instead of showing your ticket every few minutes, the wristband proves you've already been verified.

---

# Auth0 React Hook

```javascript
import { useAuth0 } from "@auth0/auth0-react";
```

This hook gives your React component access to Auth0.

---

# Common Auth0 Variables

## user

```javascript
const { user } = useAuth0();
```

Contains information about the logged-in user.

Example:

```javascript
user.name
user.email
user.picture
```

Example:

```javascript
<p>{user.name}</p>
```

---

## isAuthenticated

```javascript
const { isAuthenticated } = useAuth0();
```

Returns:

- true → user is logged in
- false → user is not logged in

Example:

```javascript
{isAuthenticated && <Dashboard />}
```

---

## loginWithRedirect()

Starts the login process.

```javascript
const { loginWithRedirect } = useAuth0();
```

Example:

```javascript
<button onClick={() => loginWithRedirect()}>
  Login
</button>
```

When clicked:

1. User goes to Auth0
2. User logs in
3. User returns to your app

---

## logout()

Logs the user out.

```javascript
const { logout } = useAuth0();
```

Example:

```javascript
<button
  onClick={() =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }
>
  Logout
</button>
```

---

## getAccessTokenSilently()

Gets a JWT without asking the user to log in again.

```javascript
const { getAccessTokenSilently } = useAuth0();
```

Example:

```javascript
const token = await getAccessTokenSilently();
```

The token is attached to requests sent to the backend.

---

# Common Authentication UI

## Login Button

```javascript
<button onClick={() => loginWithRedirect()}>
  Login
</button>
```

Purpose:

Starts the login process.

---

## Logout Button

```javascript
<button
  onClick={() =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }
>
  Logout
</button>
```

Purpose:

Signs the user out.

---

## Show User Information

```javascript
<img
  src={user.picture}
  alt={user.name}
/>

<p>{user.name}</p>

<p>{user.email}</p>
```

Displays the logged-in user's information.

---

# Conditional Rendering

Show content only if the user is logged in.

Example:

```javascript
{isAuthenticated && (
  <Dashboard />
)}
```

Show content only if the user is NOT logged in.

```javascript
{!isAuthenticated && (
  <button onClick={() => loginWithRedirect()}>
    Login
  </button>
)}
```

---

# Protecting Backend Requests

Every protected request should include the JWT.

Example:

```javascript
const token = await getAccessTokenSilently();

fetch("/favorites", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

The backend checks the JWT before allowing access.

---

# Authorization Header

```javascript
Authorization: `Bearer ${token}`
```

"Bearer" tells the server:

> "I am sending an access token."

The backend reads this header and verifies it with Auth0.

---

# Backend Authentication Middleware

Example:

```javascript
app.use("/favorites", verifyUser, favoriteRoutes);
```

Flow:

```
Request
    │
    ▼
verifyUser
    │
JWT Valid?
   / \
 Yes  No
 │     │
 ▼     ▼
Routes 401 Unauthorized
```

If the JWT is valid:

```javascript
request.user
```

contains information about the logged-in user.

---

# request.user

After the JWT is verified:

```javascript
request.user.email
```

contains the user's email.

Example:

```javascript
const email = request.user.email;
```

This allows the server to return only that user's data.

---

# Frontend Environment Variables

Example:

```text
VITE_AUTH0_DOMAIN=your-domain.us.auth0.com

VITE_AUTH0_CLIENT_ID=your-client-id

VITE_AUTH0_AUDIENCE=https://weather-api-demo

VITE_SERVER_URL=http://localhost:3001
```

These variables configure the React application.

---

# Backend Environment Variables

Example:

```text
MONGO_URI=...

JWKS_URI=https://your-domain.us.auth0.com/.well-known/jwks.json
```

These variables configure the Express server.

---

# Common Authentication Vocabulary

| Term | Meaning |
|--------|---------|
| Authentication | Verifying who a user is |
| Authorization | Determining what a user can access |
| OAuth | Secure login using another account |
| Auth0 | Authentication service |
| JWT | Secure access token |
| Token | Digital proof that a user is logged in |
| User | The authenticated person's profile information |
| Login | Signs a user in |
| Logout | Signs a user out |
| Protected Route | A route that requires login |
| Middleware | Code that runs before a route handler |
| Authorization Header | Sends the JWT to the backend |
| `useAuth0()` | React hook for accessing Auth0 features |
| `user` | Logged-in user's profile |
| `isAuthenticated` | Indicates whether the user is logged in |
| `loginWithRedirect()` | Starts the Auth0 login process |
| `logout()` | Signs the user out |
| `getAccessTokenSilently()` | Retrieves a JWT without prompting the user to log in again |
| `verifyUser` | Backend middleware that validates JWTs |
| `request.user.email` | Email address extracted from the verified JWT |

---

# Remember

**Authentication** answers:

> "Who are you?"

**Authorization** answers:

> "What are you allowed to do?"

Auth0 handles authentication.

JWTs prove a user is authenticated.

The backend verifies the JWT before allowing access to protected resources.