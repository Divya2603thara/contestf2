function add(){
    let name=document.getElementById('name').value;
    let profession=document.getElementById('profession').value;
    let age=document.getElementById('age').value;
    console.log(name,profession,age);

    if(name === '' || profession === '' || age === ''){
        const main=document.getElementById('main');
        main.style.color='red';
        main.innerHTML='Error:Please Make Sure All the fields are filled before adding in an employee !'
        main.style.marginLeft='30px';
    }else{
        main.innerHTML='Success : Employee Added!'
        main.style.color='green';
        main.style.marginLeft='30px';
        updateTable();
    }
}
function updateTable() {
    let employeeListElement = document.getElementById("employeeList");
    employeeListElement.innerHTML = "";
    
    employeeList.forEach(employee => {
      let row = document.createElement("tr");
      let slNo = document.createElement("td");
      let name = document.createElement("td");
      let profession = document.createElement("td");
      let age = document.createElement("td");
      let deleteBtn = document.createElement("button");
      
      slNo.innerHTML = employee.id;
      name.innerHTML = "Name: "+employee.name;
      profession.innerHTML = "Profession: " + employee.profession;
      age.innerHTML = "Age: " + employee.age;
      deleteBtn.innerHTML = "Delete User";
      deleteBtn.onclick = function() {
        deleteEmployee(employee.id);
      };
      row.appendChild(deleteBtn);
      
      row.appendChild(slNo);
      row.appendChild(name);
      row.appendChild(profession);
      row.appendChild(age);
      
      employeeListElement.appendChild(row);
      employeeListElement.appendChild(deleteBtn);
    });
  }
  
  function deleteEmployee(id) {
    employeeList = employeeList.filter(employee => employee.id !== id);
    updateTable();
  }
