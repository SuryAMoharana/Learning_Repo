package com.quiz.services;

import com.quiz.entities.Question;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

//FeignClient(url = "http://localhost:8282",value = "Question-Client")
@FeignClient(name = "QUESTION-SERVICES")
public interface QuestionClient {

    @GetMapping("/question/getQuestionsByQuizId/{id}")
    public List<Question> getByQuizId(@PathVariable Long id);
}
