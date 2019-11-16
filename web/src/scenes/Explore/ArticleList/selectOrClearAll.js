export default (isChecked, filterList, setFilterList, setFilteredId) => {
  const tagsUpdated = [...filterList];
  tagsUpdated.forEach(tag => (tag.isChecked = isChecked));
  setFilterList(tagsUpdated);
  setFilteredId([]);
};
