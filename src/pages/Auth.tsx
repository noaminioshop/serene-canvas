import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      setError('שם משתמש או סיסמה שגויים');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8] px-4" dir="rtl">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#2C3E50]">עיצוב הבית</h1>
          <p className="text-sm text-[#7F8C8D] mt-1">שלווה ושלום</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-[#8FAD88]/30">
          <h2 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">התחברות</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs text-[#7F8C8D] mb-1">שם משתמש</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="username@example.com"
                className="w-full rounded-lg border border-[#8FAD88]/30 bg-[#F5F0E8]/50 px-3 py-2 text-sm text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#8FAD88]/50"
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-xs text-[#7F8C8D] mb-1">סיסמה</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-lg border border-[#8FAD88]/30 bg-[#F5F0E8]/50 px-3 py-2 text-sm text-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-[#8FAD88]/50"
                dir="ltr"
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-[#8FAD88] text-white font-medium text-sm hover:bg-[#7a9c78] transition-colors disabled:opacity-50"
            >
              {loading ? '...' : 'התחבר'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
