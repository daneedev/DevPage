import prompts from './utils/prompts';
import generators from './utils/generators';

async function main() {
    const userInfo = await prompts.getUserInfo();
    const socials = await prompts.getUserSocials();
    const colors = await prompts.getColors();
    await generators.generateBackground(colors)
    await generators.generateWebsite(userInfo, socials);
}

main();