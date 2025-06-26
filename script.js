// Form validation and accessibility enhancements
        class AccessibleForm {
            constructor(formId) {
                this.form = document.getElementById(formId);
                this.fields = {};
                this.setupValidation();
                this.setupProgressTracking();
            }

            setupValidation() {
                const requiredFields = this.form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    this.fields[field.name] = {
                        element: field,
                        errorElement: document.getElementById(`${field.id}-error`),
                        isValid: false
                    };

                    // Real-time validation
                    field.addEventListener('blur', () => this.validateField(field));
                    field.addEventListener('input', () => this.clearError(field));
                });

                this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            }

            setupProgressTracking() {
                if (this.form.id === 'registrationForm') {
                    const progressBar = document.querySelector('.progress-fill');
                    const progressBarContainer = document.querySelector('.progress-bar');
                    
                    this.form.addEventListener('input', () => {
                        const totalFields = Object.keys(this.fields).length;
                        const validFields = Object.values(this.fields).filter(field => field.isValid).length;
                        const progress = Math.round((validFields / totalFields) * 100);
                        
                        progressBar.style.width = `${progress}%`;
                        progressBarContainer.setAttribute('aria-valuenow', progress);
                    });
                }
            }

            validateField(field) {
                const fieldData = this.fields[field.name];
                if (!fieldData) return true;

                let isValid = true;
                let errorMessage = '';

                // Required field validation
                if (field.hasAttribute('required') && !field.value.trim()) {
                    isValid = false;
                    errorMessage = `${this.getFieldLabel(field)} is required.`;
                }

                // Specific field validations
                if (field.value.trim()) {
                    switch (field.type) {
                        case 'email':
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(field.value)) {
                                isValid = false;
                                errorMessage = 'Please enter a valid email address.';
                            }
                            break;

                        case 'tel':
                            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                            if (field.value && !phoneRegex.test(field.value.replace(/[\s\-\(\)]/g, ''))) {
                                isValid = false;
                                errorMessage = 'Please enter a valid phone number.';
                            }
                            break;

                        case 'password':
                            if (field.value.length < 8) {
                                isValid = false;
                                errorMessage = 'Password must be at least 8 characters long.';
                            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(field.value)) {
                                isValid = false;
                                errorMessage = 'Password must contain uppercase, lowercase, and numbers.';
                            }
                            break;
                    }
                }

                // Radio group validation
                if (field.type === 'radio' && field.hasAttribute('required')) {
                    const radioGroup = this.form.querySelectorAll(`input[name="${field.name}"]`);
                    const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                    if (!isChecked) {
                        isValid = false;
                        errorMessage = 'Please select an option.';
                    }
                }

                // Checkbox validation for terms
                if (field.type === 'checkbox' && field.name === 'terms' && !field.checked) {
                    isValid = false;
                    errorMessage = 'You must agree to the terms to continue.';
                }

                // Update field state
                fieldData.isValid = isValid;
                this.updateFieldAppearance(field, isValid, errorMessage);

                return isValid;
            }

            validateForm() {
                let isFormValid = true;
                
                Object.values(this.fields).forEach(fieldData => {
                    const fieldValid = this.validateField(fieldData.element);
                    if (!fieldValid) isFormValid = false;
                });

                return isFormValid;
            }

            updateFieldAppearance(field, isValid, errorMessage) {
                const fieldData = this.fields[field.name];
                
                if (isValid) {
                    field.classList.remove('error');
                    field.classList.add('success');
                    field.setAttribute('aria-invalid', 'false');
                    if (fieldData.errorElement) {
                        fieldData.errorElement.textContent = '';
                    }
                } else {
                    field.classList.remove('success');
                    field.classList.add('error');
                    field.setAttribute('aria-invalid', 'true');
                    if (fieldData.errorElement) {
                        fieldData.errorElement.innerHTML = `<span class="error-icon">⚠</span>${errorMessage}`;
                    }
                }
            }

            clearError(field) {
                field.classList.remove('error');
                field.setAttribute('aria-invalid', 'false');
                const fieldData = this.fields[field.name];
                if (fieldData && fieldData.errorElement) {
                    fieldData.errorElement.textContent = '';
                }
            }

            getFieldLabel(field) {
                const label = this.form.querySelector(`label[for="${field.id}"]`);
                return label ? label.textContent.replace(' *', '') : field.name;
            }

            handleSubmit(e) {
                e.preventDefault();
                
                const submitBtn = this.form.querySelector('button[type="submit"]');
                const submitStatus = document.getElementById('submit-status');
                
                // Update button state
                submitBtn.disabled = true;
                if (submitStatus) {
                    submitStatus.textContent = 'Validating form...';
                }

                if (this.validateForm()) {
                    // Simulate form submission
                    setTimeout(() => {
                        const successMessage = document.getElementById('success-message');
                        if (successMessage) {
                            successMessage.style.display = 'block';
                            successMessage.focus();
                        }
                        
                        if (submitStatus) {
                            submitStatus.textContent = 'Form submitted successfully';
                        }
                        
                        // Reset form
                        this.form.reset();
                        this.form.querySelectorAll('.success, .error').forEach(el => {
                            el.classList.remove('success', 'error');
                        });
                        
                        submitBtn.disabled = false;
                    }, 1500);
                } else {
                    // Focus on first error field
                    const firstErrorField = this.form.querySelector('.error');
                    if (firstErrorField) {
                        firstErrorField.focus();
                    }
                    
                    submitBtn.disabled = false;
                    if (submitStatus) {
                        submitStatus.textContent = 'Please fix errors and try again';
                    }
                }
            }
        }

        // Character counter for textarea
        function setupCharacterCounter() {
            const messageField = document.getElementById('message');
            const charCount = document.getElementById('char-count');
            
            if (messageField && charCount) {
                messageField.addEventListener('input', () => {
                    const count = messageField.value.length;
                    charCount.textContent = count;
                    
                    if (count > 450) {
                        charCount.style.color = '#e74c3c';
                    } else if (count > 400) {
                        charCount.style.color = '#f39c12';
                    } else {
                        charCount.style.color = '#666';
                    }
                });
            }
        }

        // Initialize forms when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new AccessibleForm('registrationForm');
            new AccessibleForm('contactForm');
            setupCharacterCounter();
        });