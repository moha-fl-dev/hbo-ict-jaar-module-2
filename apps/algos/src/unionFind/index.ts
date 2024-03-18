import { generateRandomNumber } from "../helpers";
import { UnionFind } from "./algo";

const size = generateRandomNumber(100);
const uf = new UnionFind(size);
uf.union(1, 2);
uf.union(2, 3);
uf.union(6, 8);
uf.union(9, 6);

console.log({
  size,
  set: `{6, 9}`,
  isSetConnected: uf.isSetConnected(6, 9),
  parent: uf.geTparent,
  rank: uf.getRank,
}); // true, since 1 and 3 are connected through 2
