const apiDataSample = [
    {
      id : 0,
      apiName: "market_lists",
      title:"주식종목 리스트 API",
      description:"주식시장(유가증권, 코스닥) 의 종목 리스트, 종목 마스터, 종목 체결, 호가잔량, 종목 투자자별 종가등을 제공한다.",
      request:{
        method:"GET",
        urlFormat:"https://{APIGWAddr}/v2/market/stocks/{marketcode}/lists",
        pathParameters:[
          { name:"marketcode", type:"string", title:"시장구분", description:"kospi, kosdaq중 시장 코드를 입력", required:true }
        ],
        queryParameters:[
          { name:"crtfc_key", type:"string", title:"API 인증키", description:"발급받은 인증키(40자리)", required:true },
          { name:"corp_code", type:"string", title:"고유번호", description:"공시대상 회사의 고유번호(8자리)", required:true },
          { name:"bsns_year", type:"string", title:"사업연도", description:"사업연도(4자리)"},
          { name:"reprt_code", type:"string", title:"보고서 코드", description:"1분기보고서 : 11013, 반기보고서 : 11012, 3분기보고서 : 11014, 사업보고서 : 11011"}
        ],
        sample:`curl --include \\
        --header "apikey:l7xx230ef2235e3xxxxxc982eb192ac98e206" \\
        --request GET \\
        'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/kospi/lists'`
      },
      response:{
        parameters :[
          { name:"trdDd", type:"string", title:"일자", description:"체결일자, 거래일자, 매매일자"},
          { name:"isuLists", type:"string", title:"종목리스트", description:"공시대상 회사의 고유번호(8자리)"},
          { name:"isuCd", type:"string", title:"종목코드", description:"대상종목의 코드"},
          { name:"isuSrtCd", type:"string", title:"종목단축코드", description:"대상종목의 단축 예) KR7000660001 → 000660"},
          { name:"isuKorNm", type:"string", title:"종목 한글명", description:"종목 한글명"},
          { name:"isuKorAbbrv", type:"string", title:"종목 한글 약명", description:"종목 한글 약명"}
        ],
        sample:{
          trdDd: "20181228",
          mktEndTm: "1540",
          isuLists: [ 
            {
                "isuSrtCd": "000020",
                "isuCd": "KR7000020008",
                "isuKorNm": "동화약품",
                "isuKorAbbr": "동화약품",
                "map_to": "000020*001" 
            },
            {
                "isuSrtCd": "000030",
                "isuCd": "KR7000030007",
                "isuKorNm": "우리은행",
                "isuKorAbbr": "우리은행",
                "map_to": "000030*001" 
            },
            {
                "isuSrtCd": "000040",
                "isuCd": "KR7000040006",
                "isuKorNm": "KR모터스",
                "isuKorAbbr": "KR모터스",
                "map_to": "000040*001" 
            }
          ]
        }
      }
    },
    {
      id : 1,
      apiName: "market_closeprice",
      title:"주식종목 종가 API",
      description:"종목 당일 종가제공",
      request:{
        method:"GET",
        urlFormat:"https://{APIGWAddr}/v2/market/stocks/{marketcode}/{issuecode}/closeprice",
        pathParameters:[
          { name:"marketcode", type:"string", title:"시장구분", description:"kospi, kosdaq중 시장 코드를 입력", required:true },
          { name:"issuecode", type:"string", title:"종목코드", description:"예) 삼성전자 : 005930", required:true }
        ], 
        queryParameters:[
          { name:"crtfc_key", type:"string", title:"API 인증키", description:"발급받은 인증키(40자리)", required:true },
          { name:"corp_code", type:"string", title:"고유번호", description:"공시대상 회사의 고유번호(8자리)", required:true }
        ],
        sample:`curl --include
        --header "apikey:l7xx230ef2235e3xxxxxc982eb192ac98e206"
        --request GET
        'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/kospi/005930/closeprice'`
      },
      response:{
        parameters :[
          { name:"isuSrtCd", type:"string(9)", title:"종목단축코드", description:"대상종목의 단축 예) KR7000660001 → 000660"},
          { name:"cmpprevddTpCd", type:"string(1)", title:"전일대비구분코드", description:"1:상한/2:상승/3:보합/4:하한/5:하락/6:기세상한/7:기세상승/8:기세하한/9:기세하락"},
          { name:"cmpprevddPrc", type:"number(11)", title:"전일대비가격", description:"단위:원 / 신주인수권 증서&증권의 신규 상장 당일 : 0"},
          { name:"opnprc", type:"number(11)", title:"시가", description:"단위:원"},
          { name:"hgprc", type:"number(11)", title:"고가", description:"단위:원"},
          { name:"lwprc", type:"number(11)", title:"저가", description:"단위:원"},
          { name:"trdDd", type:"number(11)", title:"체결가격", description:""},
          { name:"accTrdvol", type:"number(12)", title:"누적체결수량,누적거래량", description:"단위:주"},
          { name:"accTrdval", type:"number(22)", title:"누적거래대금", description:"단위:원"}
        ],
        sample:{
          "jsonrpc": "2.0",
          "result": 
          {
            "isuSrtCd": "005930",
            "trdPrc": 51900,
            "cmpprevddTpCd": "5",
            "opnprc": 53000,
            "hgprc": 53900,
            "lwprc": 51800,
            "accTrdvol": 39421505,
            "accTrdval": 2070538849200,
            "cmpprevddPrc": -1100 
          } 
        }
      }
    }
  ];

  export default apiDataSample;