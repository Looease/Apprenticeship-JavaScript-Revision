    const input = document.createElement("input");
    const button = document.createElement("button");

      function parseIntOrThrow(){
         let x = document.getElementById("input").value;
          let y = parseInt(x);
          if (isNaN(y)){
              throw{
                  message: `${x} is non a number`
              } 
              return y;        
          }
      }
    // Try Catch Finally
    try {
      parseIntOrThrow();
    } catch (e) {
        console.log('Error found: ' + e.message);
    }   finally {
        console.log("uh oh")
        };   

