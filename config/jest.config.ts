// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest'
import { compilerOptions } from '../tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  testMatch: ['**/*.test.ts'],
  transform: {
    // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      }
    ]
  },
  rootDir: '../',
  roots: ['<rootDir>/tests'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}

export default jestConfig
