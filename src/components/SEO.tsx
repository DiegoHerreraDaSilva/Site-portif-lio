import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface JsonLd {
  [key: string]: unknown;
}

interface Props {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  jsonLd?: JsonLd | JsonLd[];
}

const SITE_URL = __SITE_URL__;
const SITE_NAME = 'Diego Herrera da Silva — Portfólio';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export function SEO({ title, description, path, ogImage, jsonLd }: Props) {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  const fullTitle = `${title} — Diego Herrera da Silva`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
