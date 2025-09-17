// components/ui/CountdownTimer.js
import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { styles } from '../../styles/style';

const CountdownTimer = () => {
    const timeLeft = useCountdown();

    return (
        <>
            {/* <div className="countdown-timer">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="countdown-item">
                        <span className="countdown-value">
                            {String(value).padStart(2, '0')}
                        </span>
                        <span className="countdown-label">{unit}</span>
                    </div>
                ))}
            </div> */}
            <div style={styles.countdownTimer}>
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} style={styles.countdownItem}>
                        <span style={styles.countdownValue}>
                            {String(value).padStart(2, '0')}
                        </span>
                        <span style={styles.countdownLabel}>{unit}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CountdownTimer;