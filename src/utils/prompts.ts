import inquier from 'inquirer';

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
    message: 'Enter your username',
  },
  {
    type: 'input',
    name: 'job',
    message: 'Enter your job title',
  },
  {
    type: 'input',
    name: 'languages',
    message: 'Enter languages that you use (comma separated)',
  },
  {
    type: "input",
    name: "frameworks",
    message: 'Enter frameworks that you use (comma separated)',
  },
  {
    type: 'input',
    name: 'about',
    message: 'Enter a short description about yourself',
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

export default { getColors, getUserInfo };