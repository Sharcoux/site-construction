import content from "./fr.json";

const language = {
  content,
};
language.setLangue = lang => {
  const langue = {};
  //TODO : load the language and set it to language.content
  Object.keys(langue).forEach(key => language.content[key] = langue[key]);
  return lang;
}

language.t = key => {
  function lookKey(object, key) {
    return object ? object[key] : undefined;
  }
  const keys = key.split('.');
  return keys.reduce(lookKey, language.content);
}

language.available = ['fr'];

export default language;