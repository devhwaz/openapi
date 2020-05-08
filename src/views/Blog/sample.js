const authors = [
    {name: "김도형", avatar:"/images/avatars/avatar_1.png"},
    {name: "정재부", avatar:"/images/avatars/avatar_2.png"},
    {name: "이화진", avatar:"/images/avatars/avatar_3.png"}
  ];
  
const posts = [
  {
    id: 1,
    title: 'API를 활용한 한국 주식시장의 자본자산가격 모형',
    date: 'April 30',
    description:
      '자본자산가격모형(CAPM: Capital Asset Pricing Model)이란 자산, 즉 주식의 초과수익률이 기본적으로 시장 초과수익률에 비례하게 된다는 모형이다. 이 글에서는 한국 주식시장에서 자본자산가격모형이 실제로 성립하는지와 자본자산가격모형에 따른 주식 선택의 예를 살펴본다.',
    image: '/blogs/kospi_capm/thumbnail.png',
    imageText: 'Image Text',
    authors: authors,
    source: '/blogs/kospi_capm/kospi_capm.html'
  },
  {
    id:2,
    title: '성공적인 서비스를 위한 최적의 데이터스토어 선택',
    date: 'May 4',
    description:
      '무작정 쌓는다고 데이터가 아니다. 잘 다듬고 정리해야 데이터로서의 가치가생기기 마련이다.',
    image: '/blogs/stock/thumbnail.png',
    imageText: 'Image Text',
    authors: authors,
    source: '/blogs/stock/stock.html'
  },
  {
    id:3,
    title: '주식 Tick 정보를 활용한 패턴 분석 사례 파일에 기반한 블로그 샘플',
    date: 'May 8',
    description:
      '최적 집행 알고리즘의 의미를 해석해 보고, 삼성전자 주식에 적용해 보기로 한다.',
    image: '/blogs/seaborn/thumbnail.png',
    imageText: 'Image Text',
    authors: authors,
    source: '/blogs/seaborn/seaborn.html'
  }
];

export default posts;