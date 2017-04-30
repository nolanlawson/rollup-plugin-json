import config from './config.json';

assert.equal( config.answer, 42 );
assert.equal( config['\\'], '\\' );
