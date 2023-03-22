import React from 'react';
import { useDispatch } from 'react-redux';
import { handleChange } from '../app/jobSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // Filtreleme
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  return (
    <section className="filter-sec">
      <h2>Search Form</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Search</label>
          <input name="query" onChange={(e) => handleSearch(e)} type="text" />
        </div>
        <div className="input-field">
          <label>Durum</label>
          <select name="status" onChange={(e) => handleSearch(e)}>
            <option defaultValue hidden>
              Hepsi
            </option>
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
          </select>
        </div>
        <div className="input-field">
          <label>Tür</label>
          <select name="type" onChange={(e) => handleSearch(e)}>
            <option defaultValue hidden>
              Hepsi
            </option>
            <option value="Tam Zaman">Tam Zamanlı</option>
            <option value="Yarı Zaman">Yarı Zamanlı</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>
        <div className="input-field">
          <label>Sırala</label>
          <select>
            <option defaultValue value="En Yeni">
              En Yeni
            </option>
            <option value="En Eski">En Eski</option>
            <option value="Yarı Zaman">Yarı Zaman</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button>Filtreleri Temizle</button>
      </div>
    </section>
  );
};

export default Filter;
