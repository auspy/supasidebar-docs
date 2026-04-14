export function YouTubeVideo({ id, title, uploadDate, description }) {
  const embedUrl = `https://www.youtube.com/embed/${id}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: description || title,
    thumbnailUrl,
    uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}
