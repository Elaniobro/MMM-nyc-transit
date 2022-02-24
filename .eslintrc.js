module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        requireConfigFile: false,
    },
    parser: '@babel/eslint-parser',
    extends: ['prettier'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        'space-before-function-paren': 'off',
        curly: 'off',
        'arrow-parens': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
    },
}
