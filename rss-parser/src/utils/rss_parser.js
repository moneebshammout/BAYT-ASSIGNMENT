/**
 * Parses location using Regex.
 *
 * @param {string} content Content of the RSS feed item.
 *
 * @returns {string} Location.
 */
const parseLocation = (content) => {
  const locationRegex = /\nJob Location:\n(.*)\n/;
  const matched = content.match(locationRegex);
  return matched ? matched[1] : '';
};

/**
 * Parse the RSS feed and return the title and location.
 * @param {Array.<object>} itemList
 *
 * @returns {object} Title and location.
 */
exports.getTitleAndLocation = (itemList) =>
  itemList.map((item) => ({
    title: item.title,
    location: parseLocation(item.contentSnippet),
  }));
