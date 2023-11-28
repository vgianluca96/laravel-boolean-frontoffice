<template>
    <div style="background-color: #1e0904;" class="text-light">
        <div class="p-5 mb-4 text-light">
            <div class="container py-5 text-center">
                <h1 style="color: darkorange;" class="display-5 fw-bold">Fancy a table?</h1>
                <p class="fs-4 py-4">Reserve a spot</p>
                <button class="btn btn_card btn-lg" type="button">
                    Tell us everything
                </button>
            </div>
        </div>

        <div class="container text-light">
            <form @submit.prevent="submitForm" class="py-5">
                <!-- Name field with validation -->
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="formData.name" type="text" name="name" id="name" class="form-control"
                        placeholder="Your name here" aria-describedby="nameHelper"
                        style="background-color: rgb(110, 73, 67); border: 0;" />
                    <small v-if="!isValidName" class="text-danger">Please enter your name</small>
                </div>

                <!-- Phone field with validation -->
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input v-model="formData.phone" type="tel" name="phone" id="phone" class="form-control"
                        placeholder="Your phone number" aria-describedby="phoneHelper"
                        style="background-color: rgb(110, 73, 67); border: 0;" />
                    <small v-if="!isValidPhone" class="text-danger">Please enter a valid phone number</small>
                </div>

                <!-- Email field with validation -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="formData.email" type="text" name="email" id="email" class="form-control"
                        placeholder="Your email here" aria-describedby="emailHelper"
                        style="background-color: rgb(110, 73, 67); border: 0;" />
                    <small v-if="!isValidEmail" class="text-danger">Please enter a valid email address</small>
                </div>

                <!-- Message field -->
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea v-model="formData.message" class="form-control" name="message" id="message" rows="3"
                        placeholder="Your message here..."
                        style="background-color: rgb(110, 73, 67); border: 0; color: white;"></textarea>
                </div>

                <!-- Other form fields go here -->

                <button type="submit" class="btn btn_card" :disabled="!isFormValid">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactsView',
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                email: '',
                message: '',
                // Add other form fields here
            },
        };
    },
    computed: {
        isValidName() {
            return this.formData.name.trim() !== '';
        },
        isValidPhone() {
            // Basic phone number validation (you may need to adjust based on your requirements)
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(this.formData.phone);
        },
        isValidEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.formData.email);
        },
        isFormValid() {
            return this.isValidName && this.isValidPhone && this.isValidEmail /* && ... other validations ... */;
        },
    },
    methods: {
        submitForm() {
            if (this.isFormValid) {
                console.log('Form submitted!', this.formData);
                // Add your form submission logic here
            } else {
                console.log('Form is not valid. Please check your inputs.');
            }
        },
    },
};
</script>

<style>
input::placeholder {
    opacity: 0.5;
    color: #1e0904 !important;
}

textarea::placeholder {
    opacity: 0.5;
    color: #1e0904 !important;
}
</style>
