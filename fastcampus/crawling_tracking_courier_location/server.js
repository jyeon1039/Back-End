const express = require('express');

// 모듈선언
const request = require('request-promise');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.set('json spaces', 2); //json 형식 보기 편하게 하기 위한 코드

app.get('/shipping/:invc_no', async (req,res) => {


    try{

        //대한통운의 현재 배송위치 크롤링 주소
        const url = `https://www.doortodoor.co.kr/parcel/ \
        doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=${req.params.invc_no}` ;
        let result = []; //최종 보내는 데이터
        
        const html = await request(url); //html 자료를 다 가져옴
        const $ = cheerio.load( html , 
            { decodeEntities: false } //한글 변환
        );
 
        const tdElements = $(".board_area").find("table.mb15 tbody tr td"); //td의 데이터를 전부 긁어온다 => unique한 class인 mb15의 데이터를 가져온다
        
        var temp = {}; //임시로 한줄을 담을 변수
        for( let i=0 ; i<tdElements.length ; i++ ){
            
            if(i%4===0){
                temp = {}; //시작 지점이니 초기화
                temp["step"] = tdElements[i].children[0].data.trim(); //공백제거
                //removeEmpty의 경우 step의 경우 공백이 많이 포함됨
            }else if(i%4===1){
                temp["date"] = tdElements[i].children[0].data;
            }else if(i%4===2){
                
                //여기는 children을 1,2한게 배송상태와 두번째줄의 경우 담당자의 이름 br로 나뉘어져있다.
                // 0번째는 배송상태, 1은 br, 2는 담당자 이름
                temp["status"] = tdElements[i].children[0].data;
                if(tdElements[i].children.length>1){
                    temp["status"] += tdElements[i].children[2].data;
                }
 
            }else if(i%4===3){
                temp["location"] = tdElements[i].children[1].children[0].data;
                result.push(temp); //한줄을 다 넣으면 result의 한줄을 푸시한다
            }
        }
 
 
        res.json(result);

    }catch(e){
        console.log(e)
    }    
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});