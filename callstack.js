const fakePromise=(url)=>{
    return new Promise((resolve, reject) => {
        const rand = Math.random();
            setTimeout(()=>{
                if (rand<0.7){
                    resolve();
                } reject("error")
            },1000)
        }
    )
}

fakePromise('/dogs/1')
    .then((data)=> {
        console.log('done');
        console.log("data is", data);
    }).catch((err)=>{
        console.log("ohno",err);
})

const delayedColorChange = (color, delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

// delayedColorChange('red',1000)
//     .then(()=> delayedColorChange('orange',1000))
//     .then(()=> delayedColorChange('green',1000)
//     )

async function rainbow(){
    await delayedColorChange('red',1000)
    await delayedColorChange('orange',1000)
}