#!/usr/bin/env node

import prompts from './utils/prompts';
import generators from './utils/generators';
import api from './utils/api';
import c from 'colors';

async function main() {
    console.log(c.blue(`
 /$$$$$$$                    /$$$$$$$                           
| $$__  $$                  | $$__  $$                          
| $$  \\ $$ /$$$$$$ /$$    /$| $$  \\ $$/$$$$$$  /$$$$$$  /$$$$$$ 
| $$  | $$/$$__  $|  $$  /$$| $$$$$$$|____  $$/$$__  $$/$$__  $$
| $$  | $| $$$$$$$$\\  $$/$$/| $$____/ /$$$$$$| $$  \\ $| $$$$$$$$
| $$  | $| $$_____/ \\  $$$/ | $$     /$$__  $| $$  | $| $$_____/
| $$$$$$$|  $$$$$$$  \\  $/  | $$    |  $$$$$$|  $$$$$$|  $$$$$$$
|_______/ \\_______/   \\_/   |__/     \\_______/\\____  $$\\_______/
                                              /$$  \\ $$         
                                             |  $$$$$$/         
                                              \\______/                  
       
Made by Danee ©️ 2025
                                              `))
    const userInfo = await prompts.getUserInfo();
    const socials = await prompts.getUserSocials();

    // API FETCH
    const token = await prompts.getGitHubToken();
    const repos = await api.getUserRepositories(token);
    const selectedRepos = await prompts.selectRepositories(repos);
    const reposWithInfo = await prompts.addRepoInfo(selectedRepos);
    
    const colors = await prompts.getColors();
    
    await generators.generateBackground(colors)
    await generators.generateWebsite(userInfo, socials, reposWithInfo);
}

main();