import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const apiKey = 'hmPP0Na7Hko3oX92+hkwSg==qwXzb7gVzNKMJhI8'; // Add your API key here
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div className="error">Something went wrong!</div>;

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="quote-container">
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.quote}</p>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
