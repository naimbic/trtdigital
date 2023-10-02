export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Agence Web Développement e-Commerce SEO SEA Maroc';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Création de sites web, webmarketing, référencement naturel – SEO SEA & réseaux sociaux';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Réalisé par l’agence Web SEO SEA trtDigital';

  return {
    name,
    blogTitle,
    footerText,
  };
};
