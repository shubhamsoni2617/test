export function setLocalStorage() {
  let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
  if (!storageValues || !storageValues.length) {
    let recentlySearched = [];
    localStorage.setItem('recentlySearched', JSON.stringify(recentlySearched));
  }
}

export function setValuesInLocalStorage(value) {
  let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
  if (storageValues) {
    if (storageValues.length > 7) {
      storageValues.splice(storageValues.length - 1);
    }
    if (
      storageValues.indexOf(value.trim().toLowerCase()) !== -1 &&
      value.trim().length
    ) {
      storageValues.splice(
        storageValues.indexOf(value.trim().toLowerCase()),
        1
      );
    }
    if (
      storageValues.indexOf(value.toLowerCase()) === -1 &&
      value.trim().length
    ) {
      storageValues.unshift(value.trim().toLowerCase());
      localStorage.setItem('recentlySearched', JSON.stringify(storageValues));
    }
  }
}
