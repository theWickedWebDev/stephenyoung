export const meta = ({ title, siteName, url, description, image }) => [
  { property: "og:title", content: title },
  { property: "og:site_name", content: siteName },
  { property: "og:url", content: url },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:image", content: image },
];
