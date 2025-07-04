package com.example.movieBackend.service;

import com.example.movieBackend.entity.Movie;
import com.example.movieBackend.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository repo;

    public List<Movie> getAll() {
        return repo.findAll();
    }
    public Movie getById(Long id) {
        return repo.findById(id).orElse(null);
    }
    public Movie save(Movie movie) {
        return repo.save(movie);
    }
    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
