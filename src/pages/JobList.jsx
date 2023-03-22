import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../app/jobSlice';
import Filter from '../components/Filter';
// resimler

const JobList = () => {
  const dispatch = useDispatch();
  const { jobState } = useSelector((state) => state);
  // verileri çekme
  useEffect(() => {
    axios.get('http://localhost:3030/jobs').then((res) => {
      dispatch(setJobs(res.data));
    });
    //
  }, []);

  return (
    <>
      <Filter />
      {/* Listeleme */}
      <h3 className="job-count">{jobState?.filtredJobs?.length} İş Bulundu</h3>
      <section className="list-section">
        {!jobState.initialized && <div>LOADING...</div>}
        {jobState.initialized &&
          jobState.filtredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="head">
                <div className="letter">
                  <p>{job.company[0]}</p>
                </div>
                <div className="info">
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
              </div>
              <div className="body">
                <div className="field">
                  <img src="/images/map.png" />
                  <p>{job.location}</p>
                </div>
                <div className="field">
                  <img src="/images/calendar.png" />
                  <p>{job.date}</p>
                </div>
                <div className="field">
                  <img src="/images/bag.png" />
                  <p>{job.type}</p>
                </div>
                <div className="status">
                  <p className={job.status}>{job.status}</p>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default JobList;
