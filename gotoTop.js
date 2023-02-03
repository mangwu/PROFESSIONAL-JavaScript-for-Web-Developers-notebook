/*
 * @Author: mangwu                                                             *
 * @File: .js                                                                  *
 * @Date: 2023-02-03 17:14:34                                                  *
 * @LastModifiedDate: 2023-02-03 17:31:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const gotoTop = document.createElement("div");
gotoTop.style.height = "50px";
gotoTop.style.width = "50px";
gotoTop.style.position = "fixed";

gotoTop.style.bottom = "45px";
gotoTop.style.right = "45px";
gotoTop.style.background = "red";
const article = document.querySelector("article");
article.appendChild(gotoTop);
document.body.addEventListener("scroll", (e) => {
  console.log(e.target.scrollTop);
  console.log("---");
});
