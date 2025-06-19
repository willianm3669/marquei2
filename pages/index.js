
export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>📅 Marquei - Agendamento</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>Nome:</label>
        <input type="text" placeholder="Seu nome" />

        <label>WhatsApp:</label>
        <input type="tel" placeholder="(xx) xxxxx-xxxx" />

        <label>Serviço:</label>
        <select>
          <option>Corte Simples</option>
          <option>Corte + Barba</option>
        </select>

        <label>Data:</label>
        <input type="date" />

        <label>Horário:</label>
        <input type="time" />

        <button style={{ marginTop: 20, padding: 10, backgroundColor: '#003366', color: 'white', border: 'none' }}>
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}
