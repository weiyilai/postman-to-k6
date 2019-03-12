#!/usr/bin/env node

const convertFile = require('../lib/convert/file')
const fs = require('fs')
const program = require('commander')
const version = require('project-version')

program
  .version(version)
  .usage('<path> [options]')
  .description('Convert a Postman collection to k6 script')
  .option('-o, --output <path>', 'Output file path. Default stdout.')
  .option('-i, --iterations <count>', 'Number of iterations.')
  .option('-g, --global <path>', 'JSON export of global variables.')
  .option('-e, --environment <path>', 'JSON export of environment.')
  .option('-c, --csv <path>', 'CSV data file. Used to fill data variables.')
  .option('-j, --json <path>', 'JSON data file. Used to fill data variables.')
  .action(run)
  .parse(process.argv)

function run (...args) {
  if (args.length <= 1) {
    console.error('Provide path to Postman collection')
    return
  }
  const options = args.pop()
  const path = args.shift()

  // Convert
  let result
  try {
    result = convertFile(path, {
      globals: options.global,
      environment: options.environment,
      csv: options.csv,
      json: options.json,
      iterations: options.iterations
    })
  } catch (e) {
    console.error(e.message)
    console.log(e)
    return
  }

  // Output
  if (options.output) {
    fs.writeFile(options.output, result, error => {
      if (error) {
        console.error('could not create output ' + options.output)
        console.error(error)
      }
    })
  } else {
    console.log(result)
  }
}
