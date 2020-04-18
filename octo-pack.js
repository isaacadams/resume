let yargs = require('yargs'),
    fs = require('fs'),
    octo = require('@octopusdeploy/octopackjs');

let {id, v, output} = yargs
    .demandOption('id', "the id of the package")
    .demandOption('v', "the version of the package")
    .demandOption('output', "path to output the package")
    .help()
    .alias('help', 'h')
    .argv;


octo.pack('zip', { id, version: v })
    .append('package.json', fs.createReadStream('./package.json'))
    .appendSubDir('dist/', true)
    .toFile(output, function (err, data) {
        console.log("Package Saved: "+ data.name);
    });