import fs from 'fs';
import { execSync } from 'child_process';
import nunjucks from 'nunjucks';

interface SvgFile {
    name: string;
    shortcode: string;
    icon: string;
}

const langs : SvgFile[] = [
    {name: "JavaScript", shortcode: "js", icon: "js.svg"},
    {name: "TypeScript", shortcode: "ts", icon: "ts.svg"},
    {name: "Python", shortcode: "python", icon: "python.svg"},
    {name: "Java", shortcode: "java", icon: "java.svg"},
    {name: "C++", shortcode: "cpp", icon: "cpp.svg"},
    {name: "C#", shortcode: "csharp", icon: "csharp.svg"},
    {name: "HTML", shortcode: "html", icon: "html.svg"},
    {name: "CSS", shortcode: "css", icon: "css.svg"},
]

const frameworks : SvgFile[] = [
    {name: "ExpressJS", shortcode: "express", icon: "express.svg"},
    {name: "React", shortcode: "react", icon: "react.svg"},
    {name: "Angular", shortcode: "angular", icon: "angular.svg"},
    {name: "Vue", shortcode: "vue", icon: "vue.svg"},
    {name: "Django", shortcode: "django", icon: "django.svg"},
    {name: "TailwindCSS", shortcode: "tailwind", icon: "tailwind.svg"},
    {name: "Bootstrap", shortcode: "bootstrap", icon: "bootstrap.svg"},
]


function generateBackground(colors: {color1: string, color2: string}) {
    let background = fs.readFileSync('src/templates/img/background.svg', 'utf8');
    background = background.replace(/#05111a/g, colors.color1);
    background = background.replace(/#3586ff/g, colors.color2);
    fs.mkdirSync('dist/img', { recursive: true });
    fs.writeFileSync('dist/img/background.svg', background);
    console.log("Generating background...");
}

function generateWebsite(data: {username: string, job: string, languages: string, frameworks: string, about: string}) {
    // CREATE DIRECTORIES
    fs.mkdirSync('dist', { recursive: true });
    fs.mkdirSync('dist/css', { recursive: true });
    // GENERATE CSS
    console.log("Generating css...");
    execSync("npm run cssbuild")
    // COPY TECHSTACK
    let userlangs : SvgFile[] = [];
    let userframeworks : SvgFile[] = [];
    data.languages.split(', ').forEach((tech: string) => {
        const lang = langs.find((lang) => lang.shortcode === tech);
        if (lang) {
            fs.mkdirSync('dist/img', { recursive: true });
            fs.copyFileSync(`src/templates/img/${lang.icon}`, `dist/img/${lang.icon}`);
            userlangs.push({name: lang.name, shortcode: lang.shortcode, icon: `./img/${lang.icon}`});
        }
    })
    data.frameworks.split(', ').forEach((tech: string) => {
        const framework = frameworks.find((framework) => framework.shortcode === tech);
        if (framework) {
            fs.mkdirSync('dist/img', { recursive: true });
            fs.copyFileSync(`src/templates/img/${framework.icon}`, `dist/img/${framework.icon}`);
            userframeworks.push({name: framework.name, shortcode: framework.shortcode, icon: `./img/${framework.icon}`});
        }
    })

    // RENDER PAGE 
    const index =  nunjucks.render('src/templates/index.html', { username: data.username, job: data.job, languages: userlangs, frameworks: userframeworks, about: data.about });
    fs.writeFileSync('dist/index.html', index);
    console.log("Rendering html...");
}




export default { generateBackground, generateWebsite };