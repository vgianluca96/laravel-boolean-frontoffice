<script >

export default {
    name: 'Navbar',



}

</script>

<template>
    <nav id="navbar" class="nav justify-content-center   w-100 shadow">

        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About Us</router-link>
        <router-link class="nav-link" to="/contacts">Contact Us</router-link>


    </nav>
</template>

<style lang="scss" scoped>
.nav-link {
    color: #ffecde;
}

nav {
    background-color: #430030;
}
</style>