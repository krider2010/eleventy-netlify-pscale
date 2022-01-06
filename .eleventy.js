
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const english = new Intl.DateTimeFormat('en-UK');

module.exports = (eleventyConfig) => {
  let markdownLibrary = markdownIt({
    html: true, // html tag inside source
    breaks: true, // use '\n' as <br>
    linkify: true, // Autoconvert URL-like text to links
  });

  // Libraries
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Filters
  eleventyConfig.addFilter("dtFormat", function(date) {
    return english.format(date);
	});
  eleventyConfig.addFilter("markdown", function(str) {
	  return markdownLibrary.render(str);
	});


  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  }
};
