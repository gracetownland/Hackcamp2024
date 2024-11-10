import React, { useState, useEffect } from 'react';

const lyricsData = [
  {
    "word": " I",
    "start": 10.220000000000002,
    "end": 10.98
  },
  {
    "word": " need",
    "start": 10.98,
    "end": 11.38
  },
  {
    "word": " a",
    "start": 11.38,
    "end": 11.76
  },
  {
    "word": " dollar,",
    "start": 11.76,
    "end": 12.02
  },
  {
    "word": " dollar,",
    "start": 12.02,
    "end": 12.66
  },
  {
    "word": " dollar",
    "start": 13.1,
    "end": 13.34
  },
  {
    "word": " is",
    "start": 13.34,
    "end": 13.64
  },
  {
    "word": " what",
    "start": 13.64,
    "end": 13.82
  },
  {
    "word": " I",
    "start": 13.82,
    "end": 14.08
  },
  {
    "word": " need.",
    "start": 14.08,
    "end": 21.12
  },
  {
    "word": " And",
    "start": 24.0,
    "end": 24.64
  },
  {
    "word": " if",
    "start": 24.64,
    "end": 25.28
  },
  {
    "word": " I",
    "start": 25.28,
    "end": 25.6
  },
  {
    "word": " share",
    "start": 25.6,
    "end": 25.9
  },
  {
    "word": " with",
    "start": 25.9,
    "end": 26.1
  },
  {
    "word": " you",
    "start": 26.1,
    "end": 26.5
  },
  {
    "word": " my",
    "start": 26.5,
    "end": 26.92
  },
  {
    "word": " story,",
    "start": 26.92,
    "end": 27.32
  },
  {
    "word": " would",
    "start": 27.74,
    "end": 27.86
  },
  {
    "word": " you",
    "start": 27.86,
    "end": 28.16
  },
  {
    "word": " share",
    "start": 28.16,
    "end": 28.48
  },
  {
    "word": " your",
    "start": 28.48,
    "end": 28.86
  },
  {
    "word": " dollar",
    "start": 28.86,
    "end": 29.2
  },
  {
    "word": " with",
    "start": 29.2,
    "end": 29.4
  },
  {
    "word": " me?",
    "start": 29.4,
    "end": 29.88
  },
  {
    "word": " Bad",
    "start": 31.02,
    "end": 31.44
  },
  {
    "word": " times",
    "start": 31.44,
    "end": 31.96
  },
  {
    "word": " are",
    "start": 31.96,
    "end": 32.08
  },
  {
    "word": " coming",
    "start": 32.08,
    "end": 32.34
  },
  {
    "word": " and",
    "start": 32.34,
    "end": 32.88
  },
  {
    "word": " I",
    "start": 32.88,
    "end": 33.18
  },
  {
    "word": " reap",
    "start": 33.18,
    "end": 33.54
  },
  {
    "word": " what",
    "start": 33.54,
    "end": 33.96
  },
  {
    "word": " I",
    "start": 33.96,
    "end": 34.2
  },
  {
    "word": " done",
    "start": 34.2,
    "end": 34.34
  },
  {
    "word": " so.",
    "start": 34.34,
    "end": 34.76
  },
  {
    "word": " Hey,",
    "start": 35.26,
    "end": 35.46
  },
  {
    "word": " hey,",
    "start": 35.66,
    "end": 35.74
  },
  {
    "word": " well",
    "start": 36.06,
    "end": 36.4
  },
  {
    "word": " let",
    "start": 36.4,
    "end": 36.76
  },
  {
    "word": " me",
    "start": 36.76,
    "end": 36.92
  },
  {
    "word": " tell",
    "start": 36.92,
    "end": 37.22
  },
  {
    "word": " you",
    "start": 37.22,
    "end": 37.54
  },
  {
    "word": " something",
    "start": 37.54,
    "end": 38.14
  },
  {
    "word": " all",
    "start": 38.14,
    "end": 38.72
  },
  {
    "word": " that",
    "start": 38.72,
    "end": 38.96
  },
  {
    "word": " lit",
    "start": 38.96,
    "end": 39.24
  },
  {
    "word": " is",
    "start": 39.24,
    "end": 39.4
  },
  {
    "word": " ingot.",
    "start": 39.4,
    "end": 39.88
  },
  {
    "word": " Hey,",
    "start": 40.32,
    "end": 40.52
  },
  {
    "word": " hey,",
    "start": 40.68,
    "end": 40.8
  },
  {
    "word": " it's",
    "start": 41.3,
    "end": 41.48
  },
  {
    "word": " been",
    "start": 41.48,
    "end": 41.76
  },
  {
    "word": " a",
    "start": 41.76,
    "end": 41.98
  },
  {
    "word": " long",
    "start": 41.98,
    "end": 42.26
  },
  {
    "word": " old",
    "start": 42.26,
    "end": 42.64
  },
  {
    "word": " trouble,",
    "start": 42.64,
    "end": 43.02
  },
  {
    "word": " long",
    "start": 43.4,
    "end": 43.72
  },
  {
    "word": " old",
    "start": 43.72,
    "end": 43.98
  },
  {
    "word": " trouble",
    "start": 43.98,
    "end": 44.28
  },
  {
    "word": " some",
    "start": 44.28,
    "end": 44.52
  },
  {
    "word": " road.",
    "start": 44.52,
    "end": 44.92
  },
  {
    "word": " And",
    "start": 45.42,
    "end": 45.58
  },
  {
    "word": " I'm",
    "start": 45.58,
    "end": 45.94
  },
  {
    "word": " looking",
    "start": 45.94,
    "end": 46.22
  },
  {
    "word": " for",
    "start": 46.22,
    "end": 46.62
  },
  {
    "word": " somebody",
    "start": 46.62,
    "end": 47.34
  },
  {
    "word": " come",
    "start": 47.34,
    "end": 47.98
  },
  {
    "word": " and",
    "start": 47.98,
    "end": 48.3
  },
  {
    "word": " help",
    "start": 48.3,
    "end": 48.72
  },
  {
    "word": " me",
    "start": 48.72,
    "end": 48.92
  },
  {
    "word": " carry",
    "start": 48.92,
    "end": 49.36
  },
  {
    "word": " this",
    "start": 49.36,
    "end": 49.56
  },
  {
    "word": " load.",
    "start": 49.56,
    "end": 49.9
  },
  {
    "word": " I",
    "start": 51.12,
    "end": 51.44
  },
  {
    "word": " need",
    "start": 51.44,
    "end": 51.78
  },
  {
    "word": " a",
    "start": 51.78,
    "end": 52.16
  },
  {
    "word": " dollar,",
    "start": 52.16,
    "end": 52.52
  },
  {
    "word": " dollar,",
    "start": 52.8,
    "end": 53.12
  },
  {
    "word": " dollar",
    "start": 53.5,
    "end": 53.76
  },
  {
    "word": " is",
    "start": 53.76,
    "end": 54.08
  },
  {
    "word": " what",
    "start": 54.08,
    "end": 54.26
  },
  {
    "word": " I",
    "start": 54.26,
    "end": 54.54
  },
  {
    "word": " need.",
    "start": 54.54,
    "end": 55.1
  },
  {
    "word": " Well",
    "start": 55.96,
    "end": 56.32
  },
  {
    "word": " I",
    "start": 56.32,
    "end": 56.48
  },
  {
    "word": " need",
    "start": 56.48,
    "end": 56.84
  },
  {
    "word": " a",
    "start": 56.84,
    "end": 57.36
  },
  {
    "word": " dollar,",
    "start": 57.36,
    "end": 57.68
  },
  {
    "word": " dollar,",
    "start": 57.94,
    "end": 58.22
  },
  {
    "word": " dollar",
    "start": 58.58,
    "end": 58.82
  },
  {
    "word": " is",
    "start": 58.82,
    "end": 59.16
  },
  {
    "word": " what",
    "start": 59.16,
    "end": 59.34
  },
  {
    "word": " I",
    "start": 59.34,
    "end": 59.6
  },
  {
    "word": " need.",
    "start": 59.6,
    "end": 60.08
  },
  {
    "word": " Well",
    "start": 61.46,
    "end": 62.02
  },
  {
    "word": " I",
    "start": 62.02,
    "end": 62.3
  },
  {
    "word": " don't",
    "start": 62.3,
    "end": 62.54
  },
  {
    "word": " know",
    "start": 62.54,
    "end": 62.94
  },
  {
    "word": " if",
    "start": 62.94,
    "end": 63.52
  },
  {
    "word": " I'm",
    "start": 63.52,
    "end": 63.68
  },
  {
    "word": " walking",
    "start": 63.68,
    "end": 63.92
  },
  {
    "word": " on",
    "start": 63.92,
    "end": 64.12
  },
  {
    "word": " solid",
    "start": 64.12,
    "end": 64.76
  },
  {
    "word": " ground,",
    "start": 64.76,
    "end": 65.72
  },
  {
    "word": " because",
    "start": 66.5,
    "end": 67.22
  },
  {
    "word": " everything",
    "start": 67.22,
    "end": 67.86
  },
  {
    "word": " around",
    "start": 67.86,
    "end": 68.26
  },
  {
    "word": " me",
    "start": 68.26,
    "end": 68.72
  },
  {
    "word": " is",
    "start": 68.72,
    "end": 69.08
  },
  {
    "word": " falling",
    "start": 69.08,
    "end": 70.0
  },
  {
    "word": " down.",
    "start": 70.0,
    "end": 70.92
  },
  {
    "word": " No,",
    "start": 71.72,
    "end": 72.02
  },
  {
    "word": " no,",
    "start": 72.02,
    "end": 72.3
  },
  {
    "word": " one",
    "start": 72.5,
    "end": 72.74
  },
  {
    "word": " is",
    "start": 72.74,
    "end": 73.38
  },
  {
    "word": " for",
    "start": 73.38,
    "end": 73.54
  },
  {
    "word": " someone",
    "start": 73.54,
    "end": 74.04
  },
  {
    "word": " to",
    "start": 74.04,
    "end": 74.94
  },
  {
    "word": " help",
    "start": 74.94,
    "end": 75.48
  },
  {
    "word": " me.",
    "start": 75.48,
    "end": 76.32
  },
  {
    "word": " I",
    "start": 78.62,
    "end": 79.22
  },
  {
    "word": " had",
    "start": 79.22,
    "end": 79.72
  },
  {
    "word": " a",
    "start": 79.72,
    "end": 79.98
  },
  {
    "word": " job",
    "start": 79.98,
    "end": 80.4
  },
  {
    "word": " with",
    "start": 80.4,
    "end": 80.88
  },
  {
    "word": " the",
    "start": 80.88,
    "end": 81.18
  },
  {
    "word": " boss",
    "start": 81.18,
    "end": 81.42
  },
  {
    "word": " man,",
    "start": 81.42,
    "end": 81.76
  },
  {
    "word": " let",
    "start": 81.9,
    "end": 82.0
  },
  {
    "word": " me",
    "start": 82.0,
    "end": 82.24
  },
  {
    "word": " go.",
    "start": 82.24,
    "end": 82.96
  },
  {
    "word": " He",
    "start": 83.12,
    "end": 83.26
  },
  {
    "word": " said,",
    "start": 83.26,
    "end": 83.62
  },
  {
    "word": " I'm",
    "start": 83.8,
    "end": 84.28
  },
  {
    "word": " sorry",
    "start": 84.28,
    "end": 84.66
  },
  {
    "word": " but",
    "start": 84.66,
    "end": 85.12
  },
  {
    "word": " I",
    "start": 85.12,
    "end": 85.52
  },
  {
    "word": " won't",
    "start": 85.52,
    "end": 85.92
  },
  {
    "word": " be",
    "start": 85.92,
    "end": 86.14
  },
  {
    "word": " needing",
    "start": 86.14,
    "end": 86.52
  },
  {
    "word": " your",
    "start": 86.52,
    "end": 86.74
  },
  {
    "word": " help",
    "start": 86.74,
    "end": 87.1
  },
  {
    "word": " no",
    "start": 87.1,
    "end": 87.34
  },
  {
    "word": " more.",
    "start": 87.34,
    "end": 87.72
  },
  {
    "word": " I",
    "start": 88.22,
    "end": 88.34
  },
  {
    "word": " said,",
    "start": 88.34,
    "end": 88.68
  },
  {
    "word": " please",
    "start": 89.04,
    "end": 89.3
  },
  {
    "word": " miss",
    "start": 89.3,
    "end": 89.76
  },
  {
    "word": " the",
    "start": 89.76,
    "end": 90.0
  },
  {
    "word": " boss",
    "start": 90.0,
    "end": 90.24
  },
  {
    "word": " man,",
    "start": 90.24,
    "end": 90.56
  },
  {
    "word": " I",
    "start": 90.78,
    "end": 90.84
  },
  {
    "word": " need",
    "start": 90.84,
    "end": 91.06
  },
  {
    "word": " this",
    "start": 91.06,
    "end": 91.3
  },
  {
    "word": " job",
    "start": 91.3,
    "end": 91.54
  },
  {
    "word": " more",
    "start": 91.54,
    "end": 91.86
  },
  {
    "word": " than",
    "start": 91.86,
    "end": 92.08
  },
  {
    "word": " you",
    "start": 92.08,
    "end": 92.34
  },
  {
    "word": " know.",
    "start": 92.34,
    "end": 92.8
  },
  {
    "word": " But",
    "start": 93.26,
    "end": 93.4
  },
  {
    "word": " he",
    "start": 93.4,
    "end": 93.7
  },
  {
    "word": " gave",
    "start": 93.7,
    "end": 93.94
  },
  {
    "word": " me",
    "start": 93.94,
    "end": 94.22
  },
  {
    "word": " my",
    "start": 94.22,
    "end": 94.6
  },
  {
    "word": " last",
    "start": 94.6,
    "end": 95.0
  },
  {
    "word": " paycheck",
    "start": 95.0,
    "end": 95.48
  },
  {
    "word": " and",
    "start": 95.48,
    "end": 96.04
  },
  {
    "word": " it",
    "start": 96.04,
    "end": 96.18
  },
  {
    "word": " sent",
    "start": 96.18,
    "end": 96.48
  },
  {
    "word": " me",
    "start": 96.48,
    "end": 96.72
  },
  {
    "word": " on",
    "start": 96.72,
    "end": 96.96
  },
  {
    "word": " out",
    "start": 96.96,
    "end": 97.3
  },
  {
    "word": " though.",
    "start": 97.3,
    "end": 97.92
  },
  {
    "word": " Well",
    "start": 98.58000000000001,
    "end": 99.18
  },
  {
    "word": " I",
    "start": 99.18,
    "end": 99.4
  },
  {
    "word": " need",
    "start": 99.4,
    "end": 99.7
  },
  {
    "word": " a",
    "start": 99.7,
    "end": 100.08
  },
  {
    "word": " dollar,",
    "start": 100.08,
    "end": 100.4
  },
  {
    "word": " dollar,",
    "start": 100.4,
    "end": 100.96
  },
  {
    "word": " dollar",
    "start": 101.4,
    "end": 101.62
  },
  {
    "word": " is",
    "start": 101.62,
    "end": 102.0
  },
  {
    "word": " what",
    "start": 102.0,
    "end": 102.14
  },
  {
    "word": " I",
    "start": 102.14,
    "end": 102.4
  },
  {
    "word": " need.",
    "start": 102.4,
    "end": 103.02
  },
  {
    "word": " Hey,",
    "start": 103.34,
    "end": 103.5
  },
  {
    "word": " hey,",
    "start": 103.66,
    "end": 103.86
  },
  {
    "word": " said",
    "start": 104.0,
    "end": 104.24
  },
  {
    "word": " I",
    "start": 104.24,
    "end": 104.44
  },
  {
    "word": " need",
    "start": 104.44,
    "end": 104.78
  },
  {
    "word": " a",
    "start": 104.78,
    "end": 105.18
  },
  {
    "word": " dollar,",
    "start": 105.18,
    "end": 105.52
  },
  {
    "word": " dollar,",
    "start": 105.88,
    "end": 106.1
  },
  {
    "word": " dollar",
    "start": 106.5,
    "end": 106.72
  },
  {
    "word": " is",
    "start": 106.72,
    "end": 107.06
  },
  {
    "word": " what",
    "start": 107.06,
    "end": 107.24
  },
  {
    "word": " I",
    "start": 107.24,
    "end": 107.5
  },
  {
    "word": " need.",
    "start": 107.5,
    "end": 107.92
  },
  {
    "word": " Hey,",
    "start": 108.38,
    "end": 108.58
  },
  {
    "word": " hey,",
    "start": 108.72,
    "end": 108.9
  },
  {
    "word": " and",
    "start": 109.06,
    "end": 109.32
  },
  {
    "word": " I",
    "start": 109.32,
    "end": 109.5
  },
  {
    "word": " need",
    "start": 109.5,
    "end": 109.84
  },
  {
    "word": " a",
    "start": 109.84,
    "end": 110.18
  },
  {
    "word": " dollar,",
    "start": 110.18,
    "end": 110.58
  },
  {
    "word": " dollar,",
    "start": 110.96,
    "end": 111.22
  },
  {
    "word": " dollar",
    "start": 111.56,
    "end": 111.84
  },
  {
    "word": " is",
    "start": 111.84,
    "end": 112.1
  },
  {
    "word": " what",
    "start": 112.1,
    "end": 112.34
  },
  {
    "word": " I",
    "start": 112.34,
    "end": 112.58
  },
  {
    "word": " need.",
    "start": 112.58,
    "end": 112.96
  },
  {
    "word": " And",
    "start": 113.26,
    "end": 113.48
  },
  {
    "word": " then",
    "start": 113.48,
    "end": 113.6
  },
  {
    "word": " if",
    "start": 113.6,
    "end": 113.82
  },
  {
    "word": " I",
    "start": 113.82,
    "end": 114.08
  },
  {
    "word": " share",
    "start": 114.08,
    "end": 114.26
  },
  {
    "word": " with",
    "start": 114.26,
    "end": 114.44
  },
  {
    "word": " you",
    "start": 114.44,
    "end": 114.8
  },
  {
    "word": " my",
    "start": 114.8,
    "end": 115.22
  },
  {
    "word": " story,",
    "start": 115.22,
    "end": 115.6
  },
  {
    "word": " would",
    "start": 116.02,
    "end": 116.14
  },
  {
    "word": " you",
    "start": 116.14,
    "end": 116.44
  },
  {
    "word": " share",
    "start": 116.44,
    "end": 116.8
  },
  {
    "word": " your",
    "start": 116.8,
    "end": 117.08
  },
  {
    "word": " dollar",
    "start": 117.08,
    "end": 117.46
  },
  {
    "word": " with",
    "start": 117.46,
    "end": 117.72
  },
  {
    "word": " me?",
    "start": 117.72,
    "end": 118.36
  },
  {
    "word": " Well",
    "start": 119.36,
    "end": 119.96
  },
  {
    "word": " I",
    "start": 119.96,
    "end": 120.3
  },
  {
    "word": " don't",
    "start": 120.3,
    "end": 120.54
  },
  {
    "word": " know",
    "start": 120.54,
    "end": 120.96
  },
  {
    "word": " if",
    "start": 120.96,
    "end": 121.48
  },
  {
    "word": " I'm",
    "start": 121.48,
    "end": 121.66
  },
  {
    "word": " walking",
    "start": 121.66,
    "end": 121.88
  },
  {
    "word": " on",
    "start": 121.88,
    "end": 122.06
  },
  {
    "word": " solid",
    "start": 122.06,
    "end": 122.74
  },
  {
    "word": " ground,",
    "start": 122.74,
    "end": 123.82
  },
  {
    "word": " because",
    "start": 123.82,
    "end": 125.2
  },
  {
    "word": " everything",
    "start": 125.2,
    "end": 125.84
  },
  {
    "word": " around",
    "start": 125.84,
    "end": 126.22
  },
  {
    "word": " me",
    "start": 126.22,
    "end": 126.7
  },
  {
    "word": " is",
    "start": 126.7,
    "end": 127.04
  },
  {
    "word": " crumbling",
    "start": 127.04,
    "end": 127.96
  },
  {
    "word": " down.",
    "start": 127.96,
    "end": 128.88
  },
  {
    "word": " And",
    "start": 129.62,
    "end": 129.74
  },
  {
    "word": " no,",
    "start": 129.74,
    "end": 130.04
  },
  {
    "word": " no,",
    "start": 130.08,
    "end": 130.24
  },
  {
    "word": " one",
    "start": 130.36,
    "end": 130.9
  },
  {
    "word": " is",
    "start": 130.9,
    "end": 131.3
  },
  {
    "word": " for",
    "start": 131.3,
    "end": 131.48
  },
  {
    "word": " someone",
    "start": 131.48,
    "end": 131.98
  },
  {
    "word": " to",
    "start": 131.98,
    "end": 132.82
  },
  {
    "word": " help",
    "start": 132.82,
    "end": 133.42
  },
  {
    "word": " me.",
    "start": 133.42,
    "end": 135.9
  },
  {
    "word": " What",
    "start": 136.56,
    "end": 137.06
  },
  {
    "word": " in",
    "start": 137.06,
    "end": 137.38
  },
  {
    "word": " the",
    "start": 137.38,
    "end": 137.58
  },
  {
    "word": " world",
    "start": 137.58,
    "end": 138.08
  },
  {
    "word": " am",
    "start": 138.08,
    "end": 138.6
  },
  {
    "word": " I",
    "start": 138.6,
    "end": 138.88
  },
  {
    "word": " gonna",
    "start": 138.88,
    "end": 139.24
  },
  {
    "word": " do",
    "start": 139.24,
    "end": 139.64
  },
  {
    "word": " tomorrow?",
    "start": 139.64,
    "end": 140.3
  },
  {
    "word": " Is",
    "start": 141.76,
    "end": 142.18
  },
  {
    "word": " there",
    "start": 142.18,
    "end": 142.38
  },
  {
    "word": " someone",
    "start": 142.38,
    "end": 142.94
  },
  {
    "word": " with",
    "start": 142.94,
    "end": 143.54
  },
  {
    "word": " the",
    "start": 143.54,
    "end": 143.82
  },
  {
    "word": " dollar",
    "start": 143.82,
    "end": 144.2
  },
  {
    "word": " I",
    "start": 144.2,
    "end": 144.56
  },
  {
    "word": " could",
    "start": 144.56,
    "end": 144.72
  },
  {
    "word": " borrow?",
    "start": 144.72,
    "end": 145.56
  },
  {
    "word": " Who",
    "start": 146.88,
    "end": 147.22
  },
  {
    "word": " can't",
    "start": 147.22,
    "end": 147.66
  },
  {
    "word": " help",
    "start": 147.66,
    "end": 147.8
  },
  {
    "word": " me",
    "start": 147.8,
    "end": 147.9
  },
  {
    "word": " take",
    "start": 147.9,
    "end": 148.16
  },
  {
    "word": " away",
    "start": 148.16,
    "end": 148.5
  },
  {
    "word": " my",
    "start": 148.5,
    "end": 148.9
  },
  {
    "word": " sorrow?",
    "start": 148.9,
    "end": 149.6
  },
  {
    "word": " Maybe",
    "start": 150.88,
    "end": 151.52
  },
  {
    "word": " it's",
    "start": 151.52,
    "end": 151.8
  },
  {
    "word": " inside",
    "start": 151.8,
    "end": 152.2
  },
  {
    "word": " the",
    "start": 152.2,
    "end": 152.42
  },
  {
    "word": " bottle.",
    "start": 152.42,
    "end": 152.86
  },
  {
    "word": " I",
    "start": 155.92000000000002,
    "end": 156.56
  },
  {
    "word": " had",
    "start": 156.56,
    "end": 157.04
  },
  {
    "word": " some",
    "start": 157.04,
    "end": 157.32
  },
  {
    "word": " good",
    "start": 157.32,
    "end": 157.52
  },
  {
    "word": " old",
    "start": 157.52,
    "end": 157.86
  },
  {
    "word": " buddies,",
    "start": 157.86,
    "end": 158.28
  },
  {
    "word": " names",
    "start": 158.64,
    "end": 158.94
  },
  {
    "word": " is",
    "start": 158.94,
    "end": 159.2
  },
  {
    "word": " whiskey",
    "start": 159.2,
    "end": 159.52
  },
  {
    "word": " and",
    "start": 159.52,
    "end": 159.78
  },
  {
    "word": " wine.",
    "start": 159.78,
    "end": 160.14
  },
  {
    "word": " Hey,",
    "start": 160.52,
    "end": 160.74
  },
  {
    "word": " hey,",
    "start": 160.9,
    "end": 161.04
  },
  {
    "word": " and",
    "start": 161.52,
    "end": 161.6
  },
  {
    "word": " for",
    "start": 161.6,
    "end": 161.92
  },
  {
    "word": " my",
    "start": 161.92,
    "end": 162.32
  },
  {
    "word": " good",
    "start": 162.32,
    "end": 162.48
  },
  {
    "word": " old",
    "start": 162.48,
    "end": 162.94
  },
  {
    "word": " buddies,",
    "start": 162.94,
    "end": 163.32
  },
  {
    "word": " I",
    "start": 163.8,
    "end": 163.8
  },
  {
    "word": " spent",
    "start": 163.8,
    "end": 164.12
  },
  {
    "word": " my",
    "start": 164.12,
    "end": 164.38
  },
  {
    "word": " last",
    "start": 164.38,
    "end": 164.64
  },
  {
    "word": " dime.",
    "start": 164.64,
    "end": 165.46
  },
  {
    "word": " Hey,",
    "start": 165.54,
    "end": 165.74
  },
  {
    "word": " hey,",
    "start": 165.88,
    "end": 166.0
  },
  {
    "word": " now",
    "start": 166.24,
    "end": 166.56
  },
  {
    "word": " wine",
    "start": 166.56,
    "end": 167.1
  },
  {
    "word": " is",
    "start": 167.1,
    "end": 167.32
  },
  {
    "word": " good",
    "start": 167.32,
    "end": 167.52
  },
  {
    "word": " to",
    "start": 167.52,
    "end": 167.76
  },
  {
    "word": " me.",
    "start": 167.76,
    "end": 168.26
  },
  {
    "word": " Help",
    "start": 168.52,
    "end": 168.82
  },
  {
    "word": " me",
    "start": 168.82,
    "end": 169.02
  },
  {
    "word": " pass",
    "start": 169.02,
    "end": 169.48
  },
  {
    "word": " time",
    "start": 169.48,
    "end": 170.24
  },
  {
    "word": " in",
    "start": 170.24,
    "end": 170.68
  },
  {
    "word": " my",
    "start": 170.68,
    "end": 170.94
  },
  {
    "word": " good",
    "start": 170.94,
    "end": 171.26
  },
  {
    "word": " old",
    "start": 171.26,
    "end": 171.5
  },
  {
    "word": " buddy",
    "start": 171.5,
    "end": 172.06
  },
  {
    "word": " whiskey.",
    "start": 172.06,
    "end": 172.7
  },
  {
    "word": " Keep",
    "start": 173.0,
    "end": 173.24
  },
  {
    "word": " me",
    "start": 173.24,
    "end": 173.4
  },
  {
    "word": " warm",
    "start": 173.4,
    "end": 173.74
  },
  {
    "word": " and",
    "start": 173.74,
    "end": 173.92
  },
  {
    "word": " sunshine.",
    "start": 173.92,
    "end": 174.9
  },
  {
    "word": " Your",
    "start": 175.9,
    "end": 176.46
  },
  {
    "word": " mama",
    "start": 176.46,
    "end": 177.0
  },
  {
    "word": " may",
    "start": 177.0,
    "end": 177.36
  },
  {
    "word": " have",
    "start": 177.36,
    "end": 177.9
  },
  {
    "word": " this",
    "start": 177.9,
    "end": 178.16
  },
  {
    "word": " child",
    "start": 178.16,
    "end": 178.9
  },
  {
    "word": " that's",
    "start": 178.9,
    "end": 179.22
  },
  {
    "word": " got",
    "start": 179.22,
    "end": 179.34
  },
  {
    "word": " his",
    "start": 179.34,
    "end": 179.62
  },
  {
    "word": " own.",
    "start": 179.62,
    "end": 180.38
  },
  {
    "word": " Hey,",
    "start": 180.46,
    "end": 180.7
  },
  {
    "word": " hey,",
    "start": 180.8,
    "end": 180.92
  },
  {
    "word": " if",
    "start": 180.92,
    "end": 181.58
  },
  {
    "word": " God",
    "start": 181.58,
    "end": 181.88
  },
  {
    "word": " has",
    "start": 181.88,
    "end": 182.18
  },
  {
    "word": " plans",
    "start": 182.18,
    "end": 182.48
  },
  {
    "word": " for",
    "start": 182.48,
    "end": 182.78
  },
  {
    "word": " me,",
    "start": 182.78,
    "end": 183.06
  },
  {
    "word": " I",
    "start": 183.56,
    "end": 183.56
  },
  {
    "word": " hope",
    "start": 183.56,
    "end": 183.74
  },
  {
    "word": " it",
    "start": 183.74,
    "end": 183.92
  },
  {
    "word": " ain't",
    "start": 183.92,
    "end": 184.14
  },
  {
    "word": " written",
    "start": 184.14,
    "end": 184.44
  },
  {
    "word": " this",
    "start": 184.44,
    "end": 184.64
  },
  {
    "word": " stone.",
    "start": 184.64,
    "end": 185.18
  },
  {
    "word": " Hey,",
    "start": 185.46,
    "end": 185.66
  },
  {
    "word": " hey,",
    "start": 185.82,
    "end": 186.0
  },
  {
    "word": " because",
    "start": 186.04,
    "end": 186.5
  },
  {
    "word": " I've",
    "start": 186.5,
    "end": 187.04
  },
  {
    "word": " been",
    "start": 187.04,
    "end": 187.22
  },
  {
    "word": " working,",
    "start": 187.22,
    "end": 187.66
  },
  {
    "word": " working",
    "start": 188.0,
    "end": 188.24
  },
  {
    "word": " myself",
    "start": 188.24,
    "end": 188.7
  },
  {
    "word": " down",
    "start": 188.7,
    "end": 189.12
  },
  {
    "word": " to",
    "start": 189.12,
    "end": 189.4
  },
  {
    "word": " the",
    "start": 189.4,
    "end": 189.68
  },
  {
    "word": " bone.",
    "start": 189.68,
    "end": 190.12
  },
  {
    "word": " And",
    "start": 190.52,
    "end": 190.68
  },
  {
    "word": " I",
    "start": 190.68,
    "end": 190.94
  },
  {
    "word": " swear",
    "start": 190.94,
    "end": 191.2
  },
  {
    "word": " on",
    "start": 191.2,
    "end": 191.48
  },
  {
    "word": " grandpa's",
    "start": 191.48,
    "end": 192.7
  },
  {
    "word": " grave,",
    "start": 192.7,
    "end": 192.7
  },
  {
    "word": " I'll",
    "start": 193.18,
    "end": 193.34
  },
  {
    "word": " be",
    "start": 193.34,
    "end": 193.46
  },
  {
    "word": " paid",
    "start": 193.46,
    "end": 193.88
  },
  {
    "word": " when",
    "start": 193.88,
    "end": 194.2
  },
  {
    "word": " I",
    "start": 194.2,
    "end": 194.36
  },
  {
    "word": " come",
    "start": 194.36,
    "end": 194.58
  },
  {
    "word": " home.",
    "start": 194.58,
    "end": 195.28
  },
  {
    "word": " Hey,",
    "start": 195.48,
    "end": 195.7
  },
  {
    "word": " hey,",
    "start": 195.86,
    "end": 196.04
  },
  {
    "word": " well",
    "start": 196.24,
    "end": 196.42
  },
  {
    "word": " I",
    "start": 196.42,
    "end": 196.62
  },
  {
    "word": " need",
    "start": 196.62,
    "end": 196.98
  },
  {
    "word": " a",
    "start": 196.98,
    "end": 197.44
  },
  {
    "word": " dollar,",
    "start": 197.44,
    "end": 197.64
  },
  {
    "word": " dollar,",
    "start": 198.02,
    "end": 198.32
  },
  {
    "word": " dollar",
    "start": 198.66,
    "end": 198.92
  },
  {
    "word": " is",
    "start": 198.92,
    "end": 199.18
  },
  {
    "word": " what",
    "start": 199.18,
    "end": 199.38
  },
  {
    "word": " I",
    "start": 199.38,
    "end": 199.62
  },
  {
    "word": " need.",
    "start": 199.62,
    "end": 200.08
  },
  {
    "word": " Hey,",
    "start": 200.54,
    "end": 200.76
  },
  {
    "word": " hey,",
    "start": 200.9,
    "end": 201.04
  },
  {
    "word": " said",
    "start": 201.34,
    "end": 201.46
  },
  {
    "word": " I",
    "start": 201.46,
    "end": 201.64
  },
  {
    "word": " need",
    "start": 201.64,
    "end": 201.9
  },
  {
    "word": " a",
    "start": 201.9,
    "end": 202.36
  },
  {
    "word": " dollar,",
    "start": 202.36,
    "end": 202.66
  },
  {
    "word": " dollar,",
    "start": 203.08,
    "end": 203.32
  },
  {
    "word": " dollar",
    "start": 203.66,
    "end": 203.92
  },
  {
    "word": " is",
    "start": 203.92,
    "end": 204.2
  },
  {
    "word": " what",
    "start": 204.2,
    "end": 204.4
  },
  {
    "word": " I",
    "start": 204.4,
    "end": 204.66
  },
  {
    "word": " need.",
    "start": 204.66,
    "end": 204.88
  },
  {
    "word": " Hey,",
    "start": 204.88,
    "end": 205.68
  },
  {
    "word": " hey,",
    "start": 205.68,
    "end": 206.0
  },
  {
    "word": " is",
    "start": 206.0,
    "end": 206.34
  },
  {
    "word": " what",
    "start": 206.34,
    "end": 206.4
  },
  {
    "word": " I",
    "start": 206.4,
    "end": 206.62
  },
  {
    "word": " need,",
    "start": 206.62,
    "end": 207.02
  },
  {
    "word": " a",
    "start": 207.34,
    "end": 207.36
  },
  {
    "word": " dollar,",
    "start": 207.36,
    "end": 207.64
  },
  {
    "word": " dollar,",
    "start": 208.04,
    "end": 208.3
  },
  {
    "word": " dollar,",
    "start": 208.68,
    "end": 208.92
  },
  {
    "word": " dollar",
    "start": 209.12,
    "end": 209.12
  },
  {
    "word": " is",
    "start": 209.12,
    "end": 209.28
  },
  {
    "word": " what",
    "start": 209.28,
    "end": 209.42
  },
  {
    "word": " I",
    "start": 209.42,
    "end": 209.66
  },
  {
    "word": " need.",
    "start": 209.66,
    "end": 210.1
  },
  {
    "word": " And",
    "start": 210.46,
    "end": 210.58
  },
  {
    "word": " then",
    "start": 210.58,
    "end": 210.68
  },
  {
    "word": " if",
    "start": 210.68,
    "end": 210.9
  },
  {
    "word": " I",
    "start": 210.9,
    "end": 211.06
  },
  {
    "word": " share",
    "start": 211.06,
    "end": 211.32
  },
  {
    "word": " with",
    "start": 211.32,
    "end": 211.52
  },
  {
    "word": " you",
    "start": 211.52,
    "end": 211.88
  },
  {
    "word": " my",
    "start": 211.88,
    "end": 212.28
  },
  {
    "word": " story,",
    "start": 212.28,
    "end": 212.66
  },
  {
    "word": " would",
    "start": 213.1,
    "end": 213.2
  },
  {
    "word": " you",
    "start": 213.2,
    "end": 213.48
  },
  {
    "word": " share",
    "start": 213.48,
    "end": 213.88
  },
  {
    "word": " your",
    "start": 213.88,
    "end": 214.2
  },
  {
    "word": " dollar",
    "start": 214.2,
    "end": 214.52
  },
  {
    "word": " with",
    "start": 214.52,
    "end": 214.74
  },
  {
    "word": " me?",
    "start": 214.74,
    "end": 215.06
  },
  {
    "word": " Come",
    "start": 215.44,
    "end": 215.64
  },
  {
    "word": " on,",
    "start": 215.64,
    "end": 215.98
  },
  {
    "word": " share",
    "start": 216.22,
    "end": 216.38
  },
  {
    "word": " your",
    "start": 216.38,
    "end": 216.68
  },
  {
    "word": " dollar",
    "start": 216.68,
    "end": 217.02
  },
  {
    "word": " with",
    "start": 217.02,
    "end": 217.3
  },
  {
    "word": " me.",
    "start": 217.3,
    "end": 217.6
  },
  {
    "word": " Go",
    "start": 217.98,
    "end": 218.18
  },
  {
    "word": " ahead,",
    "start": 218.18,
    "end": 218.5
  },
  {
    "word": " share",
    "start": 218.74,
    "end": 218.9
  },
  {
    "word": " your",
    "start": 218.9,
    "end": 219.22
  },
  {
    "word": " dollar",
    "start": 219.22,
    "end": 219.5
  },
  {
    "word": " with",
    "start": 219.5,
    "end": 219.78
  },
  {
    "word": " me.",
    "start": 219.78,
    "end": 220.1
  },
  {
    "word": " Come",
    "start": 220.52,
    "end": 220.64
  },
  {
    "word": " on,",
    "start": 220.64,
    "end": 220.98
  },
  {
    "word": " share",
    "start": 221.24,
    "end": 221.38
  },
  {
    "word": " your",
    "start": 221.38,
    "end": 221.66
  },
  {
    "word": " dollar,",
    "start": 221.66,
    "end": 222.08
  },
  {
    "word": " give",
    "start": 222.54,
    "end": 222.62
  },
  {
    "word": " me",
    "start": 222.62,
    "end": 222.78
  },
  {
    "word": " your",
    "start": 222.78,
    "end": 223.02
  },
  {
    "word": " dollar,",
    "start": 223.02,
    "end": 223.38
  },
  {
    "word": " share",
    "start": 223.76,
    "end": 223.88
  },
  {
    "word": " your",
    "start": 223.88,
    "end": 224.2
  },
  {
    "word": " dollar",
    "start": 224.2,
    "end": 224.56
  },
  {
    "word": " with",
    "start": 224.56,
    "end": 224.86
  },
  {
    "word": " me.",
    "start": 224.86,
    "end": 225.1
  },
  {
    "word": " Come",
    "start": 225.5,
    "end": 225.6
  },
  {
    "word": " on,",
    "start": 225.6,
    "end": 226.0
  },
  {
    "word": " share",
    "start": 226.24,
    "end": 226.38
  },
  {
    "word": " your",
    "start": 226.38,
    "end": 226.68
  },
  {
    "word": " dollar",
    "start": 226.68,
    "end": 227.04
  },
  {
    "word": " with",
    "start": 227.04,
    "end": 227.3
  },
  {
    "word": " me.",
    "start": 227.3,
    "end": 227.68
  }
]

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
                              ? 'skyblue'
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