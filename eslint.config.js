import js from '@eslint/js'


export default [
    js.configs.recommended,
    {
        name : "eslint-config-for-confog",
        rules: {
            'no-debugger': 'warn',
            'no-console': 'error',
        }
    },
    {
        ignores: ['**/node_modules/**', 'dist/**'],
    }
];