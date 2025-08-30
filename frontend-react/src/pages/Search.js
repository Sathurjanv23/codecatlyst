import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Connect to backend for real search
    setResults([
      {
        id: 1,
        name: "Sample Boarding 1",
        location: "Near Example University",
        gender: "Girls",
        rent: "Rs. 12,000/month",
  img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" // Cozy home exterior
      },
      {
        id: 2,
        name: "Sample Boarding 2",
        location: "Near Example University",
        gender: "Boys",
        rent: "Rs. 10,000/month",
  img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" // Modern boarding house
      }
    ]);
  };

  return (
    <div className="page search-page">
      <h2>Search Boardings</h2>
      <div style={{marginBottom: '1.5em', background: '#f8f8f8', borderRadius: '10px', padding: '1em', boxShadow: '0 2px 8px #0001'}}>
        <p>
          Find the perfect boarding place near your university. Use keywords like location, university name, or preferred gender to filter results.<br/>
          <b>Tip:</b> Try searching "Colombo University Girls" or "Moratuwa Boys" for more specific results.
        </p>
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by location, university, or gender"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {results.map(b => (
          <div className="search-card" key={b.id}>
            <img src={b.img} alt={b.name} className="search-img" />
            <div className="search-info">
              <h4>{b.name}</h4>
              <p><b>Location:</b> {b.location}</p>
              <p><b>Gender:</b> {b.gender}</p>
              <p><b>Rent:</b> {b.rent}</p>
            </div>
          </div>
        ))}
      </div>
    <div style={{ marginTop: '2em' }}>
      <Link to="/" className="back-btn">Back</Link>
    </div>
    </div>
  );
};

export default Search;
