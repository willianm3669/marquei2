
import { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [servico, setServico] = useState('Corte Simples');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('Enviando agendamento...');

    const response = await fetch('https://wyaymplqtfnodrrruyfgc.supabase.co/rest/v1/agendamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YXltcGxxdGZub2RycnV5ZmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMDE4NDMsImV4cCI6MjA2NTg3Nzg0M30.tHwaoVrR68TKxdBXlKRw-BG8dJCQOJaOQWZ1Se_PM4o',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YXltcGxxdGZub2RycnV5ZmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMDE4NDMsImV4cCI6MjA2NTg3Nzg0M30.tHwaoVrR68TKxdBXlKRw-BG8dJCQOJaOQWZ1Se_PM4o'
      },
      body: JSON.stringify({
        nome,
        whatsapp,
        servico,
        data,
        hora
      })
    });

    if (response.ok) {
      setMensagem('✅ Agendamento confirmado com sucesso!');
      setNome(''); setWhatsapp(''); setServico('Corte Simples'); setData(''); setHora('');
    } else {
      setMensagem('❌ Erro ao agendar. Tente novamente.');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>📅 Marquei - Agendamento</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>Nome:</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} required />

        <label>WhatsApp:</label>
        <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required />

        <label>Serviço:</label>
        <select value={servico} onChange={(e) => setServico(e.target.value)}>
          <option>Corte Simples</option>
          <option>Corte + Barba</option>
        </select>

        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />

        <label>Horário:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />

        <button style={{ marginTop: 20, padding: 10, backgroundColor: '#003366', color: 'white', border: 'none' }}>
          Confirmar Agendamento
        </button>
      </form>
      <p style={{ marginTop: 20 }}>{mensagem}</p>
    </div>
  );
}
