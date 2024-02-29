package com.quiz.services;

import com.quiz.entities.Quiz;
import com.quiz.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizServiceImpl implements QuizServices{

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private QuestionClient questionClient;

    public QuizServiceImpl(QuizRepository quizRepository, QuestionClient questionClient) {
        this.quizRepository = quizRepository;
        this.questionClient = questionClient;
    }

    @Override
    public Quiz add(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public List<Quiz> get() {
        List<Quiz> quizzes=quizRepository.findAll();
        quizzes.stream().map(quiz->{
            quiz.setQuestions(questionClient.getByQuizId(quiz.getId()));
            return quiz;
        }).collect(Collectors.toList());
            return quizzes;
    }

    @Override
    public Quiz get(Long id) {
        Quiz quiz=quizRepository.findById(id).orElseThrow(()->new RuntimeException("Quiz is not found with id "+id));
        quiz.setQuestions(questionClient.getByQuizId(quiz.getId()));
        return quiz;
    }
}
