<template>
    <div class="grid place-items-center p-1 overflow-auto">
        <div class="flex flex-col place-content-center sm:flex-row px-4 py-3">
            <label class="px-2">Year</label>
            <select v-model="selectedYear" @change="filterTable"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">All</option>
                <option v-for="year in uniqueYears" :value="year" :key="year">{{ year }}</option>
            </select>
            <label class="px-2">Language</label>
            <select v-model="selectedLanguage" @change="filterTable"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">All</option>
                <option v-for="language in uniqueLanguages" :value="language" :key="language">{{ language }}</option>
            </select>
            <label class="px-2">Development</label>
            <select v-model="selectedDevelopment" @change="filterTable"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">All</option>
                <option v-for="development in uniqueDevelopment" :value="development" :key="development">{{ development }}
                </option>
            </select>
        </div>
        <table class="overflow-auto flex-row text-sm text-left sm:table-row">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Project
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Year
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Language
                    </th>
                    <th class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Development
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in filteredTable" :key="row.id"
                    class="border-b dark:bg-gray-800 dark:border-gray-700 sm:table-row hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">{{ row.project }}</td>
                    <td class="px-6 py-4">{{ row.year }}</td>
                    <td class="px-6 py-4">{{ row.language }}</td>
                    <td class="px-6 py-4">{{ row.development }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tableData: [
                { id: 1, project: 'Sun Tours', year: '2021', language: 'HTML/CSS', development: 'Frontend' },
                { id: 2, project: 'The Flash', year: '2020', language: 'HTML/CSS', development: 'Frontend' },
                { id: 3, project: 'Auto Plaza', year: '2015', language: 'HTML/CSS', development: 'Frontend' },
                { id: 4, project: 'Test project', year: '2019', language: 'C#', development: 'Backend' },
                { id: 5, project: 'Test project 2', year: '2017', language: 'JavaScript', development: 'Frontend' },
                { id: 6, project: 'Test project 3', year: '2016', language: 'PHP', development: 'Backend' },
                { id: 7, project: 'Test project 4', year: '2017', language: 'PHP', development: 'Backend' },
                { id: 8, project: 'Test project 5', year: '2021', language: 'JavaScript', development: 'Frontend' }
            ],
            selectedYear: '',
            selectedLanguage: '',
            selectedDevelopment: ''
        };
    },
    computed: {
        uniqueYears() {
            const years = new Set();
            this.tableData.forEach((row) => years.add(row.year));
            return Array.from(years).sort((a, b) => b - a);
        },
        uniqueLanguages() {
            const languages = new Set();
            this.tableData.forEach((row) => languages.add(row.language));
            return Array.from(languages).sort();
        },
        uniqueDevelopment() {
            const development = new Set();
            this.tableData.forEach((row) => development.add(row.development));
            return Array.from(development).sort();
        },
        filteredTable() {
            return this.tableData.filter((row) => {
                const yearMatch = this.selectedYear === '' || row.year === this.selectedYear;
                const languageMatch = this.selectedLanguage === '' || row.language === this.selectedLanguage;
                const developmentMatch = this.selectedDevelopment === '' || row.development === this.selectedDevelopment;
                return yearMatch && languageMatch && developmentMatch;
            });
        },
    },
};
</script>
  