import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'AZUL', color: '' },
    { name: 'BURGER KING', color: 'orange' },
    { name: 'ONE', color: 'pink' },
    { name: 'ClearSale', color: 'yellow' },
    { name: 'LUXOTTICA', color: '' },
    { name: 'PETROBRAS', color: 'green' },
    { name: 'WICKBOLD', color: 'red' },
    { name: 'SCANIA', color: '' },
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="content-container">
        <h2 className="section-heading">Trusted by Industry Leaders</h2>
        <p className="section-text">
          Learn how dozens of companies are creating a cyber security culture with Dephish
        </p>
        <div className="clients-grid-container">
          {clients.map((client, index) => (
            <div key={index} className="client-box">
              <div className={`client-name ${client.color}`}>{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;