const core = require('@actions/core');

async function run() {
    const person = core.getInput('person');
    core.info('Hello World! ' + person);
}

run();