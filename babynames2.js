class Graph {
	constructor() {
		this.storage = {};
	}

	insert(name) {
		this.storage[name] = [];
	}

	addEdges(name1, name2) {
		let edges1 = this.storage[name1];
		let edges2 = this.storage[name2];
		edges1.push(name2);
		edges2.push(name1);
	}

	getNeighbors(name) {
		return this.storage[name];
	}
}
//example storage:
// {
// 	Jon: ["John"]
// 	John: [Johnny, Jon]
// 	Johnny: [John]
// 	Kris: [Chris]
// 	Chris:[Kris, Christopher]
// 	Christopher:[Chris]
// }

function babyNames(nameFreqs, assoc) {
	let graph = new Graph();
	let counts = {};

	//iterate through name frequencies and insert nodes to graph
	//also add counts to counts hash
	for (let i = 0; i < nameFreqs.length; i++) {
		let nameFreq = nameFreqs[i];
		let name = nameFreq.split('(')[0];
		let count = nameFreq.splice('(')[1];
		count = parseInt(count.slice(0, count.length - 1));
		counts[name] = count;
		graph.insert(name);
	}

	//iterate through association array and create edges
	for (let i = 0; i < assoc.length; i++) {
		let pairing = assoc[i];
		pairing = pairing.slice(1, pairing.length - 1).split(',');
		let name1 = pairing[0];
		let name2 = pairing[1];
		graph.addEdges(name1, name2);
	}

	let visited = new Set(); //so that names don't visit back on self
	let masterKey;
	let result = {};

	function dfs(current) {
		if (visited.has(current)) {
			return;
		}

		if (masterKey in result) {
			result[masterKey] += counts[current];
		} else {
			result[masterKey] = counts[current];
		}

		visited.add(current);
		let neighbors = graph.getNeighbors(current);
		for (let neighbor of neightbors) {
			dfs(neighbor);
		}
	}

	for (let name in counts) {
		masterKey = name;
		dfs(name);
	}

	// console.log(counts);
	console.log(graph);
	console.log(results);
}

console.log(
	babyNames(
		[
			'John(10)',
			'Jon(12)',
			'Johnny(5)',
			'Kris(4)',
			'Christopher(19)',
			'Chris(13)'
		],
		['(Jon, John)', '(John,Johnny)', '(Chris,Kris)', '(Chris, Christopher)']
	)
);
