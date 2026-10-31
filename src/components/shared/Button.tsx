import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "py-2 px-4", ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export default Button;
