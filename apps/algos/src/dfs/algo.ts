export class Graph<T> {
  // Private member to hold the adjacency list, mapping each vertex to its set of connected vertices.
  #adjList: Map<T, Set<T>>;

  constructor() {
    this.#adjList = new Map<T, Set<T>>();
  }

  /**
   * Adds a vertex to the graph.
   * @param v The vertex to be added.
   * If the vertex does not exist, it is added with an empty set of connected vertices.
   */
  addVert(v: T) {
    if (!this.#adjList.has(v)) {
      this.#adjList.set(v, new Set());
    }
    return this;
  }

  /**
   * Adds an edge between two vertices in the graph.
   * If the graph is directed, this method creates a bidirectional (two-way) edge by default.
   * For a directed graph, you would modify this method to add only a one-way edge.
   *
   * @param v The source vertex for the edge.
   * @param w The destination vertex for the edge.
   *
   * This method ensures that both the source and destination vertices exist in the graph:
   * - If either vertex does not already exist in the graph's adjacency list, it is added by calling `addVert`.
   * - Once both vertices are confirmed to be in the graph, an edge is added from `v` to `w` and from `w` to `v` to make it bidirectional.
   *
   * @returns The graph object itself to allow for method chaining, enabling the caller to add multiple edges in a fluent manner.
   */
  addEdge(v: T, w: T) {
    // Check if vertex v is not in the adjacency list, then add it.
    if (!this.#adjList.has(v)) {
      this.addVert(v);
    }

    // Check if vertex w is not in the adjacency list, then add it.
    if (!this.#adjList.has(w)) {
      this.addVert(w);
    }

    // Add an edge from v to w by adding w to v's set of connected vertices.
    this.#adjList.get(v)?.add(w);
    // For an undirected graph, also add an edge from w to v by adding v to w's set of connected vertices.
    this.#adjList.get(w)?.add(v);

    // Return the graph instance to allow for chaining.
    return this;
  }

  /**
   * Performs a depth-first search (DFS) to find a path from the start vertex to the goal vertex.
   * @param start The starting vertex of the search.
   * @param goal The goal vertex to reach.
   * @returns An array of vertices representing the path from start to goal, if one exists; otherwise, null.
   * This method uses a stack to iteratively perform the DFS, tracking visited vertices and the path taken.
   */
  dfsWithPath(start: T, goal: T): T[] | null {
    const visited = new Set<T>(); // Keeps track of visited vertices to avoid cycles.
    const cameFrom = new Map<T, T | null>(); // Maps each vertex to the vertex it came from, to reconstruct the path later.

    const stack: T[] = [start]; // Use a stack to manage the vertices to visit.
    visited.add(start); // Mark the start vertex as visited.
    cameFrom.set(start, null); // Start vertex has no predecessor.

    while (stack.length > 0) {
      const current = stack.pop(); // Get the current vertex to process.

      if (current === undefined) {
        continue; // If the stack is somehow empty, skip this iteration.
      }

      if (current === goal) {
        // If the goal is reached, reconstruct and return the path.
        return this.reconstructPath(cameFrom, goal);
      }

      const neighbors = this.#adjList.get(current) || new Set<T>(); // Get the current vertex's neighbors.

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          // For each unvisited neighbor, mark it as visited and record its predecessor.
          stack.push(neighbor);
          visited.add(neighbor);
          cameFrom.set(neighbor, current);
        }
      }
    }

    return null; // If the goal is not reached, return null.
  }

  /**
   * Helper method to reconstruct the path from the start vertex to the goal vertex.
   * @param cameFrom A map recording where each vertex was reached from.
   * @param goal The goal vertex to trace back to the start.
   * @returns An array of vertices representing the path from the start vertex to the goal vertex.
   * The path is reconstructed in reverse, starting from the goal and tracing back to the start.
   */
  private reconstructPath(cameFrom: Map<T, T | null>, goal: T): T[] {
    const path: T[] = []; // Initialize the path array.
    let current: T | null = goal; // Start tracing back from the goal.
    while (current !== null) {
      // Trace back through the cameFrom map until reaching the start vertex.
      path.unshift(current); // Add the current vertex to the start of the path array.
      current = cameFrom.get(current) ?? null; // Move to the previous vertex in the path.
    }
    return path; // Return the constructed path.
  }
}
