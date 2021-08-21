function onReviewOrder() {
    let details = `
      Name: ${document.forms["myForm"]["fname"].value}<br />
      Date of birth: ${document.forms["myForm"]["date"].value}<br />
      Telephone number: ${document.forms["myForm"]["phone"].value}<br />
      Choice of item: ${document.forms["myForm"]["food"].value}<br />
      Quantity: ${document.forms["myForm"]["quantity"].value}<br />
      Colour: ${document.forms["myForm"]["colour"].value}<br />
    `;
    document.getElementById("orderDetails").innerHTML = details;
  }

  function compareInput(){
    let form = document.forms["myForm"];
    let input1 = document.forms["myForm"]["input1"].value;
    let input2 = document.forms["myForm"]["input2"].value;
    if(input1.length > input2.length) {
        document.getElementById("print").innerHTML = input1;
    }
    else{
        document.getElementById("print").innerHTML = input2;
    };
};