import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  User,
  Auth
} from 'firebase/auth';
import { initFirebase, getFirebaseAuth, getFirebaseDb } from '../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, Firestore } from 'firebase/firestore';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isFirebaseReady: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [authInstance, setAuthInstance] = useState<Auth | null>(null);
  const [dbInstance, setDbInstance] = useState<Firestore | null>(null);

  useEffect(() => {
    const setup = async () => {
      try {
        await initFirebase();
        const auth = getFirebaseAuth();
        const db = getFirebaseDb();
        
        if (auth && db) {
          setAuthInstance(auth);
          setDbInstance(db);
          setIsFirebaseReady(true);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to initialize Firebase:', err);
        setLoading(false);
      }
    };

    setup();
  }, []);

  useEffect(() => {
    if (!authInstance || !dbInstance) return;

    const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
      setUser(user);
      if (user) {
        try {
          // Fetch or create profile
          const profileRef = doc(dbInstance, 'users', user.uid);
          const profileSnap = await getDoc(profileRef);
          
          if (profileSnap.exists()) {
            setProfile(profileSnap.data() as UserProfile);
          } else {
            // Create initial profile
            const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
            const newProfile: UserProfile = {
              uid: user.uid,
              username: user.displayName || 'User',
              email: user.email || '',
              points: 10, // New user bonus
              referrals: 0,
              referralCode,
              isVerified: false,
              joinedAt: serverTimestamp(),
              lastLogin: serverTimestamp(),
            };
            await setDoc(profileRef, newProfile);
            setProfile(newProfile);
          }
        } catch (err) {
          console.error("Error managing user profile:", err);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [authInstance, dbInstance]);

  const loginWithGoogle = async () => {
    if (!authInstance) {
      throw new Error('Firebase Auth not initialized. Please check configuration.');
    }
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authInstance, provider);
  };

  const logout = async () => {
    if (!authInstance) return;
    await signOut(authInstance);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, isFirebaseReady, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
