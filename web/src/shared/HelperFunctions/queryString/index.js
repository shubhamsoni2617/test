export default function getQueryStringParams() {
  return location.search
    ? (/^[?#]/.test(location.search)
        ? location.search.slice(1)
        : location.search
      )
        .split('&')
        .reduce((params, param) => {
          let [key, value] = param.split('=');
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          return params;
        }, {})
    : {};
}
