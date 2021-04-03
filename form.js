function displayUserInfo() {
  let params = new URL(document.location).searchParams;
  let name = params.get("name");
  console.log("name", name);
  let lastname = params.get("lastname");
  console.log("lastname", lastname);
  document.getElementById("user.name").innerHTML = lastname; name;
}



  let pageTitle = "THANKYOU";
console.log(`document.title`, document.title);
//  DECIDING WHEN TO RUN displayUserInfo() BASED ON THE TITLE OF THE PAGE
if (document.title.toLowerCase() === pageTitle.toLowerCase()) {
  displayUserInfo();
}