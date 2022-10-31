<template>
    <div class="navSpacer"></div>
    <nav>
        <RouterLink draggable="false" class="namesake" to="/">Swansea Computer Science</RouterLink>

        <div class="rightLinks">
            <a draggable="false" href="https://timetable.swansea.cymru">Timetable</a>
            <RouterLink draggable="false" to="/discord" target="_blank">Discord</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.navSpacer, nav {
    --nav-height: 72px;
}
.navSpacer {
    height: var(--nav-height);
}
nav {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    background: var(--c-primary);
}
nav a {
    color: var(--c-white);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    display: inline-block;
    padding: 0px 24px;
    height: var(--nav-height);
    line-height: var(--nav-height);
    user-select: none;
}
nav a:hover {
    border-bottom: 4px solid var(--c-white);
    text-decoration: none;
}
nav > .rightLinks {
    float: right;
}

.namesake {
    line-height: var(--nav-height);
    font-size: 24px;
    padding: 0px 24px;
    color: white;
    font-weight: bold;
    float: left;
    text-transform: none;
}

@media only screen and (max-width: 960px) {
    nav > .rightLinks {
        display: none;
    }
}

@media only screen and (max-width: 600px) {
    .namesake {
        width: 100%;
        text-align: center;
    }
}
</style>