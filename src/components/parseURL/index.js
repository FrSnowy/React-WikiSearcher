export default function (location, key) {
  if (location.search === '') return null;
  
  const request = location.search;
  const parameters = request.match(/[^&?]*?=[^&?]*/g)
    .map(param => param.split('='))
    .map(param => ({ key: param[0], value: param[1] }));

  const result = parameters.find(param => param.key === key);

  if (result) {
    return decodeURIComponent(result.value)
  }

  return null
}
