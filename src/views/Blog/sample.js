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
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/stock/stock.html'
  },
  {
    id:2,
    title: 'Markdown 파일에 기반한 블로그 샘플',
    date: 'April 29',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    authors: authors,
    source: '/notebook_files/수정요함.md'
  },
];

export default posts;