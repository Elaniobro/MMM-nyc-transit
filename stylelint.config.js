module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  // ignore all files that are not of the 3 types listed below
  ignoreFiles: [],
  // in addition use the defined rule sets
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'if'],
      },
    ],
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Nunito'],
      },
    ],
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'property-no-vendor-prefix': true,
    'selector-class-pattern': null,
    'string-no-newline': true,
    'unit-no-unknown': true,
  },
}
