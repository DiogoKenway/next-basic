// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'Pedro Doe' },
    { name: 'Maria Doe' },
    { name: 'Jonas Doe' },
    { name: 'Dii Doe' },
  ])
}
