export default function Subscription() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "3rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "1rem" }}>
          choose your coffee subscription
        </h1>
        <p style={{ fontSize: "1.2rem", fontFamily: "IBM Plex Mono, monospace", color: "#6b4226", marginBottom: "2rem", maxWidth: "600px" }}>
          select a plan and get fresh coffee beans delivered to your doorstep.
        </p>
  
        {/* Subscription Tiers */}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", maxWidth: "900px" }}>
          
          {/* Essential Tier */}
          <div style={{
            border: "1px solid #6b4226",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "280px",
            backgroundColor: "#fff"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "10px" }}>essential</h2>
            <p style={{ fontSize: "1rem", color: "#6b4226" }}>high-quality, single-origin beans for everyday brewing.</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px" }}>$15 / month</p>
            <button 
              style={{
                marginTop: "10px",
                padding: "8px 16px",
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
              subscribe
            </button>
          </div>
  
          {/* Exclusive Tier */}
          <div style={{
            border: "1px solid #6b4226",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "280px",
            backgroundColor: "#fff"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "10px" }}>exclusive</h2>
            <p style={{ fontSize: "1rem", color: "#6b4226" }}>rare micro-lot coffees with unique flavor profiles.</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px" }}>$25 / month</p>
            <button 
              style={{
                marginTop: "10px",
                padding: "8px 16px",
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
              subscribe
            </button>
          </div>
  
          {/* Elite Tier */}
          <div style={{
            border: "1px solid #6b4226",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "280px",
            backgroundColor: "#fff"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "10px" }}>elite</h2>
            <p style={{ fontSize: "1rem", color: "#6b4226" }}>ultra-premium, limited-edition coffees from award-winning farms.</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px" }}>$40 / month</p>
            <button 
              style={{
                marginTop: "10px",
                padding: "8px 16px",
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
              subscribe
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  