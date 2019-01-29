function extract(req, res) {
  return res.send({ message: req.body.message });
}

module.exports = extract;