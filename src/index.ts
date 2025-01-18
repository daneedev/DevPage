import prompts from './utils/prompts';
import generators from './utils/generators';
import api from './utils/api';

async function main() {
    const userInfo = await prompts.getUserInfo();
    const socials = await prompts.getUserSocials();
    const colors = await prompts.getColors();

    // API FETCH
    const token = await prompts.getGitHubToken();
    const repos = await api.getUserRepositories(token);
    const selectedRepos = await prompts.selectRepositories(repos);
    const reposWithInfo = await prompts.addRepoInfo(selectedRepos);
    
    await generators.generateBackground(colors)
    await generators.generateWebsite(userInfo, socials, reposWithInfo);
}

main();