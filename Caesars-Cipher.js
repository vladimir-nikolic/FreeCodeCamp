function rot13(str) {

    let string = [];
    let ascNum=0;
    let char;

  for(let i=0;i<str.length;i++){

    ascNum=str.charCodeAt(i);

          if(ascNum>= 78 && ascNum<=90){

             char = String.fromCharCode((ascNum-13));
          
          }else if(ascNum>= 65 && ascNum<78){

             char = String.fromCharCode((ascNum+13));

          }else{

            char = String.fromCharCode((ascNum));
               
          }
      string += char;
  }
  
  return string;
}

rot13("SERR PBQR PNZC");
