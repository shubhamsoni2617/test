export default (setFilters, getFilters) => {
  setTimeout(() => {
    getFilters()
      .then(res => {
        Array.isArray(res.data.data) &&
          res.data.data.forEach(filter => {
            return { ...filter, isChecked: false, id: filter.tid };
          });
        setFilters(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, 1000);
};
