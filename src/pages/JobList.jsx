import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../app/jobSlice';
// resimler

const JobList = () => {
  const dispatch = useDispatch();
  const { jobState } = useSelector((state) => state);
  // verileri çekme
  useEffect(() => {
    axios.get('http://localhost:3030/jobs').then((res) => {
      dispatch(setJobs(res.data));
    });
  }, []);

  return (
    <>
      <section className="filter-sec">
        <h2>Search Form</h2>
        <div className="inputs">
          <div className="input-field">
            <label>Search</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Durum</label>
            <select>
              <option defaultValue value="">
                Hepsi
              </option>
              <option value="">Mülakat</option>
              <option value="">Reddedildi</option>
              <option value="">Devam Ediyor</option>
            </select>
          </div>
          <div className="input-field">
            <label>Tür</label>
            <select>
              <option defaultValue value="">
                Hepsi
              </option>
              <option value="">Tam Zaman</option>
              <option value="">Yarı Zaman</option>
              <option value="">Uzaktan</option>
              <option value="">Staj</option>
            </select>
          </div>
          <div className="input-field">
            <label>Sırala</label>
            <select>
              <option defaultValue value="">
                En Yeni
              </option>
              <option value="">En Eski</option>
              <option value="">Yarı Zaman</option>
              <option value="">a-z</option>
              <option value="">z-a</option>
            </select>
          </div>
          <button>Filtrleri Temizle</button>
        </div>
      </section>
      {/* Listeleme */}
      <h3 className="job-count">{jobState?.jobs?.length} İş Bulundu</h3>
      <section className="list-section">
        {!jobState.initialized && <div>LOADING...</div>}
        {jobState.initialized &&
          jobState.jobs.map((job) => (
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
                  <p>{job.status}</p>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default JobList;
