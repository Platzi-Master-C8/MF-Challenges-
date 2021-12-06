import React from 'react';
import './App.css';
import SectionGoals from '../../utils/SectionGoals';
import Alert from '../../utils/Alert';

const URL = '/';

const Achievements = () => {
  const [goals, setGoals] = React.useState([]);

  React.useEffect(() => {
    const getHistory = async (url) => {
      const response = await fetch(url); //fetch devuelve una promesa debemos suar await
      const data = await response.json(); //response.json devuelve una promesa, deemos usar await

      setGoals(data);
    };

    getHistory(URL);
  }, []);
  return (
    <main className="main">
      <section className="goals-wrapper">
        <h1 className="goals-wrapper__title">Achievements</h1>
        <div className="goals-container">{goals.length === 0 ? <Alert /> : <SectionGoals goals={goals} />}</div>
      </section>
    </main>
  );
}

export default Achievements;
