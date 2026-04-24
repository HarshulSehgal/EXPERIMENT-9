function App() {
  const runtimeEnv = window.__ENV__ || {};
  const apiBaseUrl = runtimeEnv.API_BASE_URL || "http://localhost:3000/api";

  return (
    <main className="shell">
      <h1>Experiment 3.2.1</h1>
      <p>React containerized with Docker multi-stage build + Nginx.</p>
      <div className="card">
        <h2>Runtime Environment Variable</h2>
        <p>
          <strong>API_BASE_URL:</strong> {apiBaseUrl}
        </p>
      </div>
    </main>
  );
}

export default App;
