import { useRouter } from "next/router";

const coffeeBeans = {
  "sumatran-dark-roast": {
    name: "Sumatran Dark Roast",
    description: "Bold, earthy flavors with a smoky finish.",
    tastingNotes: ["Earthy", "Smoky", "Dark Chocolate"],
  },
  "colombian-blend": {
    name: "Colombian Smooth Blend",
    description: "Smooth and balanced with notes of caramel and citrus.",
    tastingNotes: ["Caramel", "Citrus", "Nutty"],
  },
  "brazilian-nutty": {
    name: "Brazilian Nutty Roast",
    description: "Low acidity, nutty undertones, and a creamy body.",
    tastingNotes: ["Nutty", "Creamy", "Milk Chocolate"],
  },
  "mexican-chiapas": {
    name: "Mexican Chiapas Beans",
    description: "Rich and spiced with hints of cinnamon and chocolate.",
    tastingNotes: ["Cinnamon", "Chocolate", "Brown Sugar"],
  },
  "ethiopian-yirgacheffe": {
    name: "Ethiopian Yirgacheffe",
    description: "Bright and floral with citrusy notes.",
    tastingNotes: ["Floral", "Citrus", "Jasmine"],
  },
  "costa-rican-honey": {
    name: "Costa Rican Honey Beans",
    description: "Sweet and toasty with caramel undertones.",
    tastingNotes: ["Toasty", "Caramel", "Stone Fruit"],
  },
  "peruvian-mocha": {
    name: "Peruvian Mocha Blend",
    description: "Deep chocolate flavors with a smooth, full body.",
    tastingNotes: ["Dark Chocolate", "Molasses", "Nutty"],
  },
  "italian-espresso": {
    name: "Italian Espresso Blend",
    description: "Strong, smooth, and syrupy with a bold finish.",
    tastingNotes: ["Bold", "Rich", "Dark Cocoa"],
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { product } = router.query;
  const coffee = coffeeBeans[product];

  if (!coffee) {
    return <h1>product not found</h1>;
  }

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
        {coffee.name}
      </h1>
      <p style={{ fontSize: "1.2rem", fontFamily: "IBM Plex Mono, monospace", color: "#6b4226", marginBottom: "1rem", maxWidth: "600px" }}>
        {coffee.description}
      </p>
      
      {/* Tasting Notes Section */}
      <h3 style={{ fontSize: "1.5rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "0.5rem", color: "#6b4226" }}>
        tasting notes
      </h3>
      <ul style={{
        listStyle: "none",
        padding: "0",
        display: "flex",
        gap: "10px",
        justifyContent: "center"
      }}>
        {coffee.tastingNotes.map((note, index) => (
          <li key={index} style={{
            backgroundColor: "#f5efe6",
            padding: "8px 12px",
            borderRadius: "5px",
            fontSize: "1rem",
            fontFamily: "IBM Plex Mono, monospace",
            color: "#6b4226"
          }}>
            {note}
          </li>
        ))}
      </ul>

      <button style={{
        marginTop: "10px",
        padding: "10px 20px",
        fontSize: "1rem",
        fontFamily: "IBM Plex Mono, monospace",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#6b4226",
        color: "#fff",
        cursor: "pointer",
        transition: "0.3s"
      }}>
        add to cart
      </button>
    </div>
  );
}
