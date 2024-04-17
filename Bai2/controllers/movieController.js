const movieService = require("../services/movieService");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createMovie = async (req, res) => {
  const movieData = req.body;
  try {
    const newMovie = await movieService.createMovie(movieData);
    res.json(newMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const movieData = req.body;
  try {
    const updatedMovie = await movieService.updateMovie(id, movieData);
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await movieService.deleteMovie(id);
    res.json({ message: "Xóa phim thành công" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchMovieByName = async (req, res) => {
  const { name } = req.query;
  try {
    const movies = await movieService.searchMovieByName(name);
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.sortMoviesByYear = async (req, res) => {
  try {
    const movies = await movieService.sortMoviesByYear();
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
