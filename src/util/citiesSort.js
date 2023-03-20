const citiesSort = (cities) => {
  return cities.sort((a, b) => {
    if (a.temp > b.temp) {
      return 1;
    }
    if (a.temp < b.temp) {
      return -1;
    }
    return 0;
  });
};

export default citiesSort;
