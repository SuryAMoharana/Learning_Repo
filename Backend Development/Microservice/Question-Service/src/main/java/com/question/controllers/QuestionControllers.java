package com.question.controllers;

import com.question.entities.Question;
import com.question.services.QuestionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionControllers {

    @Autowired
    private QuestionServices questionServices;

    public QuestionControllers(QuestionServices questionServices) {
        this.questionServices = questionServices;
    }

    @PostMapping("/create")
    public Question create(@RequestBody Question question){
        return questionServices.create(question);
    }

    @GetMapping("/getAll")
    public List<Question> getAll(){
        return questionServices.getAll();
    }

    @GetMapping("/getQuestion/{id}")
    public Question getQuestion(@PathVariable Long id){
        return questionServices.getQuestion(id);
    }

    @GetMapping("/getQuestionsByQuizId/{id}")
    public List<Question> getByQuizId(@PathVariable Long id){
        return questionServices.getQuestionByQuizId(id);
    }

}
