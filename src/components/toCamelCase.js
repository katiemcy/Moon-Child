const toCamelCase = (str) => {
    return str.split(' ').map(function(word, index){
      // If it is the first word, keep the first letter as lowercase
      if(index === 0){
        return word.toLowerCase();
      }
      // If it is not the first word, convert the first letter to uppercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

export default toCamelCase;