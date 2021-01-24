const puppeteer = require('puppeteer');

//입력 할 텍스트
const insert_name =  "insert_" + Math.random().toString(36).substring(2, 15);
const insert_description = "insert_" + Math.random().toString(36).substring(2, 15);

//수정 할 텍스트
const modi_name = "update_" + Math.random().toString(36).substring(2, 15);
const modi_description = "update_" + Math.random().toString(36).substring(2, 15);

async function run (){

    // 브라우저 열기
    // headless => 브라우저가 사용자의 눈에 보여지지 않고 백그라운드 환경에서 작동하는 것
    const browser = await puppeteer.launch();
    const page = await browser.newPage();  
    
    // 다이얼로그는 무조건 yes로 하라
    page.on( "dialog" , (dialog) => {
        dialog.accept();
    });

    // 웹사이트 로딩
    await page.goto('https://localhost:3000/',
     {timeout: 0, waitUntil: 'domcontentloaded'});

    const tdName = await page.$eval('.spt_con strong', strong => strong.textContent.trim() );
    console.log(tdName);

    // 작성
    await page.waitForSelector('.btn-default'); //btn-default 클래스가 로드될 때까지 대기
    await page.click('.btn-default'); //click을 해야함

    await page.waitForSelector('.btn-primary');
    
    await page.evaluate( (a, b) => {
        document.querySelector('input[name=name]').value = a;
        document.querySelector('textarea[name=description]').value = b;
        document.querySelector('.btn-primary').click();
    }, insert_name, insert_description);

    // 수정
    await page.waitForSelector('.btn-default');
    
    await page.click('table tr:nth-child(2) td:nth-child(1) a');

    await page.waitForSelector('.btn-primary');
    await page.click('btn-primary');

    await page.waitForSelector('.btn-primary');
    await page.click('btn-primary');

    await page.evaluate( (a, b) => {
        document.querySelector('input[name=name]').value = a;
        document.querySelector('textarea[name=description]').value = b;
        document.querySelector('.btn-primary').click();
    }, modi_name, modi_description);

    //"목록으로" 클릭
    await page.waitForSelector('.btn_default');
    await page.click('.btn-default');
    
    //"작성하기" 클릭
    await page.waitForSelector('.btn-default');

    //삭제
    await page.click('.btn-danger');

    // 브라우저 닫기
    await browser.close();
}

run();
