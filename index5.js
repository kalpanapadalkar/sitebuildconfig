var exec = require('child_process').exec;

// exec('echo "HELLO"', function (error, stdout, stderr) {
//     console.log(error);
//     console.log(stdout);
//     console.log(stderr);
// });

// var sys = require('sys'),
//     exec = require('child_process').exec;
const dirPath = __dirname;

// console.log(dirPath);

exec(`cd ${dirPath} && git checkout master && git pull && git add . && git commit -am "Added changes for testing" && git push origin master`)
// exec(`cd ${dirPath} && git reset --hard && git clean -f && git checkout master && git pull && git add . && git commit -am "Added changes for testing" && git push origin master`)

// exec('cd ${dirPath}', function(err, stdout, stderr) {
//         console.log("cd: " + err + " : "  + stdout);
//         exec("pwd", function(err, stdout, stderr) {
//             console.log("pwd: " + err + " : " + stdout);
//             exec("git status", function(err, stdout, stderr) {
//                 console.log("git status returned " ); console.log(err);
//             })
//             exec("git pull", function(err, stdout, stderr) {
//                 console.log("git pull done" ); console.log(stdout);
//             })
//             exec("git add .", function(err, stdout, stderr) {
//                 console.log("git added files done" ); console.log(stdout);
//             })

//             exec("git commit -am 'committed changes for testing for exec'", function(err, stdout, stderr) {
//                 console.log("git committed successfully done" ); console.log(stdout);
//             })
//             exec("git push", function(err, stdout, stderr) {
//                 console.log("git push done" ); console.log(stdout);
//             })
//         })
//     })