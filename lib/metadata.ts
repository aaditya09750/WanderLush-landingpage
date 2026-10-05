import { SITE_CONFIG } from "@/constants/site";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_CONFIG.url}/#agency`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        telephone: SITE_CONFIG.developer.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "East Java",
          addressCountry: "Indonesia",
        },
      },
      {
        "@type": "TouristAttraction",
        name: "Mount Bromo",
        description:
          "An active somma volcano and part of the Tengger caldera in East Java, Indonesia.",
        geo: {
          "@type": "GeoCoordinates",
          latitude: -7.9425,
          longitude: 112.953,
        },
      },
    ],
  };
}
