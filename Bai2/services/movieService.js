const Movie = require("../models/movie");

exports.getAllMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw error;
  }
};

exports.createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();
    return savedMovie;
  } catch (error) {
    throw error;
  }
};

exports.updateMovie = async (movieId, movieData) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieData, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    throw error;
  }
};

exports.deleteMovie = async (movieId) => {
  try {
    await Movie.findByIdAndDelete(movieId);
  } catch (error) {
    throw error;
  }
};

exports.searchMovieByName = async (name) => {
  try {
    const movies = await Movie.find({ name: { $regex: name, $options: "i" } });
    return movies;
  } catch (error) {
    throw error;
  }
};

exports.sortMoviesByYear = async () => {
  try {
    const movies = await Movie.find().sort({ releaseYear: 1 });
    return movies;
  } catch (error) {
    throw error;
  }
};
