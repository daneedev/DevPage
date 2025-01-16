import inquier from 'inquirer';
import { Social } from './types';

async function getColors() : Promise<{color1: string, color2: string}> {
  const color1 = await inquier.prompt({
    type: 'input',
    name: 'data',
    message: 'Theme colors: Enter the background color',
    default: '#05111a',
  })
  const color2 = await inquier.prompt({
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
  const user = await inquier.prompt([{
    type: 'input',
    name: 'username',
    message: 'User: Enter your username',
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
 /* const job = await inquier.prompt({
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
  }
}

async function getUserSocials() {
  let moreLinks = true;
  let socials : Social[] = [];
  while (moreLinks) {
    const social = await inquier.prompt([{
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

export default { getColors, getUserInfo, getUserSocials };