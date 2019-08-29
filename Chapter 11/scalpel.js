async function locateScalpel(nest) {
    let scalpel_search = await storage(nest, "scalpel");
    let curr_nest = nest.name;
    let former_location;
    while(curr_nest!=scalpel_search) {
      	former_location = scalpel_search;
        scalpel_search = await anyStorage(nest, scalpel_search, "scalpel");
        curr_nest = former_location;
    }
    return curr_nest;
}

function locateScalpel2(nest) {
    let curr_nest = nest.name;
    let former_location;
    function lookAgain(curr_nest, scalpel_search) {
        if(curr_nest==scalpel_search) {
            return curr_nest
        }
        else {
            curr_nest = scalpel_search
            return anyStorage(nest, scalpel_search, "scalpel").then((scalpel_search) => lookAgain(curr_nest, scalpel_search))
        }
    }
    return Promise.resolve(storage(nest, "scalpel"))
    .then((scalpel_search) => lookAgain(curr_nest, scalpel_search))
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
