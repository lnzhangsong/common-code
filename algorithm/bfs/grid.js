/**
 * grid_dfs 模板
 * @param {*} grid 表格 
 * @param {*} r 行
 * @param {*} c 列
 * @returns 
 */
const dfs = (grid, r, c) => {
  // 边界处理 如果坐标 (r, c) 超出了网格范围，直接返回 
  if (!inArea(grid, r, c)) {
    return;
  }
  
  // 其他条件处理

  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

/**
 * 边界处理
 * @param {*} grid 表格 
 * @param {*} r 行
 * @param {*} c 列
 * @returns 是否存在在表格内
 */
const inArea = (grid, r, c) => {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
