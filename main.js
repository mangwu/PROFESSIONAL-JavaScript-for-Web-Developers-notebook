// 本文件用于删除Notion生成的32位hash和添加样式
const path = "./Export"; // 修改需要更新文件名称的文件夹
const reg = /[0-9a-z]{32}/;

const { dfsStyle } = require("./modifyStyle");
const { deleteDfs } = require("./delete32Hash");
const { dfsJavaScript } = require("./addScript");

// 这里需要一个一个开始
// deleteDfs(path, reg);
// dfsStyle(path);
// dfsJavaScript(path, "gotoBack.js");
dfsJavaScript(path,"gotoTop.js");
