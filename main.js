const fs = require("fs");


// 本文件用于删除Notions生成的32位hash
const path = "./Export-b59e9ccf-c2b7-4f8e-ae94-61c138c939f2"; // 修改需要更新文件名称的文件夹
const reg = /[0-9a-z]{32}/;
const dfs = (path) => {
  fs.readdir(path, function (err, files) {
    if (!err) {
      for (const file of files) {
        if (file.includes(".html")) {
          // 修改文件
          let oldPath = path + "/" + file;
          let newPath =
            path + "/" + file.substring(0, file.length - 38) + ".html";
          fs.rename(oldPath, newPath, (err) => {
            if (!err) {
              // 修改文件内容
              fs.readFile(newPath, "utf-8", function (err, datastr) {
                if (!err) {
                  // 删除hash
                  const newStr = datastr.replace(/%20[0-9a-z]{32}/g, "");
                  fs.writeFile(newPath, newStr, "utf-8", (err) => {
                    if (err) {
                      return console.log("文件写入失败", err.message);
                    } else {
                      console.log(
                        `${file.substring(
                          0,
                          file.length - 38
                        )}：文件内容修改成功`
                      );
                    }
                  });
                }
              });
            } else {
              return console.log(`${oldPath}文件修改名称失败`);
            }
          });
        } else if (reg.test(file.substring(file.length - 32))) {
          let oldPath = path + "/" + file;
          let newPath = path + "/" + file.substring(0, file.length - 33);
          fs.rename(oldPath, newPath, (err) => {
            if (!err) {
              dfs(newPath);
            } else {
              return console.log(`${oldPath}文件夹名称修改失败`, err.message);
            }
          });
        }
      }
    } else {
      return console.log(`${path}路径读取失败`, err.message);
    }
  });
};

dfs(path);
// 测试文件写入
// let kkk =
//   "D:/project/study/PROFESSIONAL-JavaScript-for-Web-Developers-notebook/Export-b59e9ccf-c2b7-4f8e-ae94-61c138c939f2";
// fs.readdir(kkk, function (err, files) {
//   console.log(files);
//   for (const file of files) {
//     if (file.includes(".html")) {
//       let newPath = kkk + "/" + file;
//       fs.readFile(newPath, "utf-8", function (err, datastr) {
//         if (!err) {
//           const newStr = datastr.replace(/%20[0-9a-z]{32}/g, "");
//           fs.writeFile(newPath, newStr, "utf-8", (err) => {
//             if (err) {
//               return console.log("文件写入失败！" + err.message);
//             } else {
//               console.log("写入完成");
//             }
//           });
//         }
//       });
//     }
//   }
// });
