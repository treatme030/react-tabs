## 🛎 react-tabs

tab의 인덱스에 따라 내용 변경
```javascript
 const { company, dates, duties, title } = jobs[value] //클릭된 버튼에 해당하는 내용만 나타내기

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
              onClick={() => setValue(index)} // 버튼의 index에 따라 value 변경
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
```


<참고>Coding Addict
