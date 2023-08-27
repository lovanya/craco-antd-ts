/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')
const CracoLess = require('craco-less')

const pathResolve = (p) => path.join(__dirname, p)

module.exports = {
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  webpack: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
