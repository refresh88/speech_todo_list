import React, { useEffect, useState } from 'react';
import styles from './SpeechAdd.module.css';
import { BsFillMicFill } from 'react-icons/bs';

export default function SpeechAdd(props) {
  const [transcription, setTranscription] = useState(''); // 음성 인식 결과를 저장할 상태 변수

  useEffect(() => {
    if (transcription !== '') {
      props.onSpeechChange(transcription);
    }
  }, [transcription]);

  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition(); // SpeechRecognition 객체 생성
    recognition.lang = 'ko-KR'; // 인식할 언어 설정
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript); // 음성 인식 결과를 상태 변수에 저장   얘가 비동기
    };
    recognition.start(); // 음성 인식 시작
  };
  return (
    <div>
      <button onClick={handleListen} className={styles.mic}>
        <BsFillMicFill />
      </button>
    </div>
  );
}
