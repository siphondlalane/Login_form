function getInfo()
{
    var username = document.getElementById("logemail").value
    var password = document.getElementById("logpass").value

    if (username  === "" && password === "")
    {
        alert("provide valid username and password")
    }
    else
    {
        //Read from Database
        alert("You're username is " + username + " " + password)
    }
    

    
}