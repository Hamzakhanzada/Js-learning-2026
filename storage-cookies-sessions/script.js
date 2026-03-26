// localStorage => ap ka browser ka andar data store karna jo ka browser band hona per bhi data delete nahi hoga

// sessionStorage => yeh ap ka data temporaily data store karta h mtlb tab band to data gaya

// Cookies => yeh bhi data store karta ha  and apka data browers ki Cookies name ki property ma save hota ha and yeh cookie concept kam data yeh light data ke liya hota ha



// localStorage
// // store kesa karen;
localStorage.setItem("name","Hamza");
// // fetch kesa karen;
let val = localStorage.getItem("name");
// // remove kesa karen;
localStorage.removeItem("name");
// // update kesa karen
localStorage.setItem("name","Talha");
