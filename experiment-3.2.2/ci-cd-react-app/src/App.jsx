function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Experiment 3.2.2</p>
        <h1>CI/CD Pipeline Dashboard</h1>
        <p className="subtitle">
          This frontend is used as a deployment target for GitHub Actions and Netlify.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Pipeline Stages</h2>
          <ul>
            <li>Install dependencies</li>
            <li>Run tests</li>
            <li>Build production bundle</li>
            <li>Deploy static site</li>
          </ul>
        </article>

        <article className="card">
          <h2>Validation Signals</h2>
          <ul>
            <li>Vitest unit tests</li>
            <li>Vite production build</li>
            <li>Container build (Docker)</li>
            <li>Netlify publish output</li>
          </ul>
        </article>

        <article className="card">
          <h2>Deployment Targets</h2>
          <ul>
            <li>GitHub Actions workflow</li>
            <li>GitHub Container Registry</li>
            <li>Netlify static hosting</li>
            <li>Optional Slack notifications</li>
          </ul>
        </article>
      </section>

      <section className="status">
        <h2>Current App Status</h2>
        <div className="status-row">
          <span className="dot" aria-hidden="true"></span>
          <p>Frontend is active and ready for CI/CD verification runs.</p>
        </div>
      </section>
    </main>
  );
}

export default App;
