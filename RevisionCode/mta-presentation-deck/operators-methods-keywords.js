
     // var/let/const   
    function letvarconst() {
    console.log('letvarconst');
    let x = 1;
    if (x == 1) {
      var y = 2;
      let z = 3;
    }
    console.log(y);
    try {
      console.log(z);
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
    const a = 4;
    try {
      a = 5;
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
  }

//Concatenate strings and number 
var x = 5 + 6 + "5";
console.log(x, typeof(x));


// i++ vs ++i   
  function plusplus() {
    console.log('plusplus');
    let x = 5;
    let y = 5;
    console.log(++x); //6
    console.log(y++); //5
  }
  
     let arr = [];
     for(i = 0; i < 3; ++i){
        arr.push(i)
        console.log(arr);
     };


     //Compound Operators
    //  x = 2;
    //  x += 5;
    //  console.log(x);

    //  y = 100;
    //  y %= 13;
    //  console.log( "modulous remainder is " + y);