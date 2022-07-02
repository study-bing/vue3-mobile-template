<template>
    <section>
        console
        <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
        {{ version }}
        <router-view>
            <template #default="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="route.fullPath" />
                </transition>
            </template>
        </router-view>
    </section>
</template>

<script setup lang="ts">
import { getConfig } from '@/config'
defineOptions({
    name: 'LayoutIndex',
})
const version = getConfig('Version')
</script>

<style></style>
