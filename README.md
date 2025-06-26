# Accessible Web Forms Demo

This project demonstrates how to create accessible web forms using proper ARIA roles and attributes.

## Project Structure

*   `index.html`: The main HTML file containing the form structure and content.
*   `style.css`: The CSS file containing the styles for the form.
*   `script.js`: The JavaScript file containing the form validation and accessibility enhancements.
*   `aria_compliance.md`: Documentation outlining the ARIA implementation for the accessible form.
*   `validation_demo.md`: Documentation demonstrating the validation and error handling features of the accessible form.
*   `README.md`: This file, providing an overview of the project and instructions for usage.

## Usage

1.  Open the `index.html` file in a web browser.
2.  Interact with the forms, filling out the input fields and submitting the forms.
3.  Observe the validation and error handling features, and the ARIA attributes that enhance accessibility for screen readers.

## ARIA Compliance

The forms in this project are designed to be accessible to users with disabilities, using proper ARIA roles and attributes to provide screen readers with the information they need to accurately convey the form's structure and content.

## Validation and Error Handling

The forms include client-side validation using JavaScript to ensure that users enter valid data. Error messages are displayed next to the corresponding input fields, and are announced to screen readers using the `aria-live` and `role` attributes.