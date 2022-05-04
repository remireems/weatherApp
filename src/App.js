function App() {

  const api = {
    key: '04a3de3d38e1f0efbd3cb73d312aa4b6',
    url: 'api.openweathermap.org/data/2.5/forecast/'
  }

  return (
    <div className="app">
      <div>
        <input 
        type="text" 
        placeholder="Search city"
        />
      </div>
      <div>
        <h1>Rowland Heights</h1>
      <h2>10F</h2>
      <h2>Sunny</h2>
      </div>
      
    </div>
  );
}

export default App;
