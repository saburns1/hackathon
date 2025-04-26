import React, { useState } from 'react';

function ZipCodeSearch() {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for zip code:', zipCode);
    // Later you can fetch data based on zipCode here
  };

  return (
    <div style={{ padding: '7.4rem', textAlign: 'center', color: "#102c84", fontSize: 10, fontFamily: "sans-serif" }}>
      <h1>Search by zip code</h1>
      <input
        type="text"
        placeholder="Type zip code..."
        value={zipCode}
        onChange={handleChange}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginRight: '0.5rem',
          background: "white",
          color: "black"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: '#00C2CB',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
}

export default ZipCodeSearch;
