const citiesSort = (cities) => {
  return cities.sort((a, b) => {
    if (a.temperature > b.temperature) {
      return 1;
    }
    if (a.temperature < b.temperature) {
      return -1;
    }
    return 0;
  });
};

export default citiesSort;
