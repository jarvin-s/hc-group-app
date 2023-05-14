<template>
    <header class="sticky top-0 bg-slate-700 shadow-lg">
        <nav class="containter flex flex-col sm:flex-row items-center gap-3 text-white py-6">
            <RouterLink :to="'/about'">
                <div class="flex items-center gap-3 flex-1">
                    <p class="text">Test</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>