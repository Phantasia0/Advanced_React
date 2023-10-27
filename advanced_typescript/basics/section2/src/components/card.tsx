import "./style.css";
import { PropsWithChildren, ReactNode } from "react";

type CardProps = { color?: "crimson" | "blue" | "brown" };

// type CardProps = {
//   children: ReactNode;
//   color?: "crimson" | "blue" | "brown";
// };

const Card = ({ children, color = "blue" }: PropsWithChildren<CardProps>) => {
  return (
    <section className="m-4 card-container" style={{ color }}>
      {children}
    </section>
  );
};

export default Card;
