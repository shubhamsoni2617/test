export default (isChecked, filterList, setFilterList, setFilteredId) => {
  const tagsUpdated = [...filterList];
  let filteredId = [];
  tagsUpdated.forEach(tag => (tag.isChecked = isChecked));
  if (isChecked) {
    tagsUpdated.map(tag => filteredId.push(tag.id));
  }
  setFilterList(tagsUpdated);
  setFilteredId(filteredId);
};
