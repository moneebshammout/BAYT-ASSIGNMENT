/**
 * Gets the title and location of the items and sort the list with the respect for location.
 *
 * @param {Array.<object>} itemList
 *
 * @returns {object} Title and location.
 */
exports.getTitleAndLocation = (itemList) => {
  const data = itemList.map((item) => ({
    title: item.title,
    location: item.city ? `${item.city} , ${item.country}` : item.country,
  }));

  return data.sort((a, b) => {
    const locationA = a.location.toUpperCase();
    const locationB = b.location.toUpperCase();

    if (locationA < locationB) {
      return -1;
    }
    if (locationA > locationB) {
      return 1;
    }
    return 0;
  });
};
