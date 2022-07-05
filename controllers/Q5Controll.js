const Q5 = require("../db/SchemaQ5");

async function addQ5(req, res) {
  try {
    const {
      title1,
      res1,
      valor1,
      res2,
      valor2,
      res3,
      valor3,
      res4,
      valor4,
      title2,
      res5,
      valor5,
      res6,
      valor6,
      res7,
      valor7,
      res8,
      valor8,
      title3,
      res9,
      valor9,
      res10,
      valor10,
      res11,
      valor11,
      res12,
      valor12,
      title4,
      res13,
      valor13,
      res14,
      valor14,
      res15,
      valor15,
      title5,
      res16,
      valor16,
      res17,
      valor17,
      res18,
      valor18,
      res19,
      valor19,
      res20,
      valor20,
    } = req.body;

    const q5 = Q5({
      title1,
      res1,
      valor1,
      res2,
      valor2,
      res3,
      valor3,
      res4,
      valor4,
      title2,
      res5,
      valor5,
      res6,
      valor6,
      res7,
      valor7,
      res8,
      valor8,
      title3,
      res9,
      valor9,
      res10,
      valor10,
      res11,
      valor11,
      res12,
      valor12,
      title4,
      res13,
      valor13,
      res14,
      valor14,
      res15,
      valor15,
      title5,
      res16,
      valor16,
      res17,
      valor17,
      res18,
      valor18,
      res19,
      valor19,
      res20,
      valor20,
    });

    const q5Stored = await q5.save();
    res.status(201).send({ q5Stored });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getQ5(req, res) {
  const qt5 = await Q5.find().lean().exec();
  res.status(200).send({ qt5 });
}

module.exports = {
  addQ5,
  getQ5,
};
