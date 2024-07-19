import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
    const [quoteNumber, setQuoteNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:80/quote_capture/api.php?quoteNumber=${quoteNumber}`);
            if (response.data.status === 200) {
                navigate('/details', { state: { userDetails: response.data.data } });
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while retrieving the details.');
        }
    };

    return (
        <div className="landing-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quoteNumber">Quote Number:</label>
                    <input
                        type="text"
                        id="quoteNumber"
                        value={quoteNumber}
                        onChange={(e) => setQuoteNumber(e.target.value)}
                        placeholder="Enter Quote Number"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="sign-up-link">
                <Link to="./signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default LandingPage;
