// counts: {"John":10, "Jon":12, "Johnny":5, "Kris":4, "Christopher":19, "Chris":13, "Sam":1}
// assoc: {"Jon": ["John"], "John": ["Johnny"], "Chris": ["Kris", "Christopher"]}
// output: {"John":27, "Kris":36, "Sam":1}
//graph data structure
// class Graph->add Vertex(value)-->add edges(val1, val2)-->find neighbors(value)

//pseudocode:
// create result obj

// instantiate graph
// add all names from counts
// add all edges to graph
// iterate through counts

// if count >0,  true key=name,  perform dfs from true key outwards,
// add all vertex counts into result under true key, then toggle count to be 0

// return result

function names(counts, assoc) {
	let result = {};
	let graph = newGraph();
	for (let name in counts) {
		graph.addVertex(name);
	}
	for (let val1 in assoc) {
		for (let edge of assoc[val1]) {
			graph.addEdge(val1, edge);
		}
	}

	for (let name in counts) {
		if (counts[name] > 0) {
			let trueKey = name;
			dfs(name);
		}
	}

	return result;
}

function dfs(current) {
	if (counts[current] === 0) {
		return;
	}
	result[trueKey] += counts[current];
	counts[current] = 0;
	let edges = graph.getEdges(current);
	for (let edge of edges) {
		dfs(edge.value);
	}
}
