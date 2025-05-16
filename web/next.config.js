module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Optionally, if you want to enforce src/pages
  webpack(config) {
    config.resolve.modules.push(__dirname + '/src');
    return config;
  },
}