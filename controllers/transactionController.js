const Transction = require("../models/Transaction");

exports.getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transction.find();

    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: error
    });
  }
};

exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      const messages = Object.values(err.errors).map(v => v.message);
      return res.status(400).json({
        success: false,
        data: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Ferver Error"
      });
    }
  }
};

exports.deleteTransaction = async (req, res, next) => {
  res.send("DElete Transction");
};
