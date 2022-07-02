<template>
    <div class="hello">hello</div>
    {{ useUserStoreHook().name }}
    <FontIcon icon="team-iconlogo" svg />
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
