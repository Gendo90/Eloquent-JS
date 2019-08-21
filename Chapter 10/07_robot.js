var roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

var roadGraph = buildGraph(roads);

var VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      return turn;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

//"Measuring a Robot" exercise from Ch. 7
function compareRobots(robot1, memory1, robot2, memory2) {
    let thisRun,
    total1 = 0,
    total2 = 0,
    num_tests = 100;
    for (let i = 0; i<num_tests; i++) {
        thisRun = VillageState.random()
        total1+=runRobot(thisRun, robot1, memory1)
        total2+=runRobot(thisRun, robot2, memory2)
    }
    console.log(`First robot took an average of ${total1/num_tests} steps to finish`);
    console.log(`Second robot took an average of ${total2/num_tests} steps to finish`);
}

//check 'compareRobots' function:
//compareRobots(routeRobot, [], goalOrientedRobot, []);

//Helper function for reduction
function getMinInternalLength(a, b) {
        if(a.length<=b.length) {
            return a
        }
        else {
            return b
        }
}

//Helper function to find closest parcel/destination
function getClosest(routeList) {
    let closestRoute;
    if(routeList.length>1) {
        closestRoute = routeList.reduce(getMinInternalLength)
    }
    else if(routeList.length===1) {
        closestRoute = routeList[0];
    }
    else {
        closestRoute = [];
    }
    return closestRoute;
}


//"Robot Efficiency" exercise from Ch. 7
function myRobot({place, parcels}, route) {
  // Only calculate a new route if there is no current route set!
  if (route.length === 0) {
    //find routes to all the parcels
    let parcelRoutes = [];
    //find routes to all the parcel destinations that are currently held
    let heldDestinations = [];
    for (parcel of parcels) {
        if (parcel.place !== place) {
            parcelRoutes.push(findRoute(roadGraph, place, parcel.place))
        }
        else {
            heldDestinations.push(findRoute(roadGraph, place, parcel.address))
        }
    }
    //find the route to closest parcel
    let parcelRoute = getClosest(parcelRoutes);

    //find the route to the closest destination
    let nextDest = getClosest(heldDestinations);

    //combine the results to move towards the closest destination or parcel
    if(nextDest.length===0) {
        route = parcelRoute;
        // console.log(parcelRoute, route)
    }
    else if(parcelRoute.length===0) {
        route = nextDest
    }
    else if(parcelRoute.length<=nextDest.length) {
        route = parcelRoute;
    }
    else {
        route = nextDest
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

//Shows that my robot is slightly faster than the goalOrientedRobot
compareRobots(myRobot, [], goalOrientedRobot, []);
