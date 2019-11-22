export default (
  isChecked,
  filterList,
  setFilterList,
  selected,
  setFiltersForMobile,
  setFilteredId,
  mobileCheck
) => {
  window &&
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: 'smooth'
    });
  const updatedFilteredlist = [...filterList];
  let index = updatedFilteredlist.findIndex(list => list.id === selected);
  updatedFilteredlist[index].isChecked = isChecked;
  let filteredData = [];
  updatedFilteredlist.map(el => {
    if (el.isChecked) {
      filteredData.push(el.id);
    }
  });
  setFilterList(updatedFilteredlist);
  if (!mobileCheck) {
    setFilteredId(filteredData);
  } else {
    setFiltersForMobile(filteredData);
  }
};
