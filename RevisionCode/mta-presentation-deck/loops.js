      let myStrings = [ 'Charlie', 'Alan', 'Bob', 'Dwight' ];
            //While
            let index = 0;
            while (index < myStrings.length) {
            console.log(myStrings[index]);
            index++;
            }
            //Do while 
            index = 0;
            do {
            console.log(myStrings[index]);
            index++;
            } while (index < myStrings.length);
            //For
            console.log('-- for');
            for (let i = 0; i < myStrings.length; i++) {
            console.log(myStrings[i]);
            }

            console.log('-- for of');
            for (let s of myStrings) {
            console.log(s);
            }

            console.log('-- for in');
            for (let s in myStrings) {
            console.log(myStrings[s]);
            }

            let myStringObject = { Goalkeeper: 'Alan', Defender: 'Bob', Midfield: 'Charlie', Attack: 'Dwight' };

            console.log('-- for in with object');

            for (let key in myStringObject) {
            console.log(`${key}: ${myStringObject[key]}`);
            }

            myStrings.sort();
            console.log('-- for after sort');
            console.log(myStrings);

            myStrings.push('Edward');
            console.log('-- for after push');
            console.log(myStrings);

            console.log(`Popped value: ${myStrings.pop()}`);
            console.log('-- for after pop');
            console.log(myStrings);

            myStrings.unshift('Freddie');
            console.log('-- for after unshift');
            console.log(myStrings);

            console.log(`Popped value: ${myStrings.shift()}`);
            console.log('-- for after shift');
            console.log(myStrings);

            console.log('-- 3rd element');
            console.log(myStrings[2]);
        
        // 2 dimensional arrays/loops
            
        var details = new Array();

        details[0]=new Array(3);
        //^ array with 3 items 
        details[0][0]="Example 1";
        details[0][1]="Example 2";
        details[0][2]="Example 3";

        details[1]=new Array(2);
        //^array with 2 items 
        details[1][0]="Example 4";
        details[1][1]="Example 5";

        document.write(details[0][2]);
        //prints out Example 1-3
        // for(i=0; i<=2; i++){
        // document.write(details[0][i]);
        // document.write("<br>");

        // Prints out example 1-5 
        for(j=0; j<=1; j++){
        for(i=0; i<=2; i++){
        document.write(details[j][i]);
        document.write("<br>");
        }
        };
