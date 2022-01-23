// We need this file to resolve an issue with Apollo Client: https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md#notices
const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [...defaultResolver.sourceExts, "cjs"],
};
