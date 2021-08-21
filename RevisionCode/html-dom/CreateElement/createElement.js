      var button = document.createElement("BUTTON");
      button.innerHTML = "Change text";
      button.onclick = function() {
        var normalElements = document.getElementsByClassName("normal");
        for (let element of normalElements) {
          element.setAttribute("class", "highlighted");
        }
        document.getElementById("myText").innerHTML = "Text is changed";
      }
      document.body.appendChild(button);

      function changeText(){
        let element = document.getElementById("myText");
       let newClass = document.createAttribute("class");
        newClass.value = "highlighted";
        element.setAttributeNode(newClass);
      }
