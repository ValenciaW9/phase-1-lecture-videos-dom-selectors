function textContent(rootNode) {
    if ('textContent' in document.createTextNode(''))
      return rootNode.textContent;
  
    var childNodes = rootNode.childNodes,
        len = childNodes.length,
        result = '';
    
    for (var i = 0; i < len; i++) {
      if (childNodes[i].nodeType === 3)
        result += childNodes[i].nodeValue;
      else if (childNodes[i].nodeType === 1) 
        result += textContent(childNodes[i]);
    }
  
    return result;
  }
  