import inquirer from 'inquirer';
import { Social } from './types';

async function getColors() : Promise<{color1: string, color2: string}> {
  const color1 = await inquirer.prompt({
    type: 'input',
    name: 'data',
    message: 'Theme colors: Enter the background color',
    default: '#05111a',
  })
  const color2 = await inquirer.prompt({
    type: 'input',
    name: 'data',
    message: 'Theme colors: Enter the secondary color',
    default: '#0066FF',
  })

  return  {
    color1: color1.data,
    color2: color2.data,
  }
}

async function getUserInfo() {
  const user = await inquirer.prompt([{
    type: 'input',
    name: 'username',
    message: 'User: Enter your username',
  },
  {
    type: 'input',
    name: 'pfp',
    message: 'User: Enter the link to your profile picture',
    default: 'https://avatars.githubusercontent.com/daneedev'
  },
  {
    type: 'input',
    name: 'job',
    message: 'User: Enter your job title',
  },
  {
    type: 'input',
    name: 'languages',
    message: 'User: Enter languages that you use (comma separated)',
  },
  {
    type: "input",
    name: "frameworks",
    message: 'User: Enter frameworks that you use (comma separated)',
  },
  {
    type: 'input',
    name: 'about',
    message: 'User: Enter a short description about yourself',
  }
])
 /* const job = await inquirer.prompt({
    type: 'input',
    name: 'data',
    message: 'Enter your job title',
  })*/


  return {
    username: user.username,
    job: user.job,
    languages: user.languages,
    frameworks: user.frameworks,
    about: user.about,
    pfp: user.pfp,
  }
}

async function getUserSocials() {
  let moreLinks = true;
  let socials : Social[] = [];
  while (moreLinks) {
    const social = await inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Socials: Enter the name of the social media platform (e.g. Twitter)',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Socials: Enter the link to your profile',
    },
    {
      type: 'confirm',
      name: 'more',
      message: 'Socials: Do you want to add more social media links?',
      default: true
    }
  ])
  socials.push({name: social.name, url: social.link});

  moreLinks = social.more;
  }
  return socials;

}

async function getGitHubToken() {
  const token = await inquirer.prompt({
    type: 'password',
    name: 'data',
    message: 'GitHub: Enter your GitHub personal token',
    mask: '*',
  })

  return token.data;
}

async function selectRepositories(repos : any[]) {
  const choices = repos.map(repo => ({
    name: repo.full_name, // Zobrazí název repozitáře
    value: repo.full_name, // Vrátí plné jméno
  }));

  const selected = await inquirer.prompt({
    type: 'checkbox',
    name: 'selectedRepos',
    message: 'Select repositories to include:',
    choices,
  });

  return repos.filter((repo) => selected.selectedRepos.includes(repo.full_name)) // Vrátí seznam vybraných repozitářů
}

async function addRepoInfo(repos: any[]) {
  for (const repo of repos) {
    const info = await inquirer.prompt([
      {
        type: 'input',
        name: 'docs',
        message: `Enter the documentation link for the ${repo.full_name} repository`,
      },
      {
        type: 'input',
        name: 'demo',
        message: `Enter the demo link for the ${repo.full_name} repository`,
      },
    ])
    repo.docs = info.docs;
    repo.demo = info.demo;
  }
  return repos;
}

export default { getColors, getUserInfo, getUserSocials, getGitHubToken, selectRepositories, addRepoInfo };