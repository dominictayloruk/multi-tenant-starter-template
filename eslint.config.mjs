import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier';

const config = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  // Next.js recommended flat config (includes core-web-vitals & TypeScript)
  ...nextConfig,
  // Project-specific overrides and extra plugins
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
        },
        {
          usePrettierrc: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },
];

export default config;
