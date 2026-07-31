# Portfolio Next.js personnalisable / Customizable Next.js Portfolio

[Français](#français) · [English](#english)

---

## Français

### Portfolio Next.js personnalisable

Ce dépôt contient un portfolio responsive développé avec Next.js. Le contenu personnel et les projets sont séparés des composants : une autre personne peut donc réutiliser le site en modifiant uniquement deux fichiers JSON et les ressources publiques associées.

### Aperçu

Le portfolio actuel est disponible à l’adresse suivante :

<https://tissad-101010.github.io/portfolio/>

Le dépôt ne contient pas encore de capture d’écran complète du site. Vous pouvez en ajouter une dans `public/`, puis l’afficher ici avec une image Markdown.

### Fonctionnalités

- mise en page responsive et mode sombre ;
- projets générés depuis un fichier JSON ;
- profil, coordonnées et réseaux séparés du code ;
- navigation entre les sections About, Projects et Contact ;
- liens vers les réseaux sociaux et les dépôts GitHub ;
- formulaire de contact EmailJS configurable ;
- export PDF A4 avec Playwright et Chromium ;
- export statique et déploiement automatique sur GitHub Pages.

### Technologies utilisées

- Next.js (App Router et export statique) ;
- React et TypeScript ;
- Tailwind CSS et PostCSS ;
- React Icons ;
- EmailJS pour le formulaire de contact ;
- Playwright/Chromium pour l’export PDF ;
- GitHub Actions et GitHub Pages.

### Personnalisation

Les données utilisées au build se trouvent dans :

- `data/profile.json` pour l’identité, la présentation, les coordonnées, le CV et les réseaux ;
- `data/projects.json` pour la liste des projets.

Des modèles fictifs sont fournis dans `data/profile.example.json` et `data/projects.example.json`. Pour créer votre version, copiez leur contenu dans les fichiers sans suffixe `.example`, puis adaptez les valeurs. Les fichiers réels restent suivis par Git car le déploiement statique doit pouvoir les lire pendant le build GitHub Actions. N’y placez aucun secret : les identifiants EmailJS utilisés dans le navigateur sont publics par nature, mais doivent être limités côté EmailJS.

Exemple minimal de profil :

```json
{
  "firstName": "Alex",
  "lastName": "Morgan",
  "professionalTitle": "Full-Stack Developer",
  "metadataDescription": "Portfolio of Alex Morgan",
  "introduction": "I build accessible web applications.",
  "footerIntroduction": "Developer focused on useful products.",
  "email": "alex@example.com",
  "location": "Lyon, France",
  "availability": "Open to opportunities",
  "profileImage": "/profile.jpg",
  "pdfFilename": "Alex_Morgan_Portfolio.pdf",
  "resume": { "url": "/resume.pdf", "filename": "resume.pdf" },
  "socialLinks": [
    { "platform": "github", "label": "GitHub", "url": "https://github.com/example" }
  ]
}
```

Exemple minimal de projet :

```json
[
  {
    "title": "Example project",
    "description": "A short project description.",
    "tags": ["Next.js", "TypeScript"],
    "github": "https://github.com/example/project"
  }
]
```

Dans le profil, `firstName`, `lastName`, `professionalTitle`, `metadataDescription`, `introduction`, `footerIntroduction`, `email`, `location`, `availability`, `profileImage`, `resume` et `socialLinks` sont attendus. `pdfFilename`, `skills`, `education`, `experience`, `languages` et `emailJs` sont optionnels. Les plateformes sociales reconnues sont `github`, `linkedin`, `codingame` et `website`.

Pour un projet, `title`, `description`, `tags` et `github` sont obligatoires. `demo`, `link`, `image`, `dates` et `features` sont optionnels. Les propriétés optionnelles sont prévues par les types même si le design actuel n’affiche que la démonstration.

Placez les fichiers référencés par `profileImage`, `resume`, `image` ou une démonstration locale dans `public/`. Les chemins doivent commencer par `/` ; le préfixe GitHub Pages est ajouté automatiquement.

### Installation locale

```bash
git clone https://github.com/tissad-101010/portfolio.git
cd portfolio
npm install
cp data/profile.example.json data/profile.json
cp data/projects.example.json data/projects.json
npm run dev
```

Ouvrez ensuite <http://localhost:3000>. Pour vérifier la version de production :

```bash
npm run build
```

Pour générer le PDF, installez Chromium une première fois, puis lancez l’export :

```bash
npx playwright install chromium
npm run export:pdf
```

Le PDF est écrit dans `output/` avec un nom dérivé du profil. Vous pouvez utiliser un serveur existant avec `PORTFOLIO_URL=http://localhost:3000 npm run export:pdf`.

### Déploiement sur GitHub Pages

Le workflow `.github/workflows/nextjs.yml` construit l’export statique et publie le dossier `out/` à chaque push sur `main`.

Pour déployer un fork :

1. créez un dépôt GitHub et poussez-y le projet ;
2. personnalisez les JSON et les fichiers de `public/` ;
3. dans **Settings → Pages**, sélectionnez **GitHub Actions** comme source ;
4. poussez sur `main` ou lancez manuellement le workflow.

`next.config.js` déduit le `basePath` et l’`assetPrefix` depuis le nom du dépôt fourni par `GITHUB_REPOSITORY`. Aucun changement n’est normalement nécessaire lors d’un fork. Hors de GitHub Actions, le build de production utilise `portfolio` comme nom de dépôt par défaut ; définissez `GITHUB_REPOSITORY=utilisateur/nom-du-depot` si votre dépôt porte un autre nom.

### Structure du projet

```text
data/                         Données réelles et exemples JSON
public/                       Images, CV et vidéos statiques
scripts/generate-portfolio-pdf.mjs
src/app/                      Route principale et métadonnées
src/components/               Sections et composants d’interface
src/lib/portfolioData.ts      Chargement et valeurs par défaut
src/types/portfolio.ts        Types du profil et des projets
src/style/                    Styles globaux et impression
.github/workflows/nextjs.yml  Déploiement GitHub Pages
```

### Licence

Ce projet ne possède pas encore de licence. Le propriétaire doit en choisir une avant d’autoriser explicitement la réutilisation ou la redistribution.

### Auteur

Tahar Issad — [GitHub](https://github.com/tissad-101010) · [LinkedIn](https://www.linkedin.com/in/tahar-issad-00b96836a/)

---

## English

### Customizable Next.js Portfolio

This repository contains a responsive portfolio built with Next.js. Personal content and projects are kept outside the components, so another person can reuse the site by editing two JSON files and the related public assets.

### Preview

The current portfolio is available at:

<https://tissad-101010.github.io/portfolio/>

The repository does not currently include a full website screenshot. You can add one to `public/` and reference it here with a Markdown image.

### Features

- responsive layout and dark mode;
- projects generated from JSON data;
- profile, contact details, and social links separated from code;
- navigation between the About, Projects, and Contact sections;
- social network and GitHub repository links;
- configurable EmailJS contact form;
- A4 PDF export with Playwright and Chromium;
- static export and automated GitHub Pages deployment.

### Technologies

- Next.js (App Router and static export);
- React and TypeScript;
- Tailwind CSS and PostCSS;
- React Icons;
- EmailJS for the contact form;
- Playwright/Chromium for PDF export;
- GitHub Actions and GitHub Pages.

### Customization

Build-time data lives in:

- `data/profile.json` for identity, introduction, contact details, résumé, and social links;
- `data/projects.json` for the project list.

Fictitious templates are available as `data/profile.example.json` and `data/projects.example.json`. Copy their content to the files without `.example`, then edit the values. Real data files remain tracked because the static GitHub Actions build needs them. Do not store secrets there: browser-side EmailJS identifiers are public by design, but should be restricted in EmailJS.

Minimal profile example:

```json
{
  "firstName": "Alex",
  "lastName": "Morgan",
  "professionalTitle": "Full-Stack Developer",
  "metadataDescription": "Portfolio of Alex Morgan",
  "introduction": "I build accessible web applications.",
  "footerIntroduction": "Developer focused on useful products.",
  "email": "alex@example.com",
  "location": "Lyon, France",
  "availability": "Open to opportunities",
  "profileImage": "/profile.jpg",
  "pdfFilename": "Alex_Morgan_Portfolio.pdf",
  "resume": { "url": "/resume.pdf", "filename": "resume.pdf" },
  "socialLinks": [
    { "platform": "github", "label": "GitHub", "url": "https://github.com/example" }
  ]
}
```

Minimal project example:

```json
[
  {
    "title": "Example project",
    "description": "A short project description.",
    "tags": ["Next.js", "TypeScript"],
    "github": "https://github.com/example/project"
  }
]
```

The expected profile fields are `firstName`, `lastName`, `professionalTitle`, `metadataDescription`, `introduction`, `footerIntroduction`, `email`, `location`, `availability`, `profileImage`, `resume`, and `socialLinks`. `pdfFilename`, `skills`, `education`, `experience`, `languages`, and `emailJs` are optional. Supported social platforms are `github`, `linkedin`, `codingame`, and `website`.

For projects, `title`, `description`, `tags`, and `github` are required. `demo`, `link`, `image`, `dates`, and `features` are optional. The optional properties are represented in the types even though the current design only renders the demo.

Put files referenced by `profileImage`, `resume`, `image`, or a local demo in `public/`. Paths should start with `/`; the GitHub Pages prefix is added automatically.

### Local installation

```bash
git clone https://github.com/tissad-101010/portfolio.git
cd portfolio
npm install
cp data/profile.example.json data/profile.json
cp data/projects.example.json data/projects.json
npm run dev
```

Then open <http://localhost:3000>. To verify the production version:

```bash
npm run build
```

Install Chromium once and run the PDF export with:

```bash
npx playwright install chromium
npm run export:pdf
```

The PDF is written to `output/` using a filename derived from the profile. To reuse a running server, use `PORTFOLIO_URL=http://localhost:3000 npm run export:pdf`.

### GitHub Pages deployment

The `.github/workflows/nextjs.yml` workflow builds the static export and publishes `out/` after each push to `main`.

To deploy a fork:

1. create a GitHub repository and push the project;
2. customize the JSON files and `public/` assets;
3. select **GitHub Actions** under **Settings → Pages**;
4. push to `main` or run the workflow manually.

`next.config.js` derives `basePath` and `assetPrefix` from the repository name supplied by `GITHUB_REPOSITORY`. A fork normally requires no configuration change. Outside GitHub Actions, production builds use `portfolio` as the default repository name; set `GITHUB_REPOSITORY=username/repository-name` when using another name.

### Project structure

```text
data/                         Real and example JSON data
public/                       Static images, résumés, and videos
scripts/generate-portfolio-pdf.mjs
src/app/                      Main route and metadata
src/components/               Page sections and UI components
src/lib/portfolioData.ts      Data loading and defaults
src/types/portfolio.ts        Profile and project types
src/style/                    Global and print styles
.github/workflows/nextjs.yml  GitHub Pages deployment
```

### License

This project does not have a license yet. The owner must choose one before explicitly allowing reuse or redistribution.

### Author

Tahar Issad — [GitHub](https://github.com/tissad-101010) · [LinkedIn](https://www.linkedin.com/in/tahar-issad-00b96836a/)
