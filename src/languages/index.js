import content from "./fr.json";

const language = {
  content,
};
language.setLangue = lang => {
  //TODO : load the language and set it to language.content
  return lang;
}

language.t = key => {
  function lookKey(object, key) {
    return object ? object[key] : undefined;
  }
  const keys = key.split('.');
  return keys.reduce(lookKey, language.content);
}

export default language;