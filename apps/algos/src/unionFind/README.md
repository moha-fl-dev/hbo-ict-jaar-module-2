# Big O Analysis of Union Find algorithm

The `UnionFind` class provides methods to efficiently manage and merge disjoint sets and check if elements are in the same set. The key operations are:

- `find(x)`: Finds the root representative of the set containing `x`, implementing path compression to flatten the structure.
- `union(x, y)`: Merges the sets containing `x` and `y`, using union by rank to keep the tree shallow.
- `isSetConnected(x, y)`: Checks if elements `x` and `y` belong to the same set.

#### Complexity Analysis

1. **Time Complexity:**

   - **`find(x)`**:
     - **Amortized Time Complexity: O(α(n))**,
     - Where α(n) is the inverse Ackermann function, which grows very slowly (practically constant for all reasonable input sizes).
   - **`union(x, y)`**:
     - **Amortized Time Complexity: O(α(n))**,
     - This operation potentially calls `find` twice and performs a constant amount of work otherwise.
   - **`isSetConnected(x, y)`**:
     - **Amortized Time Complexity: O(α(n))**,
     - This method involves two `find` operations and a simple equality check.

2. **Space Complexity:**
   - **O(n)**:
     - The class maintains two arrays of size `n` (the number of elements in the sets): `parent` and `rank`.
     - Both arrays are used to manage up to `n` elements, leading to a linear space requirement.

#### Usage Scenarios:

- The union-find structure is ideal for scenarios where there are multiple elements and frequent checks for whether elements are in the same set or need to be merged, such as connectivity queries in a network or grid, and in clustering algorithms.
