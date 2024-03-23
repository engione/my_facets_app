import "./Logo.scss";

type PropsLogo = {
    imgUrl: string,
    className?: string | undefined
}

export function Logo( {imgUrl, className} : PropsLogo) {
  return (
    <a className={`logo ${className}`} href="#">
      <img src={`./src/assets/${imgUrl}`} alt="Логотип Мои грани" />
    </a>
  );
}
