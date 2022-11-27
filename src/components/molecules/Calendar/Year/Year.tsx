import "./styles.scss";

export default function Year() {
  const now = new Date();
  return (
    <div className="year">
      <div className="triangle-left" />
      <span className="year__text">{now.getFullYear()}</span>
      <div className="triangle-right" />
    </div>
  );
}
