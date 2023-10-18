let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{    //make Array of all selected buttons
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);   // to evaluate the mathematical expression stored in the string variable
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input').value = string;
        }
        else{
        // console.log(e.target)
        string = string + e.target.innerHTML; //Append the next click button string 
        document.querySelector('input').value = string;}
    })

})