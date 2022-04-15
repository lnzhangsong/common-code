const {
  join,
  extname
} = require('path');
const fse = require('fs-extra')


/**
 * 获取文件夹以及子文件夹下所有指定类型文件
 * @param {*} directory 文件夹
 * @param {*} files 文件结果集
 * @param {*} type 文件类型
 */
const deepLoopTraversal = async (directory, files, type) => {
  const filesList = await fse.readdir(directory);
  console.log(filesList);
  for (let i = 0, len = filesList.length; i < len; i++) {
    const filename = filesList[i];
    const filePath = join(directory, filename);
    const stats = await fse.stat(filePath);
    if (stats.isDirectory()) {
      await deepLoopTraversal(filePath, files, type);
    } else {

      const isFile = stats.isFile();
      const extnameVal = isFile ? extname(filePath) : '';
      if (extnameVal === type) {
        files.push(filePath)
      }
    }
  }
}

