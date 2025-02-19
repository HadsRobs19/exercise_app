import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div>
      <h1>Vitality+</h1>

      {selectedExercise === null ? (
        <div>
          <h2>Select an Exercise</h2>
          <button onClick={() => setSelectedExercise("Push-ups")}>
            Push-ups (Repetitions)
          </button>
          <button onClick={() => setSelectedExercise("Running")}>
            Running (Duration)
          </button>
          <button onClick={() => setSelectedExercise("Weights")}>
            Weight (Repetitions)
          </button>
        </div>
      ) : (
        <div>
          {((selectedExercise === "Push-ups") || (selectedExercise === "Weights")) ? (
            <RepetitionExercise name={selectedExercise} />
            
          ) : (
            <DurationExercise name={selectedExercise} />
          )}
          <button onClick={() => setSelectedExercise(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
