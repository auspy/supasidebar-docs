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
      <iframe
        width="100%"
        height="400"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  );
}
