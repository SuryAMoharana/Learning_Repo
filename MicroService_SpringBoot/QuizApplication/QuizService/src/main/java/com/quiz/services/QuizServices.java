package com.quiz.services;

import com.quiz.entities.Quiz;

import java.util.List;

public interface QuizServices {
    Quiz addQuiz(Quiz quiz);
    List<Quiz> getAll();
    Quiz getById(Long id);

}
