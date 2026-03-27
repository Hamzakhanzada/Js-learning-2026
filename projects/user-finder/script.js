let users = [
  {
    name: "amisha rathore",
    pic: "https://plus.unsplash.com/premium_photo-1773833960328-f2dd56dc729f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://images.unsplash.com/photo-1659284028390-491fe54afa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1730309047750-1fcb9bd04605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://plus.unsplash.com/premium_photo-1661342444688-21a3a6a0dd4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://images.unsplash.com/photo-1773947331776-1ddd78a95f58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://images.unsplash.com/photo-1587424280049-e6f8c13bee59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://images.unsplash.com/photo-1646323354823-644fd36651bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];


function showUsers(arr) {
    arr.forEach(user => {
        const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img")
    const blurred = document.createElement("div");
    blurred.style.backgroundImage = `url(${user.pic})`
    blurred.classList.add("blurred-layer");
    const content = document.createElement("div");
    content.classList.add("content");
    const heading = document.createElement("h3");
    heading.textContent = user.name
    const about = document.createElement("p");
    about.textContent = user.bio

    content.appendChild(heading);
    content.appendChild(about);
    card.appendChild(img)
    card.appendChild(blurred)
    card.appendChild(content)

    document.querySelector(".cards").appendChild(card)
    });
    



}

showUsers(users)

let inp = document.querySelector(".inp")
inp.addEventListener("input",function () {
  let searchText = inp.value.trim().toLowerCase();
   let newUsers =  users.filter(function (user) {
        if (user.name.toLowerCase().startsWith(searchText)) {
            return user.name
        } else {
          
        }
    })
document.querySelector(".cards").innerHTML = ""
if (newUsers.length === 0) {
     document.querySelector(".cards").innerHTML = "<p>No user found! 😕</p>";
     document.querySelector(".cards").style.color = "white"
} else{
    showUsers(newUsers)

}

})
