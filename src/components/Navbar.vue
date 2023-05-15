<template>
    <header class="sticky top-0 bg-gray-800 shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-3 text-white py-6">
            <RouterLink :to="'/'">
                <img src="public/logo.svg" alt="HC Group">
            </RouterLink>
            <RouterLink :to="'/'">
                <div class="flex items-center gap-3 flex-1">
                    <p class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Home</p>
                </div>
            </RouterLink>
            <RouterLink :to="'/about'">
                <div class="flex items-center gap-3 flex-1">
                    <p class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        About</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>
<script setup>

import { RouterView, RouterLink } from 'vue-router'
</script>