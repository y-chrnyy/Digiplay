/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /\.svg$/,

    //         use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    //     })

    //     return config
    // }

    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
        return config
    }
};

export default {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        fileLoaderRule.exclude = /\.svg$/i
        return config
    },
};
