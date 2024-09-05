"use server"

// You can use server side code in client side and it helps to control forms 
import fs from "fs/promises"
export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("harry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`) 
}