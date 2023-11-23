<script>

export default {
    name: 'ContactsView'
}

</script>

<template>
    <div class="bg-dark text-light">

        <div class="p-5 mb-4 bg-dark text-light">
            <div class="container py-5 text-center">
                <h1 class="display-5 fw-bold">Fancy a table?</h1>
                <p class="fs-4">Reserve a spot</p>
                <button class="btn btn-primary btn-lg" type="button">
                    Tell us everything
                </button>
            </div>
        </div>
    
        <div class="container bg-dark text-light">
            <form action="" class="my-5">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Your name here"
                    aria-describedby="nameHelper"
                    />
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="form-control"
                    placeholder="Your phone number"
                    aria-describedby="phoneHelper"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Your email here"
                    aria-describedby="emailHelper"
                    />
                </div>
    
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="Your message here..."
                    ></textarea>
                </div>
    
                 <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </div>
</template>

<style></style>