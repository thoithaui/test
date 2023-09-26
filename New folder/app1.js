import React, { useEffect, useState } from 'react';
import apiService from './services/apiService';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sử dụng phương thức GET của apiService
    apiService.get('endpoint')
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* Hiển thị dữ liệu từ API */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
