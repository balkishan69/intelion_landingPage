import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceNavigation: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    let recognition: any;

    if ('webkitSpeechRecognition' in window) {
      recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');

        setTranscript(transcript);
        handleCommand(transcript.toLowerCase());
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const handleCommand = (command: string) => {
    if (command.includes('scroll down')) {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    } else if (command.includes('scroll up')) {
      window.scrollBy({ top: -500, behavior: 'smooth' });
    } else if (command.includes('go to')) {
      const section = command.split('go to ')[1];
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      (window as any).webkitSpeechRecognition.start();
    } else {
      (window as any).webkitSpeechRecognition.stop();
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={toggleListening}
        className={`p-4 rounded-full shadow-lg transition-colors ${
          isListening ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
      >
        {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      </button>
      {transcript && (
        <div className="absolute bottom-full mb-2 right-0 bg-white p-2 rounded-lg shadow-lg text-sm">
          {transcript}
        </div>
      )}
    </div>
  );
};

export default VoiceNavigation;