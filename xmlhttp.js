fetch("https://api.cryptonator.com/api/ticker/btc-usd")
.then(res=>{
    console.log("res",res)
    return(res.json())
})
.then(data=>{
    console.log("parsed")
    console.log(data.ticker.price)
})
.catch(e=>{
    console.log("error",e)
})