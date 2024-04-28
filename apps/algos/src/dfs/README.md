# Big O Analysis of Depth First Search algorithm

The `dfsWithPath` function implemented in the Graph class performs a non-recursive depth-first search starting from a given vertex (start) and attempts to find a path to a goal vertex. The method uses a stack to manage the vertices to visit, tracking visited vertices to avoid cycles, and maps each vertex to its predecessor to reconstruct the path once the goal vertex is found.

#### Complexity Analysis

1. **Time Complexity:**

   - **Worst-case scenario (O(V + E))**:
     - The DFS will visit each vertex once, which takes O(V) time, where V is the number of vertices.
     - It will examine every edge in the worst case, especially in a densely connected graph, taking O(E) time, where E is the number of edges.
     - Therefore, the total time complexity is **O(V + E)**.

2. **Space Complexity:**
   - **O(V)**:
     - The algorithm maintains several data structures: a stack, a set to track visited vertices, and a map to store the path history.
     - The stack can at worst contain all vertices (in case of a deep or unbalanced graph), hence O(V).
     - The visited set and the path mapping also store information for each vertex, contributing to an O(V) space complexity.
     - Thus, the space complexity is **O(V)**.

#### Considerations:

- The function assumes that both the start and goal vertices exist in the graph.
- If the graph is not connected and the goal is not reachable from the start, the function returns `null`.
- This analysis assumes the graph can be either directed or undirected as the `addEdge` method allows for bidirectional edge creation by default.
