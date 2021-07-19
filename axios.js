axios.get("https://api.cryptonator.com/api/ticker/btc-usd\n")
.then(res=>{
    console.log(res.data.ticker.price)
})
.catch(err=>{
    console.log("err")
})

const fetchBitcoinPrice= async()=>{
    try{
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd\n")
        console.log(res.data.ticker.price)
    } catch(e){
        console.log("error",e)
    }
}