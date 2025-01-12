import inquier from 'inquirer';

async function getCssChoice() {
  const cssChoice = await inquier.prompt({
    type: 'list',
    name: 'cssChoice',
    message: 'Pick a type of TailwindCSS generation',
    choices: [
        { name: "Locally (Recommended for selfhost)", value: "local" },
        { name: "CDN (Recommended for GitHub Pages)", value: "cdn" },
    ],
  });
  return cssChoice.cssChoice;
}

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

export default { getCssChoice, getColors };