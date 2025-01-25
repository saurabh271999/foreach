

//  const values = arr.forEach((item) => {
//     // console.log(arr)
//     return item
// })
// const myNums = [22,24,90,45,56,12,,67,78]

// const newNums = myNums.filter((num) => {
//    return num > 40
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num>40){
//         newNums.push(num)
//     }
// })
// console.log(newNums)
const users = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      isActive: true,
      hobbies: ["reading", "hiking", "swimming"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 45,
      email: "jane.smith@example.com",
      isActive: false,
      hobbies: ["cooking", "yoga"]
    },
    {
      id: 3,
      name: "tony stark",
      age: 55,
      email: "alice.johnson@example.com",
      isActive: true,
      hobbies: ["photography", "traveling"]
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 45,
      email: "bob.brown@example.com",
      isActive: false,
      hobbies: ["golf", "fishing"]
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 24,
        email: "alice.johnson@example.com",
        isActive: true,
        hobbies: ["photography", "traveling"]
      },
      {
        id: 3,
        name: "rockey",
        age: 45,
        email: "alice.johnson@example.com",
        isActive: true,
        hobbies: ["photography", "traveling"]
      },
  ];

  let findData = users.filter((item) => item.age === 45)
  console.log(findData)

  findData = users.filter((item) => {
    return item.id === 3 && item.age === 24})
  console.log(findData)



