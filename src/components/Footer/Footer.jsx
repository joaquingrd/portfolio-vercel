import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <footer>
      <div className="col-md-12">
        <div
          className={`copyright text-center  ${
            mode === "dark" && "copyright-dark"
          }`}
        >
          <div className="container pt-1">
            <small>Copyright &copy; Joaquin Ruiz Diaz</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
