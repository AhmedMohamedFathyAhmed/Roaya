var btn=document.getElementById("btn");
var statusInput=document.getElementById("status");
var nameInput=document.getElementById("name");
var numberInput=document.getElementById("number");
var ageInput=document.getElementById("age");
var salaryInput=document.getElementById("salary");
var phoneInput=document.getElementById("phone");
var phoneInputTwo=document.getElementById("phone2");
var priceInput=document.getElementById("price");

var resetInput=document.getElementsByClassName("control");
var currentIndexRaw;
var array


if(localStorage.getItem("listEmployee")==null){
    array=[];
}
else{
    
    array=JSON.parse(localStorage.getItem("listEmployee"));
    displayData();
}




btn.onclick=function addEmployee(){
    if(btn.innerHTML=="Save Data"){
        employee();
    }
    else{
        EditRow();
    }
    displayData();
    reset();
}

function employee(){
    
var employee={
    name:nameInput.value,
    status:statusInput.value,
    number:numberInput.value,
    age:ageInput.value,
    salary:salaryInput.value,
    phone:phoneInput.value,  
    phoneTwo:phoneInputTwo.value,  
    price:priceInput.value,  


}
    array.push(employee);
    console.log(array);
    localStorage.setItem("listEmployee",JSON.stringify(array));
}

function deleteItem(index){
    array.splice(index,1);
    localStorage.setItem("listEmployee",JSON.stringify(array));
    displayData();
}

function displayData(){

    let tr="";
    for(var i=0; i<array.length; i++){
    tr+=
    `
        <tr>
        <td>${array[i].name}</td>
        <td>${array[i].status}</td>
        <td>${array[i].number}</td>
        <td>${array[i].age}</td>
        <td>${array[i].salary}</td>
        <td>${array[i].phone}</td>
        <td>${array[i].phoneTwo}</td>
        <td>${array[i].price}</td>
        <td><button class="btn btn-danger" onClick="deleteItem(${i})">Delete</button></td>
        <td><button class="btn btn-info" onClick="Update(${i})">Update</button></td>
        </tr>
        
    `
}
    document.getElementById("tbody").innerHTML=tr;
}
    
function reset(){

    for(var i=0;i<resetInput.length;i++){
        resetInput[i].value="";
    }
}

function Update(i){

    nameInput.value=array[i].name;
    statusInput.value=array[i].status;
    numberInput.value=array[i].number;
    ageInput.value=array[i].age;
    salaryInput.value=array[i].salary;
    phoneInput.value=array[i].phone;
    phoneInputTwo.value=array[i].phoneTwo;
    priceInput.value=array[i].price;
    btn.innerHTML="update Employee";
    currentIndexRaw=i;

}

function EditRow(){
   
    var employee={
        "name":nameInput.value,
        "status":statusInput.value,
        "number":numberInput.value,
        "age":ageInput.value,
        "salary":salaryInput.value,
        "phone":phoneInput.value, 
        "phoneTwo":phoneInputTwo.value, 
        "price":priceInput.value,   
    
    }
       array[currentIndexRaw]=employee;
       localStorage.setItem("listEmployee",JSON.stringify(array));
        btn.innerHTML="Save Data";
        
}

function search(searchText){
    var tr="";
    for(var i=0;i<array.length; i++){
        
        if(array[i].name.toLowerCase().includes(searchText.toLowerCase())){
           
            tr+=
            `
                <tr>
                <td>${array[i].name}</td>
                <td>${array[i].status}</td>
                <td>${array[i].number}</td>
                <td>${array[i].age}</td>
                <td>${array[i].salary}</td>
                <td>${array[i].phone}</td>
                <td>${array[i].phoneTwo}</td>
                <td>${array[i].price}</td>
                <td><button class="btn btn-danger" onClick="deleteItem(${i})">Delete</button></td>
                <td><button class="btn btn-info" onClick="Update(${i})">Update</button></td>
                </tr>
            `
        }
       
}
    document.getElementById("tbody").innerHTML=tr;
    
}
// nameInput.onkeyup=function(){
//     validateName()
// }

// function validateName(){

//     var nameRegex=/^[A-Z][a-z]{2,7}$/;
//     if(!nameRegex.test(nameInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }



/*   ddddddddddd */

// ageInput.onkeyup=function(){
//     validateAge()
// }


// function validateAge(){

//     var ageRegex=/^(80|[2-7][0-9])$/;
//     if(!ageRegex.test(ageInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }

/*ccccccccccccc */

// phoneInput.onkeyup=function(){
//     validatePhone();
// }


// function validatePhone(){

//     var phoneRegex=/^(010|012|015)[0-9]{8}$/;
//     if(!phoneRegex.test(phoneInput.value)){
//         btn.disabled="true";
//         return false;
//     }
//     else{
//         btn.removeAttribute("disabled");
//         return true;
//     }

// }

