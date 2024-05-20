const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary tex-[18px] outline-none ${styles} rounded-[10px] `}
    >
      Get Started
    </button>
  );
};

export default Button;
