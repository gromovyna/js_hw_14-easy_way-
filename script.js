
let obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20,  
        z: 30
    },
    foo2: { 
        k: 23, 
        p: 13 
    } 
}

let newObj = {
    ...obj.x,...obj.y,...obj.inner,...obj.foo2
}
console.log(newObj);
