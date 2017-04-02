module.exports = {
  create : {
    id: _id,
    class: _class
  }
};

/**
 * Globals
 */

const selectorTypes = {
  class: 'class',
  id: 'id'
}

/**
 * Module methods
 */

function _class (name, definitions) {
  return _style(name, definitions, selectorTypes.class);
}

function _id (name, definitions) {
  return _style(name, definitions, selectorTypes.id);
}

/**
 * Helper functions
 */

function _style(name, definitions, type) {
  const style = document.createElement('style');
  style.type = 'text/css';
  const typePrefix = _getTypePrefix(type);
  style.innerHTML = `${typePrefix}${name} { ${definitions} }`;
  document.getElementsByTagName('head')[0].appendChild(style);  
  return name;
}

function _getTypePrefix (type) {
  switch (type) {
    case 'class':
      return '.';
    case 'id':
      return '#';
    default:
      throw `CSS selector type, ${type}, not recognized.`;
  }
}