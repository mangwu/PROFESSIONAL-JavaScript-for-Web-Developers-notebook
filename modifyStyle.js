/*
 * @Author: mangwu                                                             *
 * @File: modefiyStyle.js                                                      *
 * @Date: 2023-02-03 17:05:15                                                  *
 * @LastModifiedDate: 2023-02-03 17:12:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const fs = require("fs");

// dfs(path);
// 添加link
const dfsStyle = (path) => {
  fs.readdir(path, function (err, files) {
    if (!err) {
      for (const file of files) {
        if (file.includes(".html")) {
          // 修改文件
          let oldPath = path + "/" + file;
          let cur = -2;
          for (const ch of oldPath) {
            if (ch === "/") cur++;
          }
          fs.readFile(oldPath, "utf-8", function (err, datastr) {
            if (!err) {
              // 删除hash
              const newStr = datastr.replace(
                /<\/head>/,
                (_) =>
                  `<link rel="stylesheet" href="${"../".repeat(
                    cur
                  )}style.css">${_}`
              );
              fs.writeFile(oldPath, newStr, "utf-8", (err) => {
                if (err) {
                  return console.log("文件写入失败", err.message);
                } else {
                  console.log(`${file}：文件内容修改成功`);
                }
              });
            }
          });
        } else if (file.indexOf(".") === -1) {
          // 文件夹
          let oldPath = path + "/" + file;
          dfsStyle(oldPath);
        }
      }
    } else {
      return console.log(`${path}路径读取失败`, err.message);
    }
  });
};
module.exports.dfsStyle = dfsStyle;