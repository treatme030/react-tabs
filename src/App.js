import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() => {
    const response = await fetch(url)
    const jobs = await response.json()
    setJobs(jobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  },[])

  if(loading){
    return  (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }
  //데이터 불러온 다음에 작성해야 함
  const { company, dates, duties, title } = jobs[value]

  return (
    <section className="section">
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          { jobs.map((job, index) => {
            return(
              <button key={job.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
              >{job.company}</button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          { duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
