const Borrow = require('../models/borrow');

exports.getAllBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find().populate('user').populate('book');
    res.json(borrows);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getBorrowById = async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id).populate('user').populate('book');
    if (!borrow) {
      return res.status(404).json({ msg: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createBorrow = async (req, res) => {
  try {
    const newBorrow = new Borrow(req.body);
    const borrow = await newBorrow.save();
    res.json(borrow);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!borrow) {
      return res.status(404).json({ msg: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndDelete(req.params.id);
    if (!borrow) {
      return res.status(404).json({ msg: 'Borrow not found' });
    }
    res.json({ msg: 'Borrow removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
