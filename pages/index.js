import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh"
    }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", letterSpacing: "2px", margin: "0" }}>
        vivid
      </h1>
      <p style={{ fontSize: "1.2rem", fontWeight: "300", color: "#6b4226", marginTop: "0.5rem" }}>
        curated coffee, delivered to your doorstep
      </p>

      <button 
        onClick={() => router.push("/quiz")}
        style={{
          marginTop: "2rem",
          padding: "12px 24px",
          fontSize: "1rem",
          fontFamily: "IBM Plex Mono, monospace",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#6b4226",
          color: "#fff",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        take the quiz
      </button>

      <button 
        onClick={() => router.push("/subscription")}
        style={{
          marginTop: "1rem",
          padding: "12px 24px",
          fontSize: "1rem",
          fontFamily: "IBM Plex Mono, monospace",
          borderRadius: "8px",
          border: "1px solid #6b4226",
          backgroundColor: "#fff",
          color: "#6b4226",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        subscribe now
      </button>
    </div>
  );
}

