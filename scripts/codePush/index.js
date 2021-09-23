'use strict';
// TODO: A certain Staging is published as Product
// Please select the environment you want to deploy
// 1. Production
// 2. Staging
//
// Please select the platform you want to deploy
// 1. android and ios
// 2. android
// 3. ios
//
// Please enter a description of this modification
// Carriage return, line feed, cmd + s to save and publish
//
const { makePush } = require('./makePush');
const inquirer = require('inquirer');

const ENV_PARAMS = {
  message: 'Please select the environment you want to deploy',
  type: 'list',
  name: 'environment',
  items: {
    1: 'Production',
    2: 'Staging',
  },
  choices: ['Staging', 'Production'],
};

const PLATFORM_PARAMS = {
  message: 'Please select the platform you want to deploy',
  type: 'list',
  name: 'platform',
  choices: ['both', 'android', 'ios'],
  default: 'both',
};

const VERSION_PARAMS = {
  name: 'version',
  type: 'input',
  message: 'Please enter the target version number to be updated',
};

const DES_PARAMS = {
  name: 'description',
  type: 'editor',
  message: 'Please enter a description of this modification',
};

const MANDATORY_PARAMS = {
  message: 'Is this update mandatory?',
  type: 'list',
  name: 'mandatory',
  choices: ['true', 'false'],
  default: 'false',
};

const QUESTIONS = [ENV_PARAMS, PLATFORM_PARAMS, DES_PARAMS, VERSION_PARAMS, MANDATORY_PARAMS];

function main() {
  inquirer.prompt(QUESTIONS).then(option => {
    const { description, environment, platform, version, mandatory } = option;
    if (!description) {
      console.error('You did not enter a description of the change');
      process.exit(1);
    }
    makePush({
      environment,
      platform,
      version,
      description,
      mandatory,
    });
  });
}

main();
