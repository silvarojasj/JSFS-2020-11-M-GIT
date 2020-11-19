const users = [
    {
      id: 1,
      name: "Ada",
      username: "ada@ada-school.org",
      rol: "MENTOR",
    },
    {
      id: 2,
      name: "Mentor",
      username: "mentor@ada-school.org",
      rol: "MENTOR",
    },
    {
      id: 3,
      name: "Mentor 2",
      username: "mentor2@ada-school.org",
      rol: "MENTOR",
    },
  ];
  

  for(const i in  users){
    console.log(i,users[i].rol);
}
console.log("---------------------");
Object.keys(users).forEach(key => console.log(key,users[key].rol));

console.log("---------------------");
Object.keys(users).forEach(function(key) {
    console.log(key,users[key].rol);
})
