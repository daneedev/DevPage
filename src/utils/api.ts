import axios from 'axios';

async function getUserRepositories(token : string) {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          per_page: 100, // Maximum počet repozitářů na stránku
        },
      });
  
      return response.data.map((repo : any) => ({
        full_name: repo.full_name,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count
      })) // Vrátí seznam repozitářů
    } catch (error : any) {
      console.error('Error fetching repositories:', error.message);
      return [];
    }
  }

export default { getUserRepositories };