const Genre = require('../models/genre');

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) {
      return res.status(404).json({ msg: 'Genre not found' });
    }
    res.json(genre);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createGenre = async (req, res) => {
  try {
    const newGenre = new Genre(req.body);
    const genre = await newGenre.save();
    res.json(genre);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!genre) {
      return res.status(404).json({ msg: 'Genre not found' });
    }
    res.json(genre);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) {
      return res.status(404).json({ msg: 'Genre not found' });
    }
    res.json({ msg: 'Genre removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
