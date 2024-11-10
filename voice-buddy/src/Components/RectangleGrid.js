import React, { useState, useEffect } from 'react';

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

// Calculate the duration of the song and determine the number of rows
const totalDuration = lyricsData[lyricsData.length - 1].end - lyricsData[0].start;
const numRows = Math.ceil(totalDuration / 4); // Divide by 4 for 4 seconds per row

// Utility function to group lyrics data into rows of approximately 4 seconds each
function groupLyricsByDuration(data, maxDuration) {
  const rows = [];
  let currentRow = [];
  let currentDuration = 0;

  data.forEach((lyric) => {
    const wordDuration = lyric.end - lyric.start;
    
    if (currentDuration + wordDuration > maxDuration && currentRow.length > 0) {
      // Push the current row to rows and reset for the next row
      rows.push(currentRow);
      currentRow = [];
      currentDuration = 0;
    }

    // Add the current word to the row and increase the current duration
    currentRow.push(lyric);
    currentDuration += wordDuration;
  });

  // Add any remaining words as the last row
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

export default function RectangleGrid() {
  const rectangles = Array.from({ length: numRows * 4 }); // Total number of rectangles

  // Group lyrics into rows of ~4 seconds each
  const lyricsRows = groupLyricsByDuration(lyricsData, 4);

  // Cursor tracking state and animation control
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    if (!isAnimationActive) return;

    let letterTimer, wordTimer;

    const currentWord = lyricsData[currentWordIndex].word;
    const wordDuration = lyricsData[currentWordIndex].end - lyricsData[currentWordIndex].start;
    const letterDuration = wordDuration / currentWord.length; // Duration per letter

    // Update letter index for highlighting each letter in the word
    const startLetterHighlight = () => {
      setCurrentLetterIndex(0);
      letterTimer = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          if (prevIndex < currentWord.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(letterTimer);
            return prevIndex;
          }
        });
      }, letterDuration * 1000); // Convert to milliseconds
    };

    startLetterHighlight();

    // Move to the next word after the full word duration
    wordTimer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % lyricsData.length);
      setCurrentLetterIndex(0);
    }, wordDuration * 1000);

    return () => {
      clearInterval(letterTimer);
      clearTimeout(wordTimer);
    };
  }, [currentWordIndex, isAnimationActive]);

  // Handler to reset the animation
  const handleRestart = () => {
    setIsAnimationActive(false);
    setCurrentWordIndex(0);
    setCurrentLetterIndex(0);
  };

  return (
    <div className="container my-4">
      {/* Buttons to control the animation */}
      <div className="mb-4 d-flex gap-3">
        <button
          className="btn btn-primary"
          onClick={() => setIsAnimationActive(true)}
          disabled={isAnimationActive}
        >
          Start Animation
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setIsAnimationActive(false)}
          disabled={!isAnimationActive}
        >
          Stop Animation
        </button>
        <button
          className="btn btn-success"
          onClick={handleRestart}
        >
          Restart Animation
        </button>
      </div>
      
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="row g-0">
            {/* Render four rectangles per row */}
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="col-3">
                <div
                  className="border border-dark"
                  style={{
                    paddingTop: '10%',  // Maintains 2:1 aspect ratio
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Left-aligned and full-width text under each row */}
          <div className="row mt-2">
            <p className="d-flex flex-wrap text-left w-100" style={{ justifyContent: 'space-between' }}>
              {lyricsRows[rowIndex] && lyricsRows[rowIndex].map((lyric, index) => {
                const totalRowDuration = lyricsRows[rowIndex].reduce((sum, word) => sum + (word.end - word.start), 0);
                const wordWidth = `${((lyric.end - lyric.start) / totalRowDuration) * 50}%`; // Calculate width as a percentage of row width
                
                return (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      width: wordWidth,
                      textAlign: 'left',
                    }}
                  >
                    {Array.from(lyric.word).map((char, charIndex) => (
                      <span
                        key={charIndex}
                        style={{
                          backgroundColor:
                            lyricsData.indexOf(lyric) < currentWordIndex || // Fully highlight previous words
                            (lyricsData.indexOf(lyric) === currentWordIndex && charIndex <= currentLetterIndex)
                              ? 'blue'
                              : 'transparent',
                        }}
                      >
                        {char}
                      </span>
                    ))}
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