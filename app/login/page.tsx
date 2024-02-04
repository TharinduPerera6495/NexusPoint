"use client";

import React, { useState } from 'react';
import styles from './styles.module.css'

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Here you can implement your authentication logic
        // For simplicity, let's assume a basic check for username and password
        if (username === 'user' && password === 'password') {
            // Successful login
            setError('');
            alert('Login successful!');
        } else {
            // Failed login
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input_field}
                />
            </div>
            
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input_field}
                />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}