import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using FontAwesome icon, but you can replace it

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" border border-[#0b524d] fixed bottom-5 right-5 bg-[#e4f5f4]  text-white py-3 px-2 rounded-full shadow-lg hover:bg-[#cbf4f1] transition-all z-50 flex flex-col items-center gap-1"
        >
          <FaArrowUp className="text-[#0b524d] text-sm pl-[4px]" />
          <span className="text-[#0b524d] text-[11px] font-[600]" style={{writingMode: "sideways-lr"}}>Back to top</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
