export class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size).fill(0);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      // Path compression
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      // Union by rank
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }

  get geTparent(): number[] {
    return this.parent;
  }

  get getRank(): number[] {
    return this.rank;
  }

  isSetConnected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}
