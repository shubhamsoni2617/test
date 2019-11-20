export default (
  isChecked,
  filterList,
  setFilterList,
  selected,
  setFiltersForMobile,
  filteredId,
  setFilteredId,
  mobileCheck
) => {
  window &&
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: 'smooth'
    });
  let tagsToSearch = [...filteredId];
  const tagsUpdated = [...filterList];
  let index = tagsUpdated.findIndex(tag => tag.id === selected);
  tagsUpdated[index].isChecked = isChecked;
  setFilterList(tagsUpdated);
  if (isChecked) {
    tagsToSearch.push(selected);
    setFiltersForMobile(tagsToSearch);
    if (!mobileCheck) {
      setFilteredId(tagsToSearch);
    }
  } else {
    let i = tagsToSearch.indexOf(selected);
    tagsToSearch.splice(i, 1);
    setFiltersForMobile(tagsToSearch);
    if (!mobileCheck) {
      setFilteredId(tagsToSearch);
    }
  }
};
