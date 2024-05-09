import Button from "./Button"

// const image = "/images/tech-1.jpg"


const students = [
  {
    name: "Oyinkansola",
    image: "/images/tech-1.jpg",
    phoneNumber: "08129983797",
    email: "Oyinkansola@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Ayomide",
    image: "/images/tech-2.jpg",
    phoneNumber: "0810000000",
    email: "Ayomide@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Wale",
    image: "/images/tech-3.jpg",
    phoneNumber: "08130000000",
    email: "Wale@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Chucks",
    image: "/images/tech-3.jpg",
    phoneNumber: "08140000000",
    email: "Chucks@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Abiola",
    image: "/images/tech-3.jpg",
    phoneNumber: "08150000000",
    email: "Abiola@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Dami",
    image: "/images/tech-3.jpg",
    phoneNumber: "08160000000",
    email: "Dami@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Temidayo",
    image: "/images/tech-3.jpg",
    
    phoneNumber: "081700000000",
    email: "Temidayo@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Taiwo",
    image: "/images/tech-3.jpg",
    
    phoneNumber: "08180000000",
    email: "Taiwo@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  },
  {
    name: "Iremide",
    image: "/images/tech-3.jpg",
    
    phoneNumber: "08190000000",
    email: "Iremide@gmail.com",
    skills: [
      {
        data: "Html",
        emoji: "😁"
      },
      {
        data: "Css",
        emoji: "🤩"
      },
      {
        data: "Javascript",
        emoji: "🦾"
      },
      {
        data: "Boostrap",
        emoji: "😎"
      },
      {
        data: "React",
        emoji: "🤺"
      },
    ]
  }
]

function App(){
return <>
 
   
   {students.map((student)=>  <div className="body">
  <img src={student.image} alt="" />
  <h1>{student.name}</h1>
   <p>{student.email}</p>
   {student.skills.map((skill)=> <Button skill={skill.data} emoji={skill.emoji}/>)}
    
  </div>)}

  
  </>
}

export default App