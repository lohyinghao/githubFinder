class Github {
    constructor() {
        this.client_id = 'fd31202c3e40a2f9edee';
        this.client_secret = '6d8086c8595d6b753232a411d066fd951359dc01';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

     async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
     }
}