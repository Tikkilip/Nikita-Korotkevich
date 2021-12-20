let btn1 = document.createElement('button');
document.body.append(btn1);
btn1.innerText = "user";

let btn2 = document.createElement('button');
document.body.append(btn2);
btn2.innerText = "company";

const div_user = document.createElement('div');
div_user.id = "user";
document.body.append(div_user);

const div_company = document.createElement('div');
div_company.id = "company";
document.body.append(div_company);

btn1.addEventListener("click", () => {
btn1.className = "active_btn";
btn2.className = "none";
div_company.innerHTML = "";

let userName = document.createElement('p');
userName.className = "username";
div_user.append(userName);

let avatar = document.createElement('img');
div_user.append(avatar);

let employment = document.createElement('p');
employment.className = "employment";
div_user.append(employment);

let gender = document.createElement('p');
gender.className = "gender";
div_user.append(gender);

let url = "https://random-data-api.com/api/users/random_user";

const promise = fetch(url);

promise.then((response) => {
    return response.json()
}).then((data) => {
    userName.innerText = data.username;
    avatar.src = data.avatar;
    gender.innerText = data.gender;
    employment.innerText = data.employment.title;
});
});


btn2.addEventListener("click", () => {

btn2.className = "active_btn";
btn1.className = "none";
div_user.innerHTML = "";

let companyName = document.createElement('p');
companyName.className = "companyName";
div_company.append(companyName);

let logo = document.createElement('img');
div_company.append(logo);

let address = document.createElement('p');
address.className = "address";
div_company.append(address);

let employee = document.createElement('p');
employee.className = "employee";
div_company.append(employee);

let url = "https://random-data-api.com/api/company/random_company";

const promise = fetch(url);

promise.then((response) => {
    return response.json()
}).then((data) => {
    companyName.innerText = data.business_name;
    logo.src = data.logo;
    address.innerText = data.full_address;
    employee.innerText = data.employee_identification_number;
});
});