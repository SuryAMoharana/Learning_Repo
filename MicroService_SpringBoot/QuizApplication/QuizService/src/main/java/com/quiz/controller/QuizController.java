package com.quiz.controller;

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

    @PostMapping("/add")
    public ResponseEntity<Quiz> addQuizHandler(@RequestBody Quiz quiz){
        Quiz newQuiz=quizServices.addQuiz(quiz);
        return new ResponseEntity<>(newQuiz, HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Quiz>> getAllQuizHandler(){
        return ResponseEntity.ok(quizServices.getAll());
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Quiz> getByIdHandler(@PathVariable Long id){
        return ResponseEntity.ok(quizServices.getById(id));
    }

}
