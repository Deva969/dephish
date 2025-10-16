import { useState, useEffect } from 'react';
import './Dashboard.css';

const TypingText = ({ paragraphs, speed = 40, className }) => {
  const [currentText, setCurrentText] = useState([]);
  const [paraIndex, setParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (paraIndex >= paragraphs.length) return;

    const currentParagraph = paragraphs[paraIndex];
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const newText = [...prev];
        if (!newText[paraIndex]) newText[paraIndex] = '';
        newText[paraIndex] += currentParagraph[charIndex];
        return newText;
      });

      setCharIndex((prev) => {
        if (prev + 1 === currentParagraph.length) {
          clearInterval(interval);
          setParaIndex((p) => p + 1);
          setCharIndex(0);
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [charIndex, paraIndex, paragraphs, speed]);

  return (
    <div className={className}>
      {currentText.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <span className="typing-cursor"></span>
    </div>
  );
};

export default TypingText;
