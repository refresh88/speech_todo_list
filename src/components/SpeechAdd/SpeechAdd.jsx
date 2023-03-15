import React from 'react';
import styles from './SpeechAdd.module.css';
import { BsFillMicFill } from 'react-icons/bs';

export default function SpeechAdd(props) {
  const handleClick = async () => {
    const transcript = await handleListen();
    props.onSpeechChange(transcript);
  };

  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ko-KR';

    return new Promise((resolve) => {
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };
      recognition.start();
    });
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.mic}>
        <BsFillMicFill />
      </button>
    </div>
  );
}
