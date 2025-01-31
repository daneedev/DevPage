import axios from 'axios';
import logger from './logger'

async function getUserRepositories(token : string) {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          per_page: 100
        },
      });
  
      return response.data.map((repo : any) => ({
        full_name: repo.full_name,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count
      })) 
    } catch (error : any) {
      logger.logError("Invalid Github personal token")
      process.exit(1)
    }
  }

export default { getUserRepositories };