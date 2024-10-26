# ViteProject

## 1) Installation de **Vite** pour le nouveau Projet 
Dans le *terminal*, se placer dans le repertoire ou l'on veut que le projet se trouve et executer la commande : 
```bash
npm create vite@latest
```
Il faut alors : 
- Saisie du Nouveau Projet : `ViteProject`
- Validation du Package Name : `viteproject`
- Validation du Framework : `vanilla`
- Choix du langage : `javascript`

## 2) Installation et mise à jour des Packages
Executer les commandes : 
```bash
cd ViteProject
npm install
npm run dev
```
Un test en local est alors possible sur l'url indiqué `http://localhost:XXXX`

## 3) Modification du fichier index.html
AVANT :
```html
    <div id="app"></div>
```
APRES :
```html
    <div id="app">
      <h1>Bonjour tout le monde !</h1>
      <p>Ceci est mon premier site web</p>
      <button id="clic-btn">Clique ici !</button>
    </div>
```

## 4) Modification du fichier main.js
Remplacer tout le code du `main.js` par :
```js
import './style.css'
let bouton = document.getElementById("clic-btn");
let app = document.getElementById("app");
bouton.addEventListener("click", () => { app.innerHTML += "<p>Bien joué !</p>" })
```

## 5) Test des Modifications
Executer la commande : 
```bash
npm run dev
```
Un test en local est alors possible sur l'url indiqué `http://localhost:XXXX`

## 6) Creer le repo sur GitHub
- Connexion à `GITHUB`
- dans `Repositories`, cliquer sur `New` et vérifier le repo soit public
- mettre le nom du nouveau repo `ViteProject` et cliquer sur `Create Repository`
- faire un copier coller dans le terminal du code affiché dans le `QuickSetup` et executer toutes les commandes :
```bash
echo "# ViteProject" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TcharlyMusic/ViteProject.git
git push -u origin main
```

{{<alert "circle-info">}}
Lors de la création d'un repo *vraiment* vide (pas de `README`, pas de `.gitignore`, rien), ces commandes sont listées en bas de la page.
{{</alert>}}


## 7) Installer gh-pages
Executer la commande : 
```bash
npm install gh-pages --save-dev
```

## 8) Modification des scripts
Modifier le fichier `package.json` :
AVANT:
```js
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```
APRES:
```js
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```

## 9) Modification du fichier package.json
AVANT:
```js
{
  "name": "viteproject",
```
APRES:
```js
{
  "name": "viteproject",
  "homepage": "https://**<username>**.github.io/",
```

## 10) Creer la configuration vite
Ajouter le fichier 'vite.config.js' dans le repo et ajouter le contenu en modifier le `NomDuRepo` avec celui creer sur GIT (ne pas oublier les '/') : 
```js
import { defineConfig } from 'vite'
export default defineConfig({
  base:'/NomDuRepo/'
})
```

## 11) Deploiement en local
```bash
npm run dev
```
Un test en local est alors possible sur l'url indiqué `http://localhost:XXXX`

## 12) Deploiement dans le repo
```bash
npm run deploy
```
Le site est alors fonctionnel sur "https://TcharlyMusic.github.io/ViteProject"


## 13) Architecture du site
```
projet/
├── index.html
├── main.js
├── package.json
├── public/
│   └── Ici se trouvent toutes les images du site
└── style.css
```

