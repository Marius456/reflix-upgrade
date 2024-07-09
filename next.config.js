const { withRNVNext  } = require('@rnv/adapter');
const path = require('path');

const config = {
    projectRoot: path.resolve(__dirname),
};

module.exports = withRNVNext(config);