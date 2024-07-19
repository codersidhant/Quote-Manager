import React, { useState } from 'react';
import './NewSignUp.css';
import axios from 'axios';

const NewSignUp = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleMade, setVehicleMade] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');
    const [coverage, setCoverage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.length === 0) alert("Please enter your name");
        else if (age.length === 0 || age <= 0) alert("Please enter your age");
        else if (sex.length === 0) alert("Please enter your sex");
        else if (street.length === 0) alert("Please enter your street address");
        else if (city.length === 0) alert("Please enter your city");
        else if (zip.length === 0 || zip.length <= 0) alert("Please enter your zipcode");
        else if (state.length === 0) alert("Please enter your state");
        else if (vehicleModel.length === 0) alert("Please enter your vehicle model");
        else if (vehicleMade.length === 0) alert("Please enter your vehicle company");
        else if (vehicleYear.length === 0 || vehicleYear < 1886) alert("Please enter your vehicle year");
        else if (vehicleMileage.length === 0 || vehicleMileage <= 0) alert("Please enter the mileage of your vehicle");
        else if (coverage.length === 0) alert("Please enter your coverage");
        else {
            try{
            const response = await axios.post('http://localhost:80/quote_capture/api.php', { 
                name, 
                age, 
                sex, 
                street, 
                city, 
                zip, 
                state, 
                vehicleModel, 
                vehicleMade, 
                vehicleYear,  
                vehicleMileage, 
                coverage
            })

            console.log('Response:', response);

            if (response.status === 200) {
                alert(`Quote Number: ${response.data.quoteNumber}. Note it for future references.`);
            } else {
                alert(response.data.message);
            } 
        }catch(error){
            alert("Error occurred while submitting the form.");
        }
        }
        console.log({
            name,
            age,
            sex,
            street,
            city,
            zip,
            state,
            vehicleModel,
            vehicleMade,
            vehicleYear,
            vehicleMileage,
            coverage
        });
    };

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <label>Sex:</label>
                    <select
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Street:</label>
                    <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label>Zip:</label>
                    <input
                        type="text"
                        name="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label>Vehicle Model:</label>
                    <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                    />
                </div>
                <div>
                    <label>Vehicle Made:</label>
                    <input
                        type="text"
                        value={vehicleMade}
                        onChange={(e) => setVehicleMade(e.target.value)}
                    />
                </div>
                <div>
                    <label>Vehicle Year:</label>
                    <input
                        type="text"
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                    />
                </div>
                <div>
                    <label>Vehicle Mileage:</label>
                    <input
                        type="text"
                        value={vehicleMileage}
                        onChange={(e) => setVehicleMileage(e.target.value)}
                    />
                </div>
                <div>
                    <label>Coverage:</label>
                    <select
                        value={coverage}
                        onChange={(e) => setCoverage(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="50000">50,000</option>
                        <option value="100000">100,000</option>
                        <option value="300000">300,000</option>
                        <option value="500000">500,000</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewSignUp;
