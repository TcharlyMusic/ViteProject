# ViteProject

## 1) Installation de Vite pour le nouveau Projet 
=> Se placer dans le repertoire ou on veut que le projet se trouve
```bash
npm create vite@latest
```
Saisie du Nouveau Projet (ViteProject)
Validation du Package Name (viteproject)
Validation du Framework (vanilla)
Choix du langage (javascript)

## 2) Installation et mise à jour des Packages
```bash
cd ViteProject
npm install
npm run dev
```
Un test en local est alors possible sur l'url indiqué (http://localhost:5173)

## 3) Modification du fichier index.html
=> Ajout de code dans le fichier index.html
=> AVANT :
```html
    <div id="app"></div>
```
=> APRES :
```html
    <div id="app">
      <h1>Bonjour tout le monde !</h1>
      <p>Ceci est mon premier site web</p>
      <button id="clic-btn">Clique ici !</button>
    </div>
```

## 4) Modification du fichier main.js
=> Remplacer le code du main.js par celui-ci
```js
import './style.css'
let bouton = document.getElementById("clic-btn");
let app = document.getElementById("app");
bouton.addEventListener("click", () => { app.innerHTML += "<p>Bien joué !</p>" })
```

## 5) Test des Modifications
```bash
npm run dev
```

## 6) Creer le repo sur GitHub
=> Connexion à GITHUB
=> dans Repositories, cliquer sur new (vérifier le repo soit public)
=> mettre le nom du nouveau repo (ViteProject) et cliquer sur create repositories
=> faire un copier coller dans le terminal du code affiché dans le QuickSetup
=> executer toutes les commandes

```bash
echo "# ViteProject" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TcharlyMusic/ViteProject.git
git push -u origin main
```

## 7) Installer gh-pages
```bash
npm install gh-pages --save-dev
```

## 8) Modification des scripts dans le fichier package.json
```js
AVANT:
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```
```js
APRES:
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```

## 9) Modification de la homepage dans le fichier package.json
=> Mettre le bon nom du repo dans <username> 
```js
AVANT:
{
  "name": "myviteproject",
```
```bash
APRES:
{
  "name": "myviteproject",
  "homepage": "https://TcharlyMusic.github.io/",
```

## 10) Creer le fichier vite.config.js avec le contenu
=> Modifier le NomDuRepo avec celui creer sur GIT
```js
import { defineConfig } from 'vite'
export default defineConfig({
  base:'/NomDuRepo/'
})
```

## 11) Deploiement dans le repo
```bash
npm run deploy
```
Le site est alors fonctionnel sur "https://TcharlyMusic.github.io/ViteProject"

## 12) Deploiement en local
```bash
npm run dev
```
Le site est alors fonctionnel sur "(http://localhost/ViteProject)"

