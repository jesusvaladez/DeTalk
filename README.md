# DeConenct Login and Account Creation Page

## **Overview**

The DeConnect Login and Account Creation Page provides users with a streamlined authentication experience. Users can either sign in with their existing credentials or create a new account via a dedicated registration page.

## **Features**

### **Login Page**

- Users can log in using their email or username along with their password.
- "Remember Me" checkbox for session persistence.
- "Forgot Password?" link (currently non-functional, can be expanded for password recovery).
- Redirects to `home.html` upon successful authentication.
- Basic client-side validation for input fields.

### **Account Creation Page**

Users must provide:
- First and last name
- Email address
- Username
- Password and repeated confirmation
- College selection from a dropdown menu

- Password must be at least 6 characters long and contain at least one special character.
- Ensures passwords match before submission.
- Saves user credentials locally in the browser (`localStorage`) for authentication purposes.
- Redirects to the login page upon successful registration.

## **Technologies Used**

- **HTML**: Structure of the login and registration pages.
- **CSS**: Custom styling with Google Fonts integration.
- **JavaScript**: Handles form validation, localStorage authentication, and redirections.

## **File Structure**

- `index.html` - Login page
- `create-account.html` - Registration page
- `styles.css` - Page styling
- `script.js` - Form validation and authentication logic
- `depaul-logo.png` - Logo image used on both pages

## **How It Works**

### **Login Process:**

1. User enters credentials.
2. Validates against stored user data in `localStorage`.
3. If credentials match, redirects to `home.html`; else, an error is shown.

### **Account Creation:**

1. User fills out the form with required details.
2. Basic validation checks are performed.
3. Data is stored in `localStorage`.
4. On successful registration, the user is redirected to `index.html` for login.

## **License**

This project is owned by DeConnect and all rights are reserved for 2025.
