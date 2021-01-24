async function myFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done'), 1000)
    })
    let result = await promise
    console.log(result)
}
myFunction();
