import 'bootstrap-icons/font/bootstrap-icons.css'

export default function TesteIcones() {
  return (
    <div style={{ padding: '2rem', background: '#333' }}>
      <h2>Teste de Ícones Bootstrap Icons</h2>

      <div style={{ marginTop: '2rem' }}>
        <h3>Play Circle Fill:</h3>
        <i
          className="bi bi-play-circle-fill"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Pause Circle Fill:</h3>
        <i
          className="bi bi-pause-circle-fill"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Play Fill:</h3>
        <i
          className="bi bi-play-fill"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Pause Fill:</h3>
        <i
          className="bi bi-pause-fill"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Skip Start:</h3>
        <i
          className="bi bi-skip-start"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Skip End:</h3>
        <i
          className="bi bi-skip-end"
          style={{ fontSize: '2rem', color: 'white' }}
        ></i>
      </div>
    </div>
  )
}
