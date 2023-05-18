<template>
    <div class="grid place-items-center p-5 overflow-auto">
        <div
            class="block max-w-sm p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 class="mb-2 text-2xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">My GitHub repositories</h1>
            <p class="font-normal mb-5 text-gray-700 dark:text-gray-400">Below you'll find a table that lists all my <b class="underline">public</b> repositories and its most used language.</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">It was built using the GitHub <a target="_blank" href="https://docs.github.com/en/rest?apiVersion=2022-11-28" class="underline text-blue-500 hover:text-blue-400">API</a>.</p>
        </div>
        <table class="overflow-auto flex-row text-sm text-left sm:table-row">
            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Repository name
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Language
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="repo in filteredRepos" :key="repo.id"
                    class="border-b dark:bg-gray-800 dark:border-gray-700 sm:table-row hover:bg-gray-50 dark:hover:bg-gray-600">
                    <a :href="repo.html_url" target="_blank">
                        <td class="px-6 py-4">{{ repo.name }}</td>
                    </a>
                    <td class="px-6 py-4">{{ repo.language }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            repos: [],
            filteredRepoName: "meepspeak"
        }
    },
    async mounted() {
        try {
            let response = await fetch("https://api.github.com/users/jarvin-s/repos");
            this.repos = await response.json();
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        filteredRepos() {
            return this.repos.filter(repo => repo.name !== this.filteredRepoName);
        }
    }
}
</script>