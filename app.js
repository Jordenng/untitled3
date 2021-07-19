const login=async(username,password)=>{
    if (!username||!password) throw 'missing credentials'
    if (password==='yarden') return ' WELCOME'
    throw 'invalid password'
}
login("yardeni",'yarden')
.then(msg=>{
    console.log("loggedin")
    console.log(msg)
}).catch(err=>{
    console.log("err")
    console.log(err)
})