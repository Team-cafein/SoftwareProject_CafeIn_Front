const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();

  await page.goto("https://paikdabang.com/menu/menu_ccino/");

  // 페이지 내용 가져오기
  const html = await page.content();

  // 필요한 데이터 추출
  const products = [];

  const $ = cheerio.load(html);

  $(".container .menu_list.clear ul li").each((index, element) => {
    //const prodCd = $(element).attr('prod');
    const prodName = $(element).find("p.menu_tit").text();
    //products.push([prodCd, prodName]
    const prodImage = $(element).find("div.thumb img").attr("src");
    //products.push({ prodCd, prodName });
    // products.push({ prodName, prodImage })
    if (prodName && prodImage) {
      products.push({ prodName, prodImage });
    }
  });

//   // 결과 텍스트 파일에 저장
//   const resultText = products
//     .map(({ prodName, prodImage }) => `${prodName}: ${prodImage}`).join("\n");
//   fs.writeFileSync("paik_p_menu.txt", resultText, "utf-8");

//   console.log("결과가 paik_p_menu.txt 파일에 저장되었습니다.");

  // JSON 파일에 저장
  const resultJSON = JSON.stringify(products, null, 2);
  fs.writeFileSync("paik_p_menu.json", resultJSON, "utf-8");

  console.log("결과가 paik_p_menu.json 파일에 저장되었습니다.");

  await browser.close();
})();
