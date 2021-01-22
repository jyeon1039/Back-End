const puppeteer = require('puppeteer');

//입력 할 텍스트
const insert_name =  "insert_" + Math.random().toString(36).substring(2, 15);
const insert_description = "insert_" + Math.random().toString(36).substring(2, 15);

//수정 할 텍스트
const modi_name = "update_" + Math.random().toString(36).substring(2, 15);
const modi_description = "update_" + Math.random().toString(36).substring(2, 15);

async function run (){

    // 브라우저 열기
    const browser = await puppeteer.launch();
    const page = await browser.newPage();  
    

    // 웹사이트 로딩
    await page.goto('https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=2&acq=%EC%BD%94%EC%8A%A4%ED%94%BC&qdt=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC',
     {timeout: 0, waitUntil: 'domcontentloaded'});

    const tdName = await page.$eval('.spt_con strong', strong => strong.textContent.trim() );
    console.log(tdName);

    // 브라우저 닫기
    await browser.close();
}

run();
