// Write your code here!
var elem = document.querySelector('main#main');
elem.parentNode.removeChild(elem);

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = "YOUR-NAME is the champion";