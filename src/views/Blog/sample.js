const authors = [
    {name: "김도형", avatar:"/images/avatars/avatar_1.png"},
    {name: "정재부", avatar:"/images/avatars/avatar_2.png"},
    {name: "이화진", avatar:"/images/avatars/avatar_3.png"}
  ];
  
const posts = [
  {
    id: 1,
    title: 'HTML 파일에 기반한 블로그 샘플',
    date: 'April 27',
    description:
      'HTML페이지로 제작된 블로그 파일을 로드합니다.',
    image: '/images/banners/html.jpg',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/kospi_capm/kospi_capm.html'
  },
  {
    id:2,
    title: 'Markdown 파일에 기반한 블로그 샘플',
    date: 'April 29',
    description:
      'Markdown 파일로 제작된 블로그 파일을 로드합니다.',
    image: '/images/banners/markdown.png',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/수정요함.md'
  },
  {
    id:3,
    title: '기타 블로그 샘플',
    date: 'April 30',
    description:
      '기타 형태의 블로그',
    image: '/images/banners/bigdata.jpg',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/수정요함.md'
  },
  {
    id:4,
    title: '기타 블로그 샘플',
    date: 'April 30',
    description:
      '기타 형태의 블로그',
    image: '/images/banners/bigdata.jpg',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/수정요함.md'
  }
];

export default posts;