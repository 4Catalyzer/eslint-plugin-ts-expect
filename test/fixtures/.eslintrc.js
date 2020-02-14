module.exports = {
  extends: [require.resolve('eslint-config-4catalyzer-typescript')],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: [require.resolve('./tsconfig.json')],
      },
    },
  ],
};
