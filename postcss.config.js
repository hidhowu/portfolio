// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './**/*.html',
        './**/*.js',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss,
    ]
}
