<template>
    <div class="container flex flex-col sm:flex-row items-center gap-3 text-black py-3">
        <label for="years" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <select id="years"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>

        <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
        <select id="language"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="PHP">PHP</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
        </select>

        <label for="development" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Development</label>
        <select id="development"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="full">Full stack</option>
        </select>
    </div>
    <div>
        <myScript />
    </div>
</template>

<script setup>
import myScript from '@/assets/js/myScript.js';
</script>