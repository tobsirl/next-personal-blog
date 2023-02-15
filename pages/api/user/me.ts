import type { NextApiRequest, NextApiResponse } from 'next';

export default function name(req: NextApiRequest, res: NextApiResponse) {
  res.json({ data: { me: true } });
}
