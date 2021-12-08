import React from 'react';
import SectionGoals from '../../utils/SectionGoals';
import Alert from '../../utils/Alert';


const Achievements = ({ goals }) => {
  if (goals) {
    return (
      <main className="main">
        <section className="goals-wrapper">
          <h1 className="goals-wrapper__title">Achievements</h1>
          <div className="goals-container">
            {
              (goals.length) === 0 ? <Alert /> : <SectionGoals goals={goals} />
            }
          </div>
        </section>
      </main>
    )
  }
  else {
    return `ERROR`
  }

}

export default Achievements;
