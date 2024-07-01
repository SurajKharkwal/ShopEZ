import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ rating }: { rating: number }) {
  const style = "text-2xl text-warning";
  const stars = [];
  const wholeNumber = Math.floor(rating);
  const decimalNumber = rating - wholeNumber;

  for (let i = 0; i < 5; i++) {
    if (i < wholeNumber) {
      stars.push(<FaStar className={style} key={i} />);
    } else if (i === wholeNumber && decimalNumber >= 0.5) {
      stars.push(<FaStarHalfAlt className={style} key={i} />);
    } else {
      stars.push(<FaRegStar className={style} key={i} />);
    }
  }

  return <>{stars}</>;
}
