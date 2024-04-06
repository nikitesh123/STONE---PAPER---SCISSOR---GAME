let user = prompt("Enter Stone,  Paper or Scissor")

let cpuI = Math.floor(Math.random() *3)
let cpu = ["Stone", "Paper", "Scissor"][cpuI]

const match = (cpu,user) => {
    if (cpu === user){
        return "Nobody Win"
    }
    else if(cpu === "Stone" && user === "Paper"){
        return user;
    }
    else if(cpu === "Stone" && user === "Scissor"){
        return cpu
    }
    else if(cpu === "Paper" && user === "Stone"){
        return cpu
    }
    else if(cpu === "Paper" && user === "Scissor"){
        return user
    }
    else if(cpu === "Scissor" && user === "Stone"){
        return user
    }
    else if(cpu === "Scissor" && user === "Paper"){
        return cpu
    }
    
    
}

 let result = match(cpu,user)
 document.write(`CPU is ${cup} <br> USER is ${user} <br> The WINNER is ${result.toUpperCase()}`)
