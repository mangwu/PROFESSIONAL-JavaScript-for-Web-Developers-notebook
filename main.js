// 本文件用于删除Notion生成的32位hash和添加样式
const path = "./Export-b59e9ccf-c2b7-4f8e-ae94-61c138c939f2"; // 修改需要更新文件名称的文件夹
const reg = /[0-9a-z]{32}/;

const { dfsStyle } = require("./modifyStyle");
const { deleteDfs } = require("./delete32Hash");

deleteDfs(path, reg);
dfsStyle(path);
