let { fileMap } = require("./posts/summary.json");
const fs = require("fs");

let article_list = fileMap;

interface ArticleType {
  [key: string]: any;
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string;
  href: string;
}

const article_array: ArticleType[] = Object.keys(article_list).map((key: any) => {
  let article = article_list[key];
  return {
    id: article.id,
    title: article.title,
    date: article.created_at.replace("T00:00:00.000Z", ""),
    description: article.description,
    tags: article.tags,
    href: "articles?base=" + article.base.replace(".json", "")
  };
});

article_array.sort((a: ArticleType, b: ArticleType) => {
  const a_id: number = a.id as unknown as number;
  const b_id: number = b.id as unknown as number;
  if(a_id < b_id) {
    return 1;
  } else {
    return -1;
  }
});

fs.writeFile("posts/summary.js",
  "const article_list = " + JSON.stringify(article_array) + ";export {article_list}",
  (err: any) => {
    if(err) throw err;
    console.log("出力成功");
  }
);
