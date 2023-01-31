# 20 React: React Portfolio

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Packages](#packages)
  * [Start](#start)
  * [Steps to deploy](#Steps-to-deploy)
  * [Deployed Link](#deployed-link)
  * [GitHub Link](#github-link)

  ## Description
  This weeks assignment was to create a portfolio using React skills and deploy this application to GitHub Pages. The portfolio has 4 sections,
  About Me, Profile, Contact Me and Resume.

  ## Installation
  To install the react application

  ```md
    npx create-react-app RIMA-ABOUT-ME
 ```
  ## Packages
  NavBar
  npm install -S react-router-dom
  npm install react-bootstrap bootstrap

  ## Start
  To start the application

  ```md
    npm start
 ```

 ## Steps to deploy 
- Add "homepage": "https://rimadas.github.io/Rima-About-Me" to package.json
  (Note:-This is https://username.github.io/reponame",)
- Run the package "npm i gh-pages"
- Add the below 2 packages to scripts
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build",
- Run "npm run deploy"
- Go to github >> setting >> pages >> gh-pages

## Deployed Link


## GitHub Link

https://github.com/rimadas9878/Portfolio