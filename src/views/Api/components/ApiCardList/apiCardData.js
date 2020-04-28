import uuid from 'uuid/v1';

export default [
  {
    id: 0,
    title: '주식종목 종가 Api',
    description:
      'https://{APIGWAddr}/v2/market/stocks/{marketcode}/closeprice',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: 1,
    title: '주식종목 리스트 Api',
    description:
      'https://{APIGWAddr}/v2/market/stocks/{marketcode}/lists',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: 2,
    title: 'KOSPI/KOSDAQ지수 투자자 마감정보 Api',
    description:
      'https://{APIGWAddr}/v2/market/stocks/{marketcode}/investors',
    imageUrl: '/images/products/product_3.png',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: 3,
    title: 'Lyft',
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    imageUrl: '/images/products/product_4.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'GitHub Api',
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    imageUrl: '/images/products/product_5.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Squarespace Api',
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    imageUrl: '/images/products/product_6.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];
