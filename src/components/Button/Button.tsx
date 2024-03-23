import "./Button.scss";

type PropsButton = {
    children: string,
    className?: string | undefined,
}


export function Button({ children, className }: PropsButton) {
  return <button className={`btn ${className}`}>{children}</button>;
}
