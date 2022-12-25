/* countries.js */
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  let con = '<option value="">Please select</option>';
  countries.forEach(function (country) {
    con +=
      "<option value=" + country.toLowerCase() + ">" + country + "</option>";
  });
  return con;
}
