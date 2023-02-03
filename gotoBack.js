/*
 * @Author: mangwu                                                             *
 * @File: gotoBack.js                                                          *
 * @Date: 2023-02-03 23:27:07                                                  *
 * @LastModifiedDate: 2023-02-03 23:58:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
(function () {
  const gotoBack = document.createElement("div");
  gotoBack.style.height = "60px";
  gotoBack.style.width = "60px";
  gotoBack.style.position = "fixed";
  gotoBack.style.cursor = "pointer";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

  gotoBack.style.bottom = "0px";
  gotoBack.style.right = "45px";
  gotoBack.style.rotate = "-90deg";
  const article = document.querySelector("article");
  svg.setAttribute("t", "1675415797176");
  svg.setAttribute("viewBox", "0 0 1024 1024");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("p-id", "2826");
  svg.setAttribute("height", 60);
  svg.setAttribute("width", 60);

  path1.setAttribute(
    "d",
    "M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"
  );
  path1.setAttribute("fill", "#575B66");
  path1.setAttribute("p-id", "2827");
  path1.setAttribute(
    "d",
    "M694.463217 458.367639l-158.495686-160.25545c-9.34412-9.471415-23.167639-11.840129-34.784142-7.135385-0.736245 0.287273-1.312512 0.992555-2.016073 1.343475-2.975944 1.47249-5.951888 3.072275-8.447897 5.5356-0.032684 0.032684-0.032684 0.063647-0.063647 0.096331-0.032684 0.032684-0.063647 0.032684-0.096331 0.063647l-159.359226 158.911974c-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112 6.239161 6.271845 14.463432 9.407768 22.65674 9.407768 8.160624 0 16.352211-3.103239 22.591372-9.34412l103.616181-103.296224 0 305.056632c0 17.695686 14.336138 31.99914 32.00086 31.99914s32.00086-14.303454 32.00086-31.99914L544.00258 397.247252l104.959656 106.112189c6.239161 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.072275 22.496761-9.247789C706.783282 491.199355 706.912297 470.944013 694.463217 458.367639z"
  );
  path1.setAttribute("fill", "#575B66");
  path1.setAttribute("p-id", "2828");

  svg.appendChild(path1);
  svg.appendChild(path2);
  gotoBack.appendChild(svg);
  if (history.length === 1) {
    gotoBack.style.display = "none";
  }
  article.appendChild(gotoBack);

  gotoBack.addEventListener("click", () => {
    console.log(history.back());
  });
})();
