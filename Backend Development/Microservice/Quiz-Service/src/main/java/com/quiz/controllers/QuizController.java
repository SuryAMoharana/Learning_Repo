package com.quiz.controllers;

import com.quiz.entities.Quiz;
import com.quiz.services.QuizServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    private QuizServices quizServices;

    public QuizController(QuizServices quizServices) {
        this.quizServices = quizServices;
    }

    @PostMapping("/create")
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){
        return new ResponseEntity<>(quizServices.add(quiz), HttpStatus.CREATED);
    }
    @GetMapping("/getAll")
    public List<Quiz> getAllQuizes(){
        return quizServices.get();
    }

    @GetMapping("/getQuiz/{id}")
    public Quiz getQuizById(@PathVariable Long id){
        return quizServices.get(id);
    }
}
