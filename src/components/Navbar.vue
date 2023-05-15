<template>
    <header class="sticky top-0 bg-white shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-3 text-black py-3">
            <RouterLink :to="'/'">
                <img src="/logo.svg" alt="HC Group">
            </RouterLink>
            <RouterLink :to="'/'">
                <div class="flex items-center gap-3 flex-1">
                    <p class="hover:text-sky-600 transition-color duration-200 rounded-md px-3 py-2 text-base font-medium">
                        Home</p>
                </div>
            </RouterLink>
            <RouterLink :to="'/about'">
                <div class="flex items-center gap-3 flex-1">
                    <p class="hover:text-sky-600 transition-color duration-200 rounded-md px-3 py-2 text-base font-medium">
                        About</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>