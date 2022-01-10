const { convertFromDirectory } = require('joi-to-typescript')

convertFromDirectory({
    schemaDirectory: './schemas',
    typeOutputDirectory: './interfaces',
    debug: true
});
