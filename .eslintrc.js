const INDENT = 4;

module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', INDENT],
        'import/extensions': ['off', 'always', {
            js: 'never',
            vue: 'never',
        }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'vue/script-indent': ['error', INDENT, {
                    baseIndent: 1,
                }],
            },
        },
    ],
};
