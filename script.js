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

function convert (object){
    let newObj ={}

    for(let key in object) {
        if(typeof object[key] === 'object') {
            let newObj2 = convert(object[key]);
            for(let innerKey in newObj2) {
            newObj[innerKey] = newObj2[innerKey]
                    }
        } else {
            newObj[key] = object[key];
                }
            }    
            return newObj;
        };       
        console.log(convert(obj));