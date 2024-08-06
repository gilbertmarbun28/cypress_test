# cypress_test

**Overview:**
This project contains Cypress tests for automation of ebay for searching product.

**Prerequisites:**
* Node.js and npm (or yarn)
* Cypress (installed as a development dependency)

**Installation:**
1. Clone to your repository from this link https://github.com/gilbertmarbun28/cypress_test.git
2. On your repository terminal you can type "npm install". this will install all the modules of repository and its dependency.

**Project Structure**
This contain will filled with some folder but our main is in folder e2e & pom. 
When you want to add case/s on existing feature you can:
  - open folder where you want to add case
  - open file feature and write BDD script
  - open file .js in the folder and write your step definition
  - open folder pom and find the existing file and add your object there

When you want to add new cases on new feature, you can:
  - create folder under e2e
  - under the new folder, add new feature file and .js file
  - under folder pom, add new .js file so you can place your element.

**Running**
To run the automation, you can open your project terminal and execute "npx cypress open"
It will open the GUI, you can choose E2E Test and choose your browser.
Then choose feature you want to run.
