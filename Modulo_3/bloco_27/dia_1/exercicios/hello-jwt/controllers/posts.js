const mockPosts = [
  {
    title: 'título fake 1',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo 1',
  },
  {
    title: 'título fake 2',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo 2',
  },
  {
    title: 'título fake 3',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo 3',
  },
  {
    title: 'título fake 4',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo 4',
  },
];

module.exports = (_req, res) => {
  res.status(200).json({ mockPosts });
};
