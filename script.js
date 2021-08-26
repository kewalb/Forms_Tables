//fetching data from form.

myData = () => {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.getElementsByName("gender");
    let food_check = document.getElementsByName("optradio");
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    var gen;
    var food = ""

    for(var i=0; i<gender.length; i++)
    {
        if(gender[i].checked){
            gen = gender[i].value
        }
    }
    for(var i=0; i<food_check.length; i++){
        if(food_check[i].checked){
            food = food + food_check[i].value + ","
        }
    }

    var data = [fname, lname, address, pincode, gen, food, state, country]

    tab_body = document.getElementById("table-body");
    tr = document.createElement('tr');
    data.forEach(element => {
            td = document.createElement('td')
            td.innerHTML = element
            tr.append(td)
            console.log(element)
    })
    tab_body.appendChild(tr)
    document.getElementById('frm').reset()
 
}