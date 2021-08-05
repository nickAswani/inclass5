  //ADD NEW ITEM TO END OF THE LIST
   var node = document.createElement('li');
   node.appendChild(document.createTextNode('cream'));
   document.querySelector('ul').appendChild(node);
   
   // ADD NEW ITEM TO START OF LIST
   var node1 = document.createElement('li');
   node1.appendChild(document.createTextNode('kale'));
   document.querySelector('ul').prepend(node1);
   
   // ADD A CLASS OF "cool" TO ALL LIST ITEMS
   var el = document.getElementsByTagName("LI").className="cool";
  
   //ADD A NUMBER OF ITEMS IN THE LIST TO THE HEADING
   var sum = document.getElementsByTagName('UL').getElementsByTagName("LI").length;