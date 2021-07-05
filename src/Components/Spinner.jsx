import { FaSpinner } from "react-icons/fa";
import s from "./Spinner.module.css";
export function Spinner() {
  return (
    <div className={s.spinner}>
      <FaSpinner className={s.spinning} size={60} />
    </div>
  );
}
