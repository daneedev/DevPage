import prompts from './utils/prompts';
import generators from './utils/generators';

async function main() {
    const cssChoice = await prompts.getCssChoice();
    const colors = await prompts.getColors();
    await generators.generateBackground(colors)
    console.log(cssChoice);
}

main();