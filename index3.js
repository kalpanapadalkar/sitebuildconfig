// const chalk = require('chalk');
// const {exec} = require('./exec');

// const branchName = exec('git rev-parse --abbrev-ref HEAD', {trim: true});
// // check if this branch already exists in the remote
// const isInRemote = exec(`git show-branch remotes/origin/${branchName}`, {toString: false}).code === 0;

// if (!isInRemote) {
//   const validBranchPrefix = 'feature|fix|hotfix|chore|tests|automation';
//   const validBranchesRegex = new RegExp(`^(${validBranchPrefix})\/[\\w.-]+$`);

//   if (!validBranchesRegex.test(branchName)) {
//     const msg = `Branch names in this project must adhere to this contract: ${validBranchPrefix}.`
//     console.log(chalk.bgRed.black.bold(msg));
//     process.exit(1);
//   }
// }


const chalk = require('chalk');
const {exec} = require('./exec');

/* The flag commit hash 🚩 */
const stgUniqCommit = "s76o527m89e9h72619a827s9h038c029o8de";
const currentBranch = exec('git rev-parse --abbrev-ref HEAD');
/* Get all the branch names that have a commit with this hash */
const branchesWithStaging = exec(`git branch --contains ${stgUniqCommit}`);
if (branchesWithStaging.includes(currentBranch)) {
  console.log(chalk.bgRed.black.bold(`Your branch contains commits from 'staging' branch.`));
  process.exit(1);
}

/* Update local branch from origin master */
exec('git push origin master');
// exec('git pull origin master');