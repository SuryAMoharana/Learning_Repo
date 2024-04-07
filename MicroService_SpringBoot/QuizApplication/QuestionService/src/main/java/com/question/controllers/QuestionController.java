package com.question.controllers;

import com.question.entities.Question;
import com.question.services.QuestionServices;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionServices questionServices;

    @PostMapping("/add")
    public ResponseEntity<Question> addQuestionHandler(@RequestBody Question question){
        return new ResponseEntity<>(questionServices.addQuestion(question), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Question>> getAllQuestionHandler(){
        return ResponseEntity.ok(questionServices.getAllQuestion());
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Question> getByIdHandler(@PathVariable Long id){
        return ResponseEntity.ok(questionServices.getById(id));
    }

    @GetMapping("/getByQuizId/{id}")
    public ResponseEntity<List<Question>> getByQuizIdHandler(@PathVariable Long id){
        return ResponseEntity.ok(questionServices.getByQuizId(id));
    }


}
