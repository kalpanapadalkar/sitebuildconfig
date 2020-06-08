const shellJs = require('shelljs');
const path = require('path');
const gitHubUrl = 'https://github.com/kalpanapadalkar/sitebuildconfig';
const baseBranch = "master";

const repoName = 'sitebuildconfig';  //Repo name
const repoPath = path.join(__dirname,repoName);

shellJs.cd(repoPath);
shellJs.exec(`git checkout ${baseBranch}`);
shellJs.exec(`git pull origin ${baseBranch}`);
shellJs.exec(`git add .`);
if (shellJs.exec('git commit -am "Auto-commit"').code !== 0) {
    shellJs.echo('Error: Git commit failed');
    shellJs.exit(1);
  }
  shellJs.exec(`git push origin ${baseBranch}`);