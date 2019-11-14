export default (setFilters, getFilters) => {
  setTimeout(() => {
    getFilters()
      .then(res => {
        let data = res.data.data.map(filter => {
          return { ...filter, isChecked: false };
        });
        setFilters(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, 1000);
};
