import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
          <a><img className="block mx-auto align-center" src='https://www.trtdigital.ma/wp-content/uploads/2021/08/trtDigital-Logo-Maroc-light_V4.0.svg' height="60px" alt='Agence Web Développement e-Commerce SEO SEA Maroc' ></img></a>
        </Link>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://www.trtdigital.ma/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
