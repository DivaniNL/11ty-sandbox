module.exports = async () => {
  const result = await fetch("https://fdnd.directus.app/items/person/150");
  const json = await result.json();
  console.log(json)
  return json.data.avatar;
};