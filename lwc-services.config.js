// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
// module.exports = {
//     resources: [{ from: 'src/client/resources/', to: 'dist/resources/' }



//             ],

//             sourceDir: './src/client',


//             devServer: {
//                 proxy: { '/': 'http://localhost:3002' }
//             }

// };

module.exports = {
    //  buildDir: './docs',
    resources: [{ from: 'src/client/resources', to: 'docs/resources/' },
    // {
    //     from: 'node_modules/@salesforce-ux/design-system/assets',
    //     to: 'src/SLDS'
    // },
    {
        from: 'node_modules/@salesforce-ux/design-system/assets',
        to: 'docs/SLDS'
    }
    ],
    sourceDir: './src/client',
    // moduleDir: './src/client/modules',
    devServer: {
        proxy: { '/': 'http://localhost:3002' }
    }
};
