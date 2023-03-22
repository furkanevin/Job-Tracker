import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addJob } from '../app/jobSlice';

const AddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form State
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: '',
    company: '',
    location: '',
    status: 'Devam Ediyor',
    type: 'Tam Zaman',
    date: new Date().toLocaleDateString(),
  });
  // Axios isteği
  const handleSubmit = () => {
    if (!formState.position || !formState.company || !formState.location)
      return;
    axios.post('http://localhost:3030/jobs', formState).then((res) => {
      dispatch(addJob(formState));
      navigate('/job-list');
    });
  };
  return (
    <section className="filter-sec add-sec">
      <h2>Yeni İş Ekle</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Pozisyon</label>
          <input
            type="text"
            value={formState.position}
            onChange={(event) =>
              setFormState({ ...formState, position: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Şirket</label>
          <input
            type="text"
            value={formState.company}
            onChange={(event) =>
              setFormState({ ...formState, company: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Lokasyon</label>
          <input
            type="text"
            value={formState.location}
            onChange={(event) =>
              setFormState({ ...formState, location: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Durum</label>
          <select
            value={formState.status}
            onChange={(event) =>
              setFormState({ ...formState, status: event.target.value })
            }
          >
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
            <option defaultValue value="Devam Ediyor">
              Devam Ediyor
            </option>
          </select>
        </div>
        <div className="input-field">
          <label>Tür</label>
          <select
            value={formState.type}
            onChange={(event) =>
              setFormState({ ...formState, type: event.target.value })
            }
          >
            <option defaultValue value="Tam Zaman">
              Tam Zaman
            </option>
            <option value="Yarı Zaman">Yarı Zaman</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>
        <button onClick={handleSubmit}>EKLE</button>
      </div>
    </section>
  );
};

export default AddJob;
