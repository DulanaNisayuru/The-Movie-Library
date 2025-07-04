package com.example.movieBackend.controller;


import com.example.movieBackend.entity.Movie;
import com.example.movieBackend.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MovieController {
    private final MovieService movieService;
    private static final String ADMIN_KEY = "movie123admin";

    private boolean isAdmin(String key){
        return ADMIN_KEY.equals(key);
    }

    @GetMapping
    public List<Movie> findAll(){
        return movieService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getById(@PathVariable Long id){
        Movie movie = movieService.getById(id);
        return movie != null ? ResponseEntity.ok(movie) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> addMovie(
            @RequestHeader(value = "X-Admin-Key", required = false) String key,
            @RequestBody Movie movie
    ){
        if(!isAdmin(key)) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        return ResponseEntity.ok(movieService.save(movie));
    }
}
