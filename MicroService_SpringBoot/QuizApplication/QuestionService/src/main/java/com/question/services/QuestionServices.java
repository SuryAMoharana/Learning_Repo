package com.question.services;

import com.question.entities.Question;

import java.util.List;

public interface QuestionServices {
    Question addQuestion(Question question);
    List<Question> getAllQuestion();
    Question getById(Long id);
    List<Question> getByQuizId(Long id);


}
