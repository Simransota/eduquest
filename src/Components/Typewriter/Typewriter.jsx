import { useState, useEffect } from 'react';

const Typewriter = ({ words, delay, infinite }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      setCurrentIndex(0);
      if (currentWordIndex === words.length - 1) {
        if (infinite) {
          setCurrentWordIndex(0);
        }
      } else {
        setCurrentWordIndex(prevIndex => prevIndex + 1);
      }
      setCurrentWord(words[currentWordIndex]);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWord, currentWordIndex, delay, infinite, words]);

  return <span>{currentWord.substring(0, currentIndex)}</span>;
};

export default Typewriter;
