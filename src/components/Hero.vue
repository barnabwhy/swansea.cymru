<template>
    <div class="hero">
        <div class="heroBleed"> 
            <center>
                <h1>Swansea Computer Science</h1>
                <RouterLink class="btn-link" to="/discord" target="_blank">Join Our Discord</RouterLink>
            </center>
        </div>
    </div>
</template>

<style scoped>
.hero {
    top: 0;
    left: 0;
    width: 100%;
    --hero-height: min(480px, 75vh);
    margin-bottom: 32px;
    height: var(--hero-height);
}
.heroBleed {
    color: var(--c-primary);
    width: 100%;
    overflow: hidden;
    height: var(--hero-height);
    position: relative;

    --waves-height: 128px;
    background: url(@/assets/waves.svg) bottom center / auto var(--waves-height) repeat-x, linear-gradient(to top, transparent calc(var(--waves-height) - 32px), var(--c-primary) calc(var(--waves-height) - 32px));
}

center {
    color: var(--c-white);
    top: calc(50% - var(--waves-height)/4);
    transform: translateY(-50%);
}
</style>