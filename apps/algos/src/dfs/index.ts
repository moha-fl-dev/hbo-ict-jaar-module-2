import { Graph } from "./algo";

// Create a new graph instance
const graph = new Graph<string>();

// Add vertices
graph.addVert("A").addVert("B").addVert("C").addVert("D").addVert("E");

// Add edges
graph
  .addEdge("A", "B")
  .addEdge("A", "C")
  .addEdge("B", "D")
  .addEdge("C", "D")
  .addEdge("D", "E");

const path = graph.dfsWithPath("A", "D");
console.log({ path });
