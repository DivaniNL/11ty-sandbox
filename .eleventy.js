module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("./src/css");
eleventyConfig.addWatchTarget("./src/css/");
eleventyConfig.addFilter("randomItem", (arr) => {
console.log(arr);
  arr.sort(() => {
    return 0.5 - Math.random();
  });
  console.log(arr.slice(0, 1));
  return arr.slice(0, 1);
});
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};