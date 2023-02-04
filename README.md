# 20 React: React Portfolio

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Packages](#packages)
  * [Start](#start)
  * [Steps to deploy](#Steps-to-deploy)
  * [Deployed Link](#deployed-link)
  * [GitHub Link](#github-link)
  * [Portfolio Image](#portfolio-image)

  ## Description
  Created a portfolio using React skills and deploy this application to GitHub Pages. 
  The portfolio has 4 sections
  - About Me - Displays information about me, my skills and eduction
  - Profile - Displays the projects done by me
  - Contact Me - Displays my contact information
  - Resume - Displays my skills, also you can download my resume

  ## Installation
  To install the react application

  ```md
    npx create-react-app RIMA-ABOUT-ME
 ```
  ## Packages
  npm i react-bootstrap-navbar
  npm install -S react-router-dom
  npm install react-bootstrap bootstrap

  ## Start
  To start the application

  ```md
    npm start
 ```

 ## Steps to deploy 
- Add "homepage": "https://rimadas9878.github.io/Portfolio" to package.json
  (Note:-This is https://username.github.io/reponame",)
- Run the package "npm i gh-pages"
- Add the below 2 packages to scripts
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build",
- Run "npm run deploy"
- Go to github >> setting >> pages >> gh-pages

## Deployed Link

https://rimadas9878.github.io/Portfolio

## GitHub Link

https://github.com/rimadas9878/Portfolio

## Portfolio Image

![Portfolio Image](/src/assets/PortfolioImage.png)