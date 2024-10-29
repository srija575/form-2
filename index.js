function demo(){
    if(document.getElementById("us").value== 'Netflix@gmail.com' && document.getElementById("pw").value== 'Netflix123'){
    window.location.href=
    alert("Login successful");
    }
    else{
        alert("Enter valid username and password");
        return;
    }
}