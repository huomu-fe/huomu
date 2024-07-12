module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
  }
};
