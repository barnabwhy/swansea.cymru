<template>
    <div class="panel" :style="{ background }" :class="{ flexCenter }">
        <div v-if="central" class="central" :class="{ reducedMargin }">
            <slot></slot>
        </div>
        <slot v-else></slot>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        background: {
            type: String,
            required: false,
        },
        flexCenter: {
            type: Boolean,
            required: false,
        },
        central: {
            type: Boolean,
            required: false,
        },
        reducedMargin: {
            type: Boolean,
            required: false,
        }
    },
}
</script>


<style scoped>
.panel {
   width: 100%;
   box-sizing: border-box;
   padding: 32px;
}
.panel.flexCenter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;
}
.central.reducedMargin {
    margin: 0px auto;
}
h1 {
    margin-top: 0;
}
</style>