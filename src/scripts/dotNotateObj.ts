export default // from https://stackoverflow.com/questions/33005575/how-to-convert-json-object-structure-to-dot-notation
function dotNotateObj(obj: JSON, target = {}, prefix = '') {
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      dotNotateObj(obj[key], target, prefix + key + '.');
    } else {
      return (target[prefix + key] = obj[key]);
    }
  });

  return target;
}
