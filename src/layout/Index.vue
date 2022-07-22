<template>
    <section class="view-content">
        <router-view>
            <template #default="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <section :key="route.path" class="router-content">
                        <component :is="Component" />
                    </section>
                </transition>
            </template>
        </router-view>
    </section>
</template>

<script setup lang="ts">
defineOptions({
    name: 'layoutIndex',
})
</script>
<style scoped lang="scss">
.view-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.view-body {
    flex: auto;
    overflow: auto;
    display: flex;
}
</style>
