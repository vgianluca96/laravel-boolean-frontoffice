<script>

export default {
    name: 'Navbar',



}

</script>

<template>
    <ul id="navbar" class="nav justify-content-center w-100 shadow">


        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contacts">Contact Us</router-link></li>


    </ul>
</template>

<style lang="scss" scoped>
svg {
    fill: darkorange;
}

.nav-link {
    color: darkorange;
}

.nav {
    background-color: rgb(58, 48, 46);
    padding-top: 25px;
    padding-bottom: 5px;
}



ul {
    margin: 0;
    padding: 0;
    display: flex;
}

ul li {
    list-style: none;
    margin: 0 20px;
    transition: 0.5s;
}

ul li a {
    display: block;
    position: relative;
    text-decoration: none;
    padding: 5px;
    font-size: 18px;
    font-family: sans-serif;
    color: white;
    text-transform: uppercase;
    transition: 0.5s;
}



ul li a:hover {
    text-decoration: none;
    color: darkorange;
}

ul li a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
}

ul li a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
}
</style>