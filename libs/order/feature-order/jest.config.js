module.exports = {
    displayName: 'order-feature-order',
    preset: '../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': [
            'babel-jest',
            { cwd: __dirname, configFile: './babel-jest.config.json' },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../coverage/libs/order/feature-order',
};
