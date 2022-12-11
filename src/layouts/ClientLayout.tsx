import { useEffect, useState } from "react";
import Footer from "../components/clientComponent/Footer";
import Header from "../components/clientComponent/Header";
import HomePage from "../Pages/HomePage";
import GoTopBtn from "./../assets/images/ToTopButton.png";

const ClientLayout = () => {
  const [goToTop, setGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function (tránh báo lỗi tràn bộ nhớ)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Nhấn vào thì scroll lên đầu trang
  const onTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="relative">
      {/* Kéo xuống tầm 200px thì hiện nút go to top */}
      {goToTop && (
        <button
          onClick={onTop}
          style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
          }}
        >
          <img src={`${GoTopBtn}`} alt="" className="w-10 h-10" />
        </button>
      )}
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default ClientLayout;
