module.exports = {
    env: {
        browser: true,
        jest: true
    },
    extends: 'airbnb',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'double'],
        semi: ['error', 'always']
    }
};
