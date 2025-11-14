import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};
