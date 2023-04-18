import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import "./StatsComponent.css"

const CountUpNumbers = () => {
  const [counters, setCounters] = useState([
    { label: 'Employee Count', value: 0, max: 50 },
    { label: 'Revenue', value: 0, max: 75 },
    { label: 'Profit', value: 0, max: 80 },
    { label: 'Customers', value: 0, max: 100 },
  ]);

  const countersRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervals = counters.map(({ max }, index) => {
            return setInterval(() => {
              setCounters(counters => {
                const newCounters = [...counters];
                if (newCounters[index].value < max) {
                  newCounters[index].value += 1;
                }
                return newCounters;
              });
            }, 100);
          });

          setTimeout(() => {
            observer.unobserve(entry.target);

            intervals.forEach(clearInterval);
          }, 3000);

        }
      });
    }, options);

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [counters]);

  return (
    <div ref={countersRef} style={{ display: 'flex', justifyContent: 'space-between' }} className='counterforstats'>
      {counters.map(({ label, value }, index) => (
        <div key={index}>
          <CountUp start={0} end={value} duration={3} repeat={true}/>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountUpNumbers;
