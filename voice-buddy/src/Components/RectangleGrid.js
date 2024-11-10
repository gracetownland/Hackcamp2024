import React from 'react';

const lyricsData = [
  { "word": " I", "start": 10.22, "end": 10.98 },
  { "word": " need", "start": 10.98, "end": 11.38 },
  { "word": " a", "start": 11.38, "end": 11.76 },
  { "word": " dollar,", "start": 11.76, "end": 12.02 },
  { "word": " dollar,", "start": 12.02, "end": 12.66 },
  { "word": " dollar", "start": 13.1, "end": 13.34 },
  { "word": " is", "start": 13.34, "end": 13.64 },
  { "word": " what", "start": 13.64, "end": 13.82 },
  { "word": " I", "start": 13.82, "end": 14.08 },
  { "word": " need.", "start": 14.08, "end": 21.12 },
  { "word": " And", "start": 24.0, "end": 24.64 },
  { "word": " if", "start": 24.64, "end": 25.28 },
  { "word": " I", "start": 25.28, "end": 25.6 },
  { "word": " share", "start": 25.6, "end": 25.9 },
  { "word": " with", "start": 25.9, "end": 26.1 },
  { "word": " you", "start": 26.1, "end": 26.5 },
  { "word": " my", "start": 26.5, "end": 26.92 },
  { "word": " story,", "start": 26.92, "end": 27.32 },
  { "word": " would", "start": 27.74, "end": 27.86 },
  { "word": " you", "start": 27.86, "end": 28.16 },
  { "word": " share", "start": 28.16, "end": 28.48 },
  { "word": " your", "start": 28.48, "end": 28.86 },
  { "word": " dollar", "start": 28.86, "end": 29.2 },
  { "word": " with", "start": 29.2, "end": 29.4 },
  { "word": " me?", "start": 29.4, "end": 29.88 },
];

// Utility function to group lyrics data into chunks of a given size
function groupLyricsIntoChunks(data, chunkSize) {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function RectangleGrid({ numRows }) {
  const rectangles = Array.from({ length: numRows * 4 }); // Total number of rectangles

  // Group lyrics into rows of 4 words each
  const lyricsRows = groupLyricsIntoChunks(lyricsData, 4);

  return (
    <div className="container my-4">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="row g-0">
            {/* Render four rectangles per row */}
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="col-3">
                <div
                  className="border border-dark"
                  style={{
                    paddingTop: '50%',  // Maintains 2:1 aspect ratio
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Center-aligned text under each row */}
          <div className="row mt-2">
            <p className="d-flex flex-wrap text-center" style={{ justifyContent: 'center' }}>
              {lyricsRows[rowIndex] && lyricsRows[rowIndex].map((lyric, index) => {
                const duration = (lyric.end - lyric.start) * 75; // Adjust multiplier for spacing scale
                return (
                  <span
                    key={index}
                    style={{ marginRight: `${duration}px` }} // Dynamic spacing based on duration
                  >
                    {lyric.word}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}