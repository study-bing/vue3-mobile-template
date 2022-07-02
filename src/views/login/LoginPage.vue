<template>
    <div class="hello">hello {{ useUserStoreHook().name }}</div>
</template>

<script setup lang="ts">
import { useUserStoreHook } from '@/store/modules/user'
defineOptions({
    name: 'loginPage',
})
</script>

<style scoped>
.hello {
    font-size: 20px;
    color: aqua;
}
</style>
