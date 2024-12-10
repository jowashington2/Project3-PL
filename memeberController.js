const Member = require('../models/Member');

exports.createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: 'Error creating member', error });
  }
};

exports.listMembers = async (req, res) => {
  try {
    const members = await Member.find().populate('borrowedBooks');
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error listing members', error });
  }
};
