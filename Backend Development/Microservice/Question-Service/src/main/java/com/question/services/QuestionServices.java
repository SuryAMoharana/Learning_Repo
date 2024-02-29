package com.question.services;

import com.question.entities.Question;

import java.util.List;

public interface QuestionServices {
    Question create(Question question);
    List<Question> getAll();
    Question getQuestion(Long id);
    List<Question> getQuestionByQuizId(Long id);
}
