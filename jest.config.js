/*
module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
}*/

module.exports = {
    moduleFileExtensions: [
        'js',
        // 'json',
        'vue'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        // '**/tests/unit/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
        // '**/tests/unit/**/*.test.(js)|**/__tests__/*.(js)'
        //'**/src/tests/*.spec.(js)|**/src/entities/task/*.spec.(js)|**/src/services/**/*.*.spec.(js)'
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    setupFiles: [
        "<rootDir>/.env.test"
    ]
}