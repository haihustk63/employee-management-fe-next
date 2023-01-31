const path = require("path");

module.exports = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "en",
    localeDetection: false,
    debug: process.env.NODE_ENV === "development",
    localePath: path.resolve("./public/locales"),
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
};
