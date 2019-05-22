module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
      '<rootDir>/setupJest.ts'
    ],
    preset: "jest-preset-angular"
  }
