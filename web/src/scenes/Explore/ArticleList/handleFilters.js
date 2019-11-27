export default (
  isChecked,
  filterList,
  setFilterList,
  selected,
  setFiltersForMobile,
  setFilteredId,
  mobileCheck,
  hashId
) => {
  window &&
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: 'smooth'
    });
  const updatedFilteredlist = [...filterList];
  let index = updatedFilteredlist.findIndex(list => list.id === selected);
  if (index > -1) {
    updatedFilteredlist[index].isChecked = isChecked;
  }
  let indexHash = updatedFilteredlist.findIndex(list => list.id == hashId);
  if (indexHash > -1) {
    updatedFilteredlist[indexHash].isChecked = true;
  }
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
