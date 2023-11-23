<script >

export default {
    name: 'Footer',



}

</script>

<template>
    <div class="footer">
        <div class="container">
            <h5 class="mb-3">DEVS</h5>
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
    background-color: #430030;
    color: #ffecde;
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer a {
    color: #ffecde;
    text-decoration: none;
}
</style>