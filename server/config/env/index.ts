const path = require('lodash');

const _ = require('lodash');

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

const defaults = {
    root: path.join(__dirname, '..', '..', '..')
};

export default _.assign(defaults, config);