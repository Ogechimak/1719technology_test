## ARIA Compliance Documentation

This document outlines the ARIA implementation for the accessible form.

### ARIA Attributes Used

*   `aria-describedby`: This attribute is used on the input fields (`firstName`, `lastName`, `email`, `phone`, `password`, `subject`, `message`, `terms`) and fieldsets (`comm-prefs`, `account-error`) to associate them with their corresponding help text and error message elements. This provides screen readers with additional context about the input field, specifically linking it to the error message or help text that will be displayed.
*   `aria-live`: This attribute is set to `polite` on the error message elements (e.g., `firstName-error`, `email-error`, `message-error`). This informs screen readers to announce the error messages when they appear, but without interrupting the user's current activity.
*   `role`: This attribute is set to `alert` on the error message elements (e.g., `firstName-error`, `email-error`, `message-error`). This identifies the error message elements as alerts, which are important and time-sensitive announcements that screen readers should convey to the user.
*   `aria-required`: This attribute is used on the radio group to indicate that it is a required field.
*   `aria-invalid`: This attribute is dynamically set to `true` or `false` on the input fields to indicate whether the field contains valid data.
*   `aria-label`: This attribute is used on the forms and progress bar to provide a descriptive label for screen readers.
*   `aria-valuenow`, `aria-valuemin`, `aria-valuemax`: These attributes are used on the progress bar to indicate the current progress of the form completion.

### Semantic Elements Used

*   `<form>`: This element is used to define the forms.
*   `<label>`: This element is used to provide a text label for each form control.
*   `<input>`: This element is used to create various input fields (text, email, tel, password, checkbox, radio).
*   `<select>`: This element is used to create a dropdown list of options.
*   `<textarea>`: This element is used to create a multiline text input field.
*   `<button>`: This element is used to create submit buttons.
*   `<fieldset>`: This element is used to group related form controls.
*   `<legend>`: This element is used to provide a title for the fieldset.

### Screen Reader Support

The form is designed to be compatible with popular screen readers such as NVDA, JAWS, and VoiceOver. The ARIA attributes and semantic elements used in the form provide screen readers with the information they need to accurately convey the form's structure and content to users with disabilities. The JavaScript code dynamically updates the ARIA attributes and error messages to provide real-time feedback to screen reader users.