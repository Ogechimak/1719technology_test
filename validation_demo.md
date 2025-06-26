## Validation and Error Handling Demo

This document demonstrates the validation and error handling features of the accessible form.

### Validation

The form includes client-side validation using JavaScript to ensure that users enter valid data. The following validations are performed:

*   **First Name:** The first name field is required.
*   **Last Name:** The last name field is required.
*   **Email:** The email field is required and must contain the `@` symbol.
*   **Phone:** The phone number field is optional but must be a valid phone number if entered.
*   **Password:** The password field is required and must be at least 8 characters long and contain uppercase, lowercase, and numbers.
*   **Account Type:** The account type field (radio group) is required and must have one option selected.
*   **Terms of Service:** The terms of service checkbox must be checked.
*   **Subject:** The subject field must have a value selected.
*   **Message:** The message field is required.

### Error Handling

If a user enters invalid data, an error message is displayed next to the corresponding input field. The error messages are displayed using the `aria-live` and `role` attributes, which ensure that screen readers announce the error messages to users with disabilities. The error messages are dynamically updated using JavaScript.

### Demo Instructions

1.  Open the `index.html` file in a web browser.
2.  Enter invalid data into one or more of the input fields in either the User Registration Form or the Contact Us Form.
3.  Click the "Create Account" or "Send Message" button.
4.  Observe the error messages that are displayed next to the invalid input fields.
5.  Observe the progress bar in the User Registration Form as you fill out the required fields.