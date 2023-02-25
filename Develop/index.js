const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You need to enter a project title!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "description",
    message: "How do you describe your project?",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter the project description!");
        return false;
      }
    },
  },

  {
    type: "checkbox",
    name: "languages",
    message:
      "What languages did you use to build this project? (Check all that apply)",
    choices: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Nodejs"],
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },

  {
    type: "list",
    name: "license",
    message: "Which license does your application is covered under?",
    choices: ["MIT", "Apache", "Boost", "BSD"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Is there any contribution in your project?",
  },

  {
    type: "input",
    name: "test",
    message: "Is there any test require to run the project?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = "README.md";
    fs.writeFile(filename, generateMarkdown(data), (err) => {
      err ? console.error : console.log("Successful");
    });
  });
}

init();
