import { TreeNodeJSON } from "../utils/RedBlackTreeNode";

export interface Graph extends TreeNodeJSON {}

export const Layout = Object.freeze({
  NODE_HEIGHT: 75,
  NODE_WIDTH: 125,
  LENGTH_BETWEEN_PARENT_CHILD: 400,
  LENGTH_BETWEEN_CHILDREN: 160,
});

export interface GraphNode extends Graph {
  x?: number;
  y?: number;
}
