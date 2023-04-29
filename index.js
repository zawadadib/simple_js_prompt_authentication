
let a = "palestine"

for (limit=0;limit<4;limit++)
{
    let user = prompt("enter your password")

    if (user == a)
    {
        console.log("password correct")
        break
    }
    else
    {
        alert("wrong password, try again!")
        console.log("wrong password")
    }


}

