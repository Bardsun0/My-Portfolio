import { motion } from "framer-motion";

const Confetti = ({ isExploding }) => {
  const colors = [
    "#FFC700",
    "#FF0055",
    "#2F27CE",
    "#1EDBFF",
    "#E27396",
    "#131313",
    "#4fc432",
    "#db0b84",
    "#1fac89",
    "#f45810",
    "#ed8181",
    "#f9f4f7",
    "#362b1652",
  ];

  return (
    <>
      {isExploding &&
        [...Array(100)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "10px",
              height: "10px",
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              opacity: [1, 1, 0],
              scale: [0, 1, 1, 0.5, 0],
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        ))}
    </>
  );
};

export default Confetti;
