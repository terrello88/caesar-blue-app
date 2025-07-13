import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setUser(auth.currentUser);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: '#0077cc' }}>
            {isLogin ? 'Need to create an account?' : 'Already have an account?'}
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthForm;