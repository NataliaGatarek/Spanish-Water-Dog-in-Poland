function displayUserInfo() {
  let params = new URL(document.location).searchParams;
  let firstname = params.get("firstname");
  console.log("firstname", firstname);
  //document.getElementById("user.name").innerHTML = firstname;
}
  let pageTitle = "THANKYOU";
console.log(`document.title`, document.title);
//  DECIDING WHEN TO RUN displayUserInfo() BASED ON THE TITLE OF THE PAGE
if (document.title.toLowerCase() === pageTitle.toLowerCase()) {
  displayUserInfo();
}
