export default {
  setupFilesAfterEnv: [
    "./setupTests.ts"  // ou o caminho correto para o seu arquivo
  ],
  displayName: 'dynamox-fe',
  preset: '../jest.preset.js',
  coverageDirectory: '../coverage/dynamox-fe',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'html'],
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',  // Garante que Jest pegue todos os arquivos de teste .ts, .tsx
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transforma .ts e .tsx com ts-jest
  },
  testEnvironment: 'jest-fixed-jsdom',
};
