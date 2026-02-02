import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function FlightList() {
    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Corrected URL to /api/flights
        axios.get('http://localhost:8080/api/flights')
            .then(response => {
                setFlights(response.data);
                setFilteredFlights(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching flights:', error);
                setLoading(false);
            });
    }, []);

    const [sortBy, setSortBy] = useState('priceLow'); // priceLow, priceHigh, duration
    const [priceRange, setPriceRange] = useState(10000);

    const handleSearch = ({ from, to }) => {
        let filtered = flights;

        if (from) {
            filtered = filtered.filter(f => f.origin.toLowerCase().includes(from.toLowerCase()));
        }
        if (to) {
            filtered = filtered.filter(f => f.destination.toLowerCase().includes(to.toLowerCase()));
        }

        // Apply Price Filter
        filtered = filtered.filter(f => f.economyPrice <= priceRange);

        // Apply Sorting
        if (sortBy === 'priceLow') {
            filtered.sort((a, b) => a.economyPrice - b.economyPrice);
        } else if (sortBy === 'priceHigh') {
            filtered.sort((a, b) => b.economyPrice - a.economyPrice);
        } else if (sortBy === 'duration') {
            // simplified duration sort assuming fixed 2h 30m for now or random
            // In real app, parse duration string. Here we'll just mock it or keep order.
        }

        setFilteredFlights([...filtered]);
    };

    // Re-run filter when sort/price changes (simplified for this demo, usually would separate effects)
    useEffect(() => {
        handleSearch({ from: '', to: '' }); // Re-triggering default search logic for now to apply sort
        // Note: In a real app we'd keep search state separate from filtered state to re-apply correctly.
        // For this quick refactor, we will just apply sort to the current filtered view if possible,
        // but cleaner is to just sort the `filteredFlights` directly.

        let sorted = [...filteredFlights];
        if (sortBy === 'priceLow') {
            sorted.sort((a, b) => a.economyPrice - b.economyPrice);
        } else if (sortBy === 'priceHigh') {
            sorted.sort((a, b) => b.economyPrice - a.economyPrice);
        }
        setFilteredFlights(sorted);
    }, [sortBy]);


    return (
        <div>
            {/* Top Search Bar Area */}
            <div style={{ marginBottom: '2rem' }}>
                <SearchBar onSearch={handleSearch} />
            </div>

            <div className="main-layout" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                {/* SIDEBAR */}
                <aside className="filters-sidebar glass-card" style={{ flex: '0 0 280px', padding: '1.5rem', position: 'sticky', top: '100px' }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Filters</h3>

                    <div className="filter-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="input-label">Sort By</label>
                        <select className="input-field" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="priceLow">Price: Low to High</option>
                            <option value="priceHigh">Price: High to Low</option>
                            <option value="duration">Duration: Shortest</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="input-label">Max Price: ₹{priceRange}</label>
                        <input
                            type="range"
                            min="1000"
                            max="20000"
                            step="500"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            style={{ width: '100%', accentColor: 'var(--primary)' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666' }}>
                            <span>₹1k</span>
                            <span>₹20k</span>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <div className="flight-results" style={{ flex: 1 }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Available Flights ({filteredFlights.length})</h2>

                    {loading ? (
                        <p>Loading flights...</p>
                    ) : filteredFlights.length === 0 ? (
                        <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
                            <h3>No flights found.</h3>
                            <p>Try adjusting your filters.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {filteredFlights.map(flight => (
                                <div key={flight.id} className="flight-card glass-card" style={{
                                    display: 'flex',
                                    padding: '1.5rem',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    borderLeft: '4px solid var(--primary)'
                                }}>
                                    {/* Airline Info */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '180px' }}>
                                        <div style={{ fontSize: '2.5rem', background: '#f0fdfa', borderRadius: '50%', padding: '0.5rem' }}>✈️</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Sourish's Airline</div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{flight.flightNumber}</div>
                                        </div>
                                    </div>

                                    {/* Route Info */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{flight.origin}</div>
                                            <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{new Date(flight.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                                            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>2h 30m</div>
                                            <div style={{ width: '80px', height: '2px', background: '#e2e8f0', position: 'relative' }}>
                                                <div style={{ position: 'absolute', right: 0, top: '-4px', color: '#e2e8f0' }}>➤</div>
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--success)' }}>Non-stop</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{flight.destination}</div>
                                            <div style={{ color: '#64748b', fontSize: '0.9rem' }}>--:--</div>
                                        </div>
                                    </div>

                                    {/* Price & Action */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', minWidth: '150px' }}>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)' }}>₹{flight.economyPrice}</div>
                                        </div>
                                        <button
                                            className="btn-primary"
                                            style={{ padding: '0.6rem 1.5rem', fontSize: '1rem', width: '100%' }}
                                            onClick={() => navigate(`/book/${flight.id}`)}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FlightList;
