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
      setFiltersForMobile([...filteredTagsForMobile, selected]);
    }
  } else {
    let i = tagsToSearch.indexOf(selected);
    tagsToSearch.splice(i, 1);

    if (!mobileCheck) {
      setFilteredId(tagsToSearch);
    } else {
      let i = filteredTagsForMobile.indexOf(selected);
      filteredTagsForMobile.splice(i, 1);
      setFiltersForMobile([...filteredTagsForMobile]);
    }
  }
};
