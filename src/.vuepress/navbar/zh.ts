import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博客",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "生活",
        icon: "pen-to-square",
        prefix: "life/",
        children: [
         "1" 
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
