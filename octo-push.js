let yargs = require('yargs'),
    fs = require('fs'),
    octo = require('@octopusdeploy/octopackjs');

    let {path, hostname, apikey} = yargs
    .demandOption('path', "path to the release package to push to the server")
    .demandOption('hostname', "the hostname of the octopus server")
    .demandOption('apikey', "a valid apiKey for the octopus server")
    .help()
    .alias('help', 'h')
    .argv;

octo.push(path, {
    host: hostname, 
    apikey,
    replace: true,
    //spaceId: 'Spaces-1'
}, function(err, result) {
    
    if(err) {
        console.log(err);
        return;
    }

    console.log(result);
});