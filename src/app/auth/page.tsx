"use client";
import { useState } from "react";
import { auth } from "@/services/firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      // Redirect to the admin page after successful login
      router.push("/admin");
    } catch (error) {
      console.error("Authentication Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-4">{isLogin ? "Sign In" : "Sign Up"}</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-2 p-2 border"
        disabled={loading}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-2 p-2 border"
        disabled={loading}
      />
      <button
        onClick={handleAuth}
        className="p-2 bg-blue-500 text-white"
        disabled={loading}
      >
        {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
      </button>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 underline"
        disabled={loading}
      >
        {isLogin ? "Create an Account" : "Already have an account? Sign In"}
      </button>
    </div>
  );
}
