const bop = {
    bob: {
        name: "smith",
        age: 42
    },
    rob: {
        name: "jones",
        age: 43
    },
    bip: {
        name: "smith",
        age: 42
    },
}


function found_key(holder, value){
    for (let key in holder) {
        if (holder[key] === value) {
            console.log("found key: " + key);
        }
    }
    console.log("end");
}

found_key(bop, bop.bob);