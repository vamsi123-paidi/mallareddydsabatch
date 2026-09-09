function handleSubmit(event){
    event.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value
    const output = document.getElementById("output")
    output.textContent = '${email}  is ${age} and  ${output}'
    console.log("hello this is from external js file")
}