function displayUserInfo() {
  let params = new URL(document.location).searchParams;
  let name = params.get("name");
  console.log("name", name);
  let lastname = params.get("lastname");
  console.log("lastname", lastname);
  document.getElementById("user.name").innerHTML = name;
  document.getElementById("user.details").innerHTML = lastname;
   let cnt = params.get("cnt");
  console.log("cnt", cnt);
  document.getElementById("user.cnt").innerHTML = cnt;
  let age = parseInt(params.get('age'))
  console.log("age", age);
  document.getElementById("user.age").innerHTML = age;
  let have = params.get('have');
  console.log("have", have);
  let many = parseInt(params.get('many'))
  console.log("many", many)
  document.getElementById("user.many").innerHTML = many;
  document.getElementById("user.have").innerHTML = have;
}



  let pageTitle = "THANKYOU";
console.log(`document.title`, document.title);
if (document.title.toLowerCase() === pageTitle.toLowerCase()) {
  displayUserInfo();
}