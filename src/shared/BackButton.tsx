import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/')}
      style={{ marginBottom: 16 }}>
      ← Back to Home
    </button>
  );
}
