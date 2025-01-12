import fs from 'fs';

function generateBackground(colors: {color1: string, color2: string}) {
    let background = fs.readFileSync('src/templates/img/background.svg', 'utf8');
    background = background.replace(/#05111a/g, colors.color1);
    background = background.replace(/#3586ff/g, colors.color2);
    console.log(background)
    fs.mkdirSync('public/img', { recursive: true });
    fs.writeFileSync('public/img/background.svg', background);
}

function generateWebsite(data: {username: string}) {
    let index = fs.readFileSync('src/templates/index.html', 'utf8');
    fs.mkdirSync('public', { recursive: true });
    index = index.replace(/{{ username }/g, data.username);
    fs.writeFileSync('public/index.html', index);
}

export default { generateBackground };