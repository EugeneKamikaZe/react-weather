module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-prettier',
        'stylelint-prettier/recommended',
    ],
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    rules: {
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': null,
        'number-leading-zero': null,
        'scss/comment-no-empty': null,
    },
    ignoreFiles: [
        '../../node_modules/**/*{.css,.scss}',
        '../../Old/**/*{.css,.scss}',
        '../../reports/**/*{.css,.scss}',
    ],
};
