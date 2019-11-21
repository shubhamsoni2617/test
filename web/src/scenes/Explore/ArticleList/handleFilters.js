export default (
  isChecked,
  filterList,
  setFilterList,
  selected,
  setFiltersForMobile,
  filteredId,
  setFilteredId,
  mobileCheck,
  filteredTagsForMobile
) => {
  window &&
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: 'smooth'
    });
  let tagsToSearchMobile = [...filteredTagsForMobile];
  let tagsToSearch = [...filteredId];
  const tagsUpdated = [...filterList];
  let index = tagsUpdated.findIndex(tag => tag.id === selected);
  tagsUpdated[index].isChecked = isChecked;
  setFilterList(tagsUpdated);
  if (isChecked) {
    tagsToSearch.push(selected);

    if (!mobileCheck) {
      setFilteredId(tagsToSearch);
    } else {
      tagsToSearchMobile.push(selected);
      setFiltersForMobile(tagsToSearchMobile);
    }
  } else {
    if (!mobileCheck) {
      let i = tagsToSearch.indexOf(selected);
      tagsToSearch.splice(i, 1);
      setFilteredId(tagsToSearch);
    } else {
      let i = tagsToSearchMobile.indexOf(selected);
      tagsToSearchMobile.splice(i, 1);
      setFiltersForMobile(tagsToSearchMobile);
    }
  }
};
