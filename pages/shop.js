import Link from "next/link";

const coffeeBeans = [
  { id: "sumatran-dark-roast", name: "Sumatran Dark Roast", description: "Bold, earthy flavors with a smoky finish." },
  { id: "colombian-blend", name: "Colombian Smooth Blend", description: "Smooth and balanced with notes of caramel and citrus." },
  { id: "brazilian-nutty", name: "Brazilian Nutty Roast", description: "Low acidity, nutty undertones, and a creamy body." },
  { id: "mexican-chiapas", name: "Mexican Chiapas Beans", description: "Rich and spiced with hints of cinnamon and chocolate." },
  { id: "ethiopian-yirgacheffe", name: "Ethiopian Yirgacheffe", description: "Bright and floral with citrusy notes." },
  { id: "costa-rican-honey", name: "Costa Rican Honey Beans", description: "Sweet and toasty with caramel undertones." },
  { id: "peruvian-mocha", name: "Peruvian Mocha Blend", description: "Deep chocolate flavors with a smooth, full body." },
  { id: "italian-espresso", name: "Italian Espresso Blend", description: "Strong, smooth, and syrupy with a bold finish." },
];

export default function Shop() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "1rem" }}>
        our coffee collection
      </h1>
      <p style={{ fontSize: "1.2rem", fontFamily: "IBM Plex Mono, monospace", color: "#6b4226", marginBottom: "2rem" }}>
        explore our hand-selected coffee beans.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "900px" }}>
        {coffeeBeans.map((bean) => (
          <div key={bean.id} style={{
            border: "1px solid #6b4226",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#fff"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "10px" }}>{bean.name}</h2>
            <p style={{ fontSize: "1rem", color: "#6b4226", marginBottom: "10px" }}>{bean.description}</p>
            <Link href={`/shop/${bean.id}`} passHref>
              <button style={{
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
              }}>
                view details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
