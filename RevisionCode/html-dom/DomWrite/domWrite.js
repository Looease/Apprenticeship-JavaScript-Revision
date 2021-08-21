   // Document Write 
   let header = document.getElementById("header");
   function clickMe(){
       document.write("Goodbye");
   };
   //Document Inner HTML 
   // function clickMe(){
   //     document.getElementById("header").innerHTML = "Goodbye";
   // }
      

       //Convert array to list and print to the dom
   function printList(){
       var fruits, text, fLen, i; fruits = ["Banana", "Orange", "Apple", "Mango"];
   
       fLen = fruits.length; text = "<ul>";
       for (i = 0; i < fLen; i++) {
       text += "<li>" + fruits[i] + "</li>";}
       text += "</ul>";

       document.getElementById("list").innerHTML = text;
   };
   printList();

   //Create Attribute / Set Attribute
   function myFunction() {
       var h1 = document.getElementsByTagName("H1")[0];
       var att = document.createAttribute("class");
        att.value = "democlass";
       h1.setAttributeNode(att);
   };
       
   //Returns a as 100. Declares a new A variable in scope then returns b.
   var c = 100;
   function myFunction(num) {
   var c = (num % 2 == 0) ? (num / 2) : (num * 2);
   return c;
   }
   b = myFunction(7);
   console.log("C = " + c)

   //Returns 14. Does not declare a new variable in scope and redefines a.
   var a = 100;
   function myFunction(num) {
   a = (num % 2 == 0) ? (num / 2) : (num * 2);
   return a;
   }
   b = myFunction(7);
   console.log("A = " + a)