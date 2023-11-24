<script >

export default {
    name: 'Footer',



}

</script>

<template>
    <div class="footer">
        <div class="container">
            <h5 class="mb-3"><svg xmlns="http://www.w3.org/2000/svg" height="2em"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

                    <path
                        d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM173.3 128l-64-64H402.7l-64 64H173.3z" />
                </svg></h5>
            <div class="row justify-content-center">
                <div class="col-md-2">
                    <a href="https://github.com/vgianluca96" target="_blank">vgianluca96</a>
                </div>
                <div class="col-md-2">
                    <a href="https://github.com/LiciaLicari" target="_blank">LiciaLicari</a>
                </div>
                <div class="col-md-2">
                    <a href="https://github.com/FedericaCampo97" target="_blank">FedericaCampo97</a>
                </div>
                <div class="col-md-2">
                    <a href="https://github.com/rpsobolewski" target="_blank">rpsobolewski</a>
                </div>
                <div class="col-md-2">
                    <a href="https://github.com/RiccardoSansone" target="_blank">RiccardoSansone</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: rgb(58, 48, 46);
    color: darkorange;
    text-align: center;
    padding: 20px;

    width: 100%;
}

.footer a {
    color: darkorange;
    text-decoration: none;
}

svg {
    fill: darkorange;
}
</style>