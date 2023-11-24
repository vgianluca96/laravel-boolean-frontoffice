<script>

export default {
    name: 'ContactsView'
}

</script>

<template>
    <div  style="background-color: #1e0904;" class="text-light">

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
            <form action="" class="py-5">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Your name here"
                    aria-describedby="nameHelper"
                    style="background-color: rgb(110, 73, 67); border: 0;"
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
                    style="background-color: rgb(110, 73, 67); border: 0;"
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
                    style="background-color: rgb(110, 73, 67); border: 0;"
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
                    style="background-color: rgb(110, 73, 67); border: 0; color: white;"
                    ></textarea>
                </div>
    
                 <button type="submit" class="btn btn_card">Send</button>
            </form>
        </div>
    </div>
</template>

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