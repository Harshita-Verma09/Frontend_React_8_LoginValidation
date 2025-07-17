# React Signup & Login Form

A simple authentication form built with **React** that supports both Sign Up and Login functionality.  
User data is stored in `localStorage` for demonstration purposes. The form includes validation for email and password strength, and toggles between login and signup modes.

---

## Features

- Toggle between Sign Up and Login forms
- Form validation:
  - Email format check
  - Password strength (min 8 chars, uppercase, lowercase, number, special character)
  - Password match check (on signup)
- Stores user data in `localStorage`
- Error messages for invalid input or login failure
- Responsive and modern UI using Tailwind CSS

---

## How to Run

1. **Clone or Download the Repository**
   ```sh
   git clone https://github.com/your-username/react-signup-login-form.git
   cd react-signup-login-form
   ```

 2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the App**
   ```sh
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

---

## Customization

- **Styling:**  
  Edit Tailwind CSS classes or add your own styles for a custom look.
- **Validation:**  
  Adjust validation logic in the `validateForm` function as needed.
- **Persistence:**  
  For production, replace `localStorage` with a secure backend.

---
