export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ email: req.body.email });
    console.log('object :>> ', req.body);
  }
}
