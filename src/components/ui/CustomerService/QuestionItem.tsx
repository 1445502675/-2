// src/components/CustomerService/QuestionItem.tsx
import React from 'react';

interface QuestionItemProps {
  question: string;
  answer: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="question - item">
      <div className="question - title" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default QuestionItem;