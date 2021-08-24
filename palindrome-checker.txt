function palindrome(str) {

    let regex = /[^A-Za-z0-9]/g;
    let newstr = str.replace(regex, "");
    let s = newstr.split("").reverse().join("");
    if(newstr.toLowerCase()==s.toLowerCase()){
      return true;
    }else{
      return false;
    } 
  
}



palindrome("eye");