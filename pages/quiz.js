import { useState } from "react";

export default function CoffeeQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const questions = [
    { id: "coffeeType", text: "how do you like your coffee?", options: ["black", "sweet", "creamy", "spiced"] },
    { id: "roast", text: "what's your preferred roast?", options: ["light", "medium", "dark"] },
    { id: "flavor", text: "what flavor notes do you enjoy?", options: ["nutty", "fruity", "chocolatey", "floral"] },
    { id: "origin", text: "do you prefer single-origin or blends?", options: ["single-origin", "blends", "not sure"] },
    { id: "preparation", text: "how do you usually prepare coffee at home?", options: ["drip machine", "french press", "pour over", "espresso machine", "instant coffee"] },
    { id: "cafeOrder", text: "what do you usually order at cafés?", options: ["espresso", "latte", "cappuccino", "cold brew", "mocha", "tea", "not sure"] },
  ];

  const getRecommendation = () => {
    const { coffeeType, roast, flavor, cafeOrder } = answers;

    if (coffeeType === "black" && roast === "dark") return { name: "sumatran dark roast beans", link: "/shop/sumatran-dark-roast" };
    if (coffeeType === "sweet" && roast === "medium") return { name: "colombian smooth blend", link: "/shop/colombian-blend" };
    if (coffeeType === "creamy" && roast === "medium") return { name: "brazilian nutty roast", link: "/shop/brazilian-nutty" };
    if (coffeeType === "spiced" && roast === "dark") return { name: "mexican chiapas spiced beans", link: "/shop/mexican-chiapas" };
    if (flavor === "fruity" && roast === "light") return { name: "ethiopian yirgacheffe", link: "/shop/ethiopian-yirgacheffe" };
    if (flavor === "nutty" && roast === "medium") return { name: "costa rican honey beans", link: "/shop/costa-rican-honey" };
    if (flavor === "chocolatey" && roast === "dark") return { name: "peruvian mocha blend", link: "/shop/peruvian-mocha" };
    if (cafeOrder === "espresso") return { name: "italian espresso blend", link: "/shop/italian-espresso" };

    return { name: "a classic house blend", link: "/shop/house-blend" };
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = { ...answers, [questions[step - 1].id]: answer };
    setAnswers(updatedAnswers);

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setQuizComplete(true);
      setRecommendation(getRecommendation());
    }
  };

  const restartQuiz = () => {
    setStep(1);
    setAnswers({});
    setQuizComplete(false);
    setRecommendation("");
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      textAlign: "center"
    }}>
      {!quizComplete ? (
        <>
          <h2 style={{ fontSize: "2rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "1rem" }}>
            {questions[step - 1].text}
          </h2>

          <div>
            {questions[step - 1].options.map((option) => (
              <button 
                key={option} 
                onClick={() => handleAnswer(option)}
                style={{
                  padding: "10px 20px",
                  margin: "10px",
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
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: "2rem", fontFamily: "IBM Plex Mono, monospace", marginBottom: "1rem" }}>
            your perfect coffee beans are...
          </h2>
          <h3 style={{ fontSize: "1.8rem", fontFamily: "IBM Plex Mono, monospace", color: "#6b4226" }}>
            {recommendation.name}
          </h3>
          <a 
  href={recommendation.link}
  style={{
    display: "inline-block",
    marginTop: "1rem",
    padding: "10px 20px",
    fontSize: "1rem",
    fontFamily: "IBM Plex Mono, monospace",
    borderRadius: "8px",
    backgroundColor: "#6b4226",
    color: "#fff",
    textDecoration: "none",
    transition: "0.3s"
  }}
>
  shop now
</a>

<button 
  onClick={restartQuiz}
  style={{
    marginTop: "1rem",
    padding: "10px 20px",
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
  retake quiz
</button>

<button 
  onClick={() => window.location.href = '/subscription'}
  style={{
    marginTop: "1rem",
    padding: "10px 20px",
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
  subscribe for exclusive beans
</button>

        </>
      )}
    </div>
  );
}

