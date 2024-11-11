import React, { useState, useEffect, useRef } from 'react';
import songFile from "./../PythonBE/Aloe Blacc - I Need A Dollar.mp3"; // Import audio file (place in an audio folder)

const lyricsData = [
    {
        "word": "I",
        "start": 10.600000000000001,
        "end": 11.120000000000001
    },
    {
        "word": "need",
        "start": 11.120000000000001,
        "end": 11.64
    },
    {
        "word": "a",
        "start": 11.64,
        "end": 11.98
    },
    {
        "word": "dol-lar,",
        "start": 11.98,
        "end": 12.34
    },
    {
        "word": "dol-lar,",
        "start": 12.48,
        "end": 13.0
    },
    {
        "word": "dol-lar,",
        "start": 13.12,
        "end": 13.36
    },
    {
        "word": "that's",
        "start": 13.62,
        "end": 13.72
    },
    {
        "word": "what",
        "start": 13.72,
        "end": 13.92
    },
    {
        "word": "I",
        "start": 13.92,
        "end": 14.28
    },
    {
        "word": "need.",
        "start": 14.28,
        "end": 14.82
    },
    {
        "word": "Hey,",
        "start": 15.3,
        "end": 15.42
    },
    {
        "word": "hey.",
        "start": 15.68,
        "end": 15.74
    },
    {
        "word": "Well,",
        "start": 15.86,
        "end": 16.02
    },
    {
        "word": "I",
        "start": 16.02,
        "end": 16.3
    },
    {
        "word": "need",
        "start": 16.3,
        "end": 16.72
    },
    {
        "word": "a",
        "start": 16.72,
        "end": 17.02
    },
    {
        "word": "dol-lar,",
        "start": 17.02,
        "end": 17.44
    },
    {
        "word": "dol-lar,",
        "start": 17.7,
        "end": 18.14
    },
    {
        "word": "dol-lar,",
        "start": 18.32,
        "end": 18.42
    },
    {
        "word": "that's",
        "start": 18.68,
        "end": 18.78
    },
    {
        "word": "what",
        "start": 18.78,
        "end": 19.08
    },
    {
        "word": "I",
        "start": 19.08,
        "end": 19.4
    },
    {
        "word": "need.",
        "start": 19.4,
        "end": 19.92
    },
    {
        "word": "Hey,",
        "start": 20.12,
        "end": 20.46
    },
    {
        "word": "hey.",
        "start": 20.46,
        "end": 20.66
    },
    {
        "word": "Said",
        "start": 20.94,
        "end": 21.08
    },
    {
        "word": "I",
        "start": 21.08,
        "end": 21.22
    },
    {
        "word": "need",
        "start": 21.22,
        "end": 21.84
    },
    {
        "word": "a",
        "start": 21.84,
        "end": 22.1
    },
    {
        "word": "dol-lar,",
        "start": 22.1,
        "end": 22.52
    },
    {
        "word": "dol-lar,",
        "start": 22.7,
        "end": 23.16
    },
    {
        "word": "dol-lar,",
        "start": 23.34,
        "end": 23.52
    },
    {
        "word": "that's",
        "start": 23.74,
        "end": 23.88
    },
    {
        "word": "what",
        "start": 23.88,
        "end": 24.1
    },
    {
        "word": "I",
        "start": 24.1,
        "end": 24.48
    },
    {
        "word": "need.",
        "start": 24.48,
        "end": 24.84
    },
    {
        "word": "And",
        "start": 24.84,
        "end": 25.12
    },
    {
        "word": "if",
        "start": 25.12,
        "end": 25.48
    },
    {
        "word": "I",
        "start": 25.48,
        "end": 25.8
    },
    {
        "word": "share",
        "start": 25.8,
        "end": 25.98
    },
    {
        "word": "with",
        "start": 25.98,
        "end": 26.34
    },
    {
        "word": "you",
        "start": 26.34,
        "end": 26.72
    },
    {
        "word": "my",
        "start": 26.72,
        "end": 27.02
    },
    {
        "word": "sto-ry,",
        "start": 27.02,
        "end": 27.62
    },
    {
        "word": "would",
        "start": 27.7,
        "end": 28.06
    },
    {
        "word": "you",
        "start": 28.06,
        "end": 28.4
    },
    {
        "word": "share",
        "start": 28.4,
        "end": 28.62
    },
    {
        "word": "your",
        "start": 28.62,
        "end": 29.06
    },
    {
        "word": "dol-lar",
        "start": 29.06,
        "end": 29.24
    },
    {
        "word": "with",
        "start": 29.24,
        "end": 29.42
    },
    {
        "word": "me?",
        "start": 29.42,
        "end": 30.26
    },
    {
        "word": "Bad",
        "start": 31.36,
        "end": 31.62
    },
    {
        "word": "times",
        "start": 31.62,
        "end": 32.0
    },
    {
        "word": "are",
        "start": 32.0,
        "end": 32.22
    },
    {
        "word": "com-ing",
        "start": 32.22,
        "end": 32.56
    },
    {
        "word": "and",
        "start": 32.56,
        "end": 32.98
    },
    {
        "word": "I",
        "start": 32.98,
        "end": 33.4
    },
    {
        "word": "reap",
        "start": 33.4,
        "end": 33.68
    },
    {
        "word": "what",
        "start": 33.68,
        "end": 34.08
    },
    {
        "word": "I",
        "start": 34.08,
        "end": 34.3
    },
    {
        "word": "done",
        "start": 34.3,
        "end": 34.62
    },
    {
        "word": "sowed.",
        "start": 34.62,
        "end": 35.38
    },
    {
        "word": "Hey,",
        "start": 35.38,
        "end": 35.68
    },
    {
        "word": "hey.",
        "start": 36.16,
        "end": 36.16
    },
    {
        "word": "Well,",
        "start": 36.22,
        "end": 36.54
    },
    {
        "word": "let",
        "start": 36.54,
        "end": 36.84
    },
    {
        "word": "me",
        "start": 36.84,
        "end": 37.06
    },
    {
        "word": "tell",
        "start": 37.06,
        "end": 37.36
    },
    {
        "word": "you",
        "start": 37.36,
        "end": 37.86
    },
    {
        "word": "some-thing,",
        "start": 37.86,
        "end": 38.26
    },
    {
        "word": "all",
        "start": 38.46,
        "end": 38.82
    },
    {
        "word": "that",
        "start": 38.82,
        "end": 39.16
    },
    {
        "word": "glit-ters",
        "start": 39.16,
        "end": 39.4
    },
    {
        "word": "ain't",
        "start": 39.4,
        "end": 39.74
    },
    {
        "word": "gold.",
        "start": 39.74,
        "end": 40.18
    },
    {
        "word": "Hey,",
        "start": 40.4,
        "end": 40.76
    },
    {
        "word": "hey.",
        "start": 40.76,
        "end": 40.96
    },
    {
        "word": "It's",
        "start": 41.26,
        "end": 41.66
    },
    {
        "word": "been",
        "start": 41.66,
        "end": 41.94
    },
    {
        "word": "a",
        "start": 41.94,
        "end": 42.2
    },
    {
        "word": "long,",
        "start": 42.2,
        "end": 42.46
    },
    {
        "word": "old",
        "start": 42.68,
        "end": 42.76
    },
    {
        "word": "trou-ble,",
        "start": 42.76,
        "end": 43.38
    },
    {
        "word": "long,",
        "start": 43.42,
        "end": 43.9
    },
    {
        "word": "old",
        "start": 43.94,
        "end": 44.18
    },
    {
        "word": "trou-ble-some",
        "start": 44.18,
        "end": 44.52
    },
    {
        "word": "road.",
        "start": 44.52,
        "end": 45.04
    },
    {
        "word": "And",
        "start": 45.28,
        "end": 45.7
    },
    {
        "word": "I'm",
        "start": 45.7,
        "end": 46.0
    },
    {
        "word": "look-ing",
        "start": 46.0,
        "end": 46.32
    },
    {
        "word": "for",
        "start": 46.32,
        "end": 46.94
    },
    {
        "word": "some-body",
        "start": 46.94,
        "end": 47.7
    },
    {
        "word": "to",
        "start": 47.7,
        "end": 47.98
    },
    {
        "word": "come",
        "start": 47.98,
        "end": 48.12
    },
    {
        "word": "and",
        "start": 48.12,
        "end": 48.5
    },
    {
        "word": "help",
        "start": 48.5,
        "end": 48.78
    },
    {
        "word": "me",
        "start": 48.78,
        "end": 49.14
    },
    {
        "word": "car-ry",
        "start": 49.14,
        "end": 49.4
    },
    {
        "word": "this",
        "start": 49.4,
        "end": 49.68
    },
    {
        "word": "load.",
        "start": 49.68,
        "end": 50.24
    },
    {
        "word": "I",
        "start": 51.09,
        "end": 51.46
    },
    {
        "word": "need",
        "start": 51.46,
        "end": 52.04
    },
    {
        "word": "a",
        "start": 52.04,
        "end": 52.42
    },
    {
        "word": "dol-lar,",
        "start": 52.42,
        "end": 52.8
    },
    {
        "word": "dol-lar,",
        "start": 52.92,
        "end": 53.4
    },
    {
        "word": "dol-lar,",
        "start": 53.54,
        "end": 53.8
    },
    {
        "word": "that's",
        "start": 54.06,
        "end": 54.16
    },
    {
        "word": "what",
        "start": 54.16,
        "end": 54.4
    },
    {
        "word": "I",
        "start": 54.4,
        "end": 54.74
    },
    {
        "word": "need.",
        "start": 54.74,
        "end": 55.3
    },
    {
        "word": "Hey,",
        "start": 55.6,
        "end": 55.84
    },
    {
        "word": "hey.",
        "start": 55.84,
        "end": 56.2
    },
    {
        "word": "Well,",
        "start": 56.26,
        "end": 56.44
    },
    {
        "word": "I",
        "start": 56.44,
        "end": 56.68
    },
    {
        "word": "need",
        "start": 56.68,
        "end": 57.14
    },
    {
        "word": "a",
        "start": 57.14,
        "end": 57.52
    },
    {
        "word": "dol-lar,",
        "start": 57.52,
        "end": 57.86
    },
    {
        "word": "dol-lar,",
        "start": 58.06,
        "end": 58.5
    },
    {
        "word": "dol-lar,",
        "start": 58.7,
        "end": 58.88
    },
    {
        "word": "that's",
        "start": 59.14,
        "end": 59.26
    },
    {
        "word": "what",
        "start": 59.26,
        "end": 59.48
    },
    {
        "word": "I",
        "start": 59.48,
        "end": 59.84
    },
    {
        "word": "need.",
        "start": 59.84,
        "end": 60.66
    },
    {
        "word": "Well,",
        "start": 61.9,
        "end": 62.14
    },
    {
        "word": "I",
        "start": 62.14,
        "end": 62.34
    },
    {
        "word": "don't",
        "start": 62.34,
        "end": 62.68
    },
    {
        "word": "know",
        "start": 62.68,
        "end": 63.34
    },
    {
        "word": "if",
        "start": 63.34,
        "end": 63.52
    },
    {
        "word": "I'm",
        "start": 63.52,
        "end": 63.74
    },
    {
        "word": "walk-ing",
        "start": 63.74,
        "end": 63.98
    },
    {
        "word": "on",
        "start": 63.98,
        "end": 64.42
    },
    {
        "word": "sol-id",
        "start": 64.42,
        "end": 65.02
    },
    {
        "word": "ground,",
        "start": 65.02,
        "end": 66.08
    },
    {
        "word": "cause",
        "start": 66.94,
        "end": 67.38
    },
    {
        "word": "ev-ery-thing",
        "start": 67.38,
        "end": 67.9
    },
    {
        "word": "around",
        "start": 67.9,
        "end": 68.4
    },
    {
        "word": "me",
        "start": 68.4,
        "end": 69.02
    },
    {
        "word": "is",
        "start": 69.02,
        "end": 69.64
    },
    {
        "word": "fall-ing",
        "start": 69.64,
        "end": 70.14
    },
    {
        "word": "down.",
        "start": 70.14,
        "end": 71.34
    },
    {
        "word": "And",
        "start": 71.76,
        "end": 72.04
    },
    {
        "word": "all",
        "start": 72.04,
        "end": 72.24
    },
    {
        "word": "I",
        "start": 72.24,
        "end": 72.7
    },
    {
        "word": "want",
        "start": 72.7,
        "end": 73.2
    },
    {
        "word": "is",
        "start": 73.2,
        "end": 73.52
    },
    {
        "word": "for",
        "start": 73.52,
        "end": 73.68
    },
    {
        "word": "some-one",
        "start": 73.68,
        "end": 74.3
    },
    {
        "word": "to",
        "start": 74.3,
        "end": 75.26
    },
    {
        "word": "help",
        "start": 75.26,
        "end": 75.68
    },
    {
        "word": "me.",
        "start": 75.68,
        "end": 78.2
    },
    {
        "word": "I",
        "start": 78.92,
        "end": 79.24
    },
    {
        "word": "had",
        "start": 79.24,
        "end": 79.86
    },
    {
        "word": "a",
        "start": 79.86,
        "end": 80.16
    },
    {
        "word": "job,",
        "start": 80.16,
        "end": 80.64
    },
    {
        "word": "but",
        "start": 80.98,
        "end": 81.12
    },
    {
        "word": "the",
        "start": 81.12,
        "end": 81.36
    },
    {
        "word": "boss",
        "start": 81.36,
        "end": 81.56
    },
    {
        "word": "man",
        "start": 81.56,
        "end": 81.8
    },
    {
        "word": "let",
        "start": 81.8,
        "end": 82.06
    },
    {
        "word": "me",
        "start": 82.06,
        "end": 82.44
    },
    {
        "word": "go.",
        "start": 82.44,
        "end": 82.94
    },
    {
        "word": "He",
        "start": 83.06,
        "end": 83.44
    },
    {
        "word": "said,",
        "start": 83.44,
        "end": 83.78
    },
    {
        "word": "I'm",
        "start": 84.0,
        "end": 84.44
    },
    {
        "word": "sor-ry,",
        "start": 84.44,
        "end": 84.88
    },
    {
        "word": "but",
        "start": 84.96,
        "end": 85.26
    },
    {
        "word": "I",
        "start": 85.26,
        "end": 85.7
    },
    {
        "word": "won't",
        "start": 85.7,
        "end": 85.98
    },
    {
        "word": "be",
        "start": 85.98,
        "end": 86.3
    },
    {
        "word": "need-ing",
        "start": 86.3,
        "end": 86.56
    },
    {
        "word": "your",
        "start": 86.56,
        "end": 86.92
    },
    {
        "word": "help",
        "start": 86.92,
        "end": 87.16
    },
    {
        "word": "no",
        "start": 87.16,
        "end": 87.52
    },
    {
        "word": "more.",
        "start": 87.52,
        "end": 88.04
    },
    {
        "word": "I",
        "start": 88.14,
        "end": 88.58
    },
    {
        "word": "said,",
        "start": 88.58,
        "end": 88.82
    },
    {
        "word": "please,",
        "start": 89.02,
        "end": 89.58
    },
    {
        "word": "Mr.",
        "start": 89.74,
        "end": 90.02
    },
    {
        "word": "Boss",
        "start": 90.04,
        "end": 90.38
    },
    {
        "word": "Man,",
        "start": 90.38,
        "end": 90.68
    },
    {
        "word": "I",
        "start": 90.68,
        "end": 90.86
    },
    {
        "word": "need",
        "start": 90.86,
        "end": 91.18
    },
    {
        "word": "this",
        "start": 91.18,
        "end": 91.46
    },
    {
        "word": "job",
        "start": 91.46,
        "end": 91.68
    },
    {
        "word": "more",
        "start": 91.68,
        "end": 92.0
    },
    {
        "word": "than",
        "start": 92.0,
        "end": 92.2
    },
    {
        "word": "you",
        "start": 92.2,
        "end": 92.56
    },
    {
        "word": "know.",
        "start": 92.56,
        "end": 92.9
    },
    {
        "word": "But",
        "start": 93.2,
        "end": 93.48
    },
    {
        "word": "he",
        "start": 93.48,
        "end": 93.82
    },
    {
        "word": "gave",
        "start": 93.82,
        "end": 94.02
    },
    {
        "word": "me",
        "start": 94.02,
        "end": 94.44
    },
    {
        "word": "my",
        "start": 94.44,
        "end": 94.82
    },
    {
        "word": "last",
        "start": 94.82,
        "end": 95.14
    },
    {
        "word": "pay-check",
        "start": 95.14,
        "end": 95.64
    },
    {
        "word": "and",
        "start": 95.64,
        "end": 96.14
    },
    {
        "word": "he",
        "start": 96.14,
        "end": 96.44
    },
    {
        "word": "sent",
        "start": 96.44,
        "end": 96.54
    },
    {
        "word": "me",
        "start": 96.54,
        "end": 96.88
    },
    {
        "word": "on",
        "start": 96.88,
        "end": 97.1
    },
    {
        "word": "out",
        "start": 97.1,
        "end": 97.52
    },
    {
        "word": "though.",
        "start": 97.52,
        "end": 98.16
    },
    {
        "word": "Well,",
        "start": 99.08,
        "end": 99.3
    },
    {
        "word": "I",
        "start": 99.3,
        "end": 99.54
    },
    {
        "word": "need",
        "start": 99.54,
        "end": 100.0
    },
    {
        "word": "a",
        "start": 100.0,
        "end": 100.24
    },
    {
        "word": "dol-lar,",
        "start": 100.24,
        "end": 100.72
    },
    {
        "word": "dol-lar,",
        "start": 100.78,
        "end": 101.36
    },
    {
        "word": "dol-lar,",
        "start": 101.44,
        "end": 101.72
    },
    {
        "word": "that's",
        "start": 102.0,
        "end": 102.0
    },
    {
        "word": "what",
        "start": 102.0,
        "end": 102.24
    },
    {
        "word": "I",
        "start": 102.24,
        "end": 102.62
    },
    {
        "word": "need.",
        "start": 102.62,
        "end": 103.22
    },
    {
        "word": "Hey,",
        "start": 103.46,
        "end": 103.74
    },
    {
        "word": "hey.",
        "start": 104.0,
        "end": 104.06
    },
    {
        "word": "Said,",
        "start": 104.06,
        "end": 104.32
    },
    {
        "word": "I",
        "start": 104.5,
        "end": 104.5
    },
    {
        "word": "need",
        "start": 104.5,
        "end": 105.08
    },
    {
        "word": "a",
        "start": 105.08,
        "end": 105.34
    },
    {
        "word": "dol-lar,",
        "start": 105.34,
        "end": 105.78
    },
    {
        "word": "dol-lar,",
        "start": 105.8,
        "end": 106.42
    },
    {
        "word": "dol-lar,",
        "start": 106.58,
        "end": 106.78
    },
    {
        "word": "that's",
        "start": 107.04,
        "end": 107.12
    },
    {
        "word": "what",
        "start": 107.12,
        "end": 107.32
    },
    {
        "word": "I",
        "start": 107.32,
        "end": 107.7
    },
    {
        "word": "need.",
        "start": 107.7,
        "end": 108.14
    },
    {
        "word": "Hey,",
        "start": 108.42,
        "end": 108.8
    },
    {
        "word": "hey.",
        "start": 108.8,
        "end": 108.98
    },
    {
        "word": "And",
        "start": 109.2,
        "end": 109.42
    },
    {
        "word": "I",
        "start": 109.42,
        "end": 109.7
    },
    {
        "word": "need",
        "start": 109.7,
        "end": 110.28
    },
    {
        "word": "a",
        "start": 110.28,
        "end": 110.54
    },
    {
        "word": "dol-lar,",
        "start": 110.54,
        "end": 110.88
    },
    {
        "word": "dol-lar,",
        "start": 111.0,
        "end": 111.52
    },
    {
        "word": "dol-lar,",
        "start": 111.76,
        "end": 111.86
    },
    {
        "word": "that's",
        "start": 112.12,
        "end": 112.22
    },
    {
        "word": "what",
        "start": 112.22,
        "end": 112.46
    },
    {
        "word": "I",
        "start": 112.46,
        "end": 112.86
    },
    {
        "word": "need.",
        "start": 112.86,
        "end": 113.16
    },
    {
        "word": "And",
        "start": 113.36,
        "end": 113.58
    },
    {
        "word": "if",
        "start": 113.58,
        "end": 113.84
    },
    {
        "word": "I",
        "start": 113.84,
        "end": 114.14
    },
    {
        "word": "share",
        "start": 114.14,
        "end": 114.3
    },
    {
        "word": "with",
        "start": 114.3,
        "end": 114.62
    },
    {
        "word": "you",
        "start": 114.62,
        "end": 115.02
    },
    {
        "word": "my",
        "start": 115.02,
        "end": 115.36
    },
    {
        "word": "sto-ry,",
        "start": 115.36,
        "end": 115.94
    },
    {
        "word": "would",
        "start": 116.12,
        "end": 116.24
    },
    {
        "word": "you",
        "start": 116.24,
        "end": 116.72
    },
    {
        "word": "share",
        "start": 116.72,
        "end": 116.92
    },
    {
        "word": "your",
        "start": 116.92,
        "end": 117.36
    },
    {
        "word": "dol-lar",
        "start": 117.36,
        "end": 117.54
    },
    {
        "word": "with",
        "start": 117.54,
        "end": 117.84
    },
    {
        "word": "me?",
        "start": 117.84,
        "end": 118.66
    },
    {
        "word": "Well,",
        "start": 119.78,
        "end": 120.04
    },
    {
        "word": "I",
        "start": 120.04,
        "end": 120.38
    },
    {
        "word": "don't",
        "start": 120.38,
        "end": 120.74
    },
    {
        "word": "know",
        "start": 120.74,
        "end": 121.34
    },
    {
        "word": "if",
        "start": 121.34,
        "end": 121.5
    },
    {
        "word": "I'm",
        "start": 121.5,
        "end": 121.76
    },
    {
        "word": "walk-ing",
        "start": 121.76,
        "end": 121.92
    },
    {
        "word": "on",
        "start": 121.92,
        "end": 122.38
    },
    {
        "word": "sol-id",
        "start": 122.38,
        "end": 122.92
    },
    {
        "word": "ground,",
        "start": 122.92,
        "end": 124.42
    },
    {
        "word": "cause",
        "start": 124.96,
        "end": 125.34
    },
    {
        "word": "ev-ery-thing",
        "start": 125.34,
        "end": 125.92
    },
    {
        "word": "around",
        "start": 125.92,
        "end": 126.42
    },
    {
        "word": "me",
        "start": 126.42,
        "end": 127.0
    },
    {
        "word": "is",
        "start": 127.0,
        "end": 127.64
    },
    {
        "word": "crum-bling",
        "start": 127.64,
        "end": 128.08
    },
    {
        "word": "down.",
        "start": 128.08,
        "end": 129.18
    },
    {
        "word": "And",
        "start": 129.18,
        "end": 129.78
    },
    {
        "word": "all",
        "start": 129.78,
        "end": 130.14
    },
    {
        "word": "I",
        "start": 130.14,
        "end": 130.68
    },
    {
        "word": "want",
        "start": 130.68,
        "end": 131.1
    },
    {
        "word": "is",
        "start": 131.1,
        "end": 131.42
    },
    {
        "word": "for",
        "start": 131.42,
        "end": 131.78
    },
    {
        "word": "some-one",
        "start": 131.78,
        "end": 132.22
    },
    {
        "word": "to",
        "start": 132.22,
        "end": 132.98
    },
    {
        "word": "help",
        "start": 132.98,
        "end": 133.52
    },
    {
        "word": "me.",
        "start": 133.52,
        "end": 133.9
    },
    {
        "word": "What",
        "start": 136.84,
        "end": 137.12
    },
    {
        "word": "in",
        "start": 137.12,
        "end": 137.5
    },
    {
        "word": "the",
        "start": 137.5,
        "end": 137.82
    },
    {
        "word": "world",
        "start": 137.82,
        "end": 138.24
    },
    {
        "word": "am",
        "start": 138.24,
        "end": 138.72
    },
    {
        "word": "I",
        "start": 138.72,
        "end": 139.04
    },
    {
        "word": "go-ing",
        "start": 139.04,
        "end": 139.32
    },
    {
        "word": "to",
        "start": 139.32,
        "end": 139.58
    },
    {
        "word": "do",
        "start": 139.58,
        "end": 139.74
    },
    {
        "word": "to-mor-row?",
        "start": 139.74,
        "end": 140.88
    },
    {
        "word": "Is",
        "start": 141.98,
        "end": 142.3
    },
    {
        "word": "there",
        "start": 142.3,
        "end": 142.62
    },
    {
        "word": "some-one",
        "start": 142.62,
        "end": 143.28
    },
    {
        "word": "with",
        "start": 143.28,
        "end": 143.72
    },
    {
        "word": "a",
        "start": 143.72,
        "end": 144.04
    },
    {
        "word": "dol-lar",
        "start": 144.04,
        "end": 144.36
    },
    {
        "word": "I",
        "start": 144.36,
        "end": 144.68
    },
    {
        "word": "could",
        "start": 144.68,
        "end": 145.0
    },
    {
        "word": "bor-row?",
        "start": 145.0,
        "end": 146.14
    },
    {
        "word": "Who",
        "start": 146.88,
        "end": 147.32
    },
    {
        "word": "can",
        "start": 147.32,
        "end": 147.6
    },
    {
        "word": "help",
        "start": 147.6,
        "end": 147.82
    },
    {
        "word": "me",
        "start": 147.82,
        "end": 148.04
    },
    {
        "word": "take",
        "start": 148.04,
        "end": 148.26
    },
    {
        "word": "away",
        "start": 148.26,
        "end": 148.7
    },
    {
        "word": "my",
        "start": 148.7,
        "end": 149.1
    },
    {
        "word": "sor-row?",
        "start": 149.1,
        "end": 150.18
    },
    {
        "word": "Maybe",
        "start": 151.28,
        "end": 151.6
    },
    {
        "word": "it's",
        "start": 151.6,
        "end": 151.96
    },
    {
        "word": "in-side",
        "start": 151.96,
        "end": 152.3
    },
    {
        "word": "the",
        "start": 152.3,
        "end": 152.6
    },
    {
        "word": "bot-tle.",
        "start": 152.6,
        "end": 153.24
    },
    {
        "word": "Maybe",
        "start": 153.7,
        "end": 154.0
    },
    {
        "word": "it's",
        "start": 154.0,
        "end": 154.44
    },
    {
        "word": "in-side",
        "start": 154.44,
        "end": 154.76
    },
    {
        "word": "the",
        "start": 154.76,
        "end": 155.02
    },
    {
        "word": "bot-tle.",
        "start": 155.02,
        "end": 155.54
    },
    {
        "word": "I",
        "start": 156.32,
        "end": 156.62
    },
    {
        "word": "had",
        "start": 156.62,
        "end": 157.18
    },
    {
        "word": "some",
        "start": 157.18,
        "end": 157.46
    },
    {
        "word": "good",
        "start": 157.46,
        "end": 157.66
    },
    {
        "word": "old",
        "start": 157.66,
        "end": 158.02
    },
    {
        "word": "bud-dies,",
        "start": 158.02,
        "end": 158.38
    },
    {
        "word": "names",
        "start": 158.66,
        "end": 158.96
    },
    {
        "word": "is",
        "start": 158.96,
        "end": 159.3
    },
    {
        "word": "whiskey",
        "start": 159.3,
        "end": 159.64
    },
    {
        "word": "and",
        "start": 159.64,
        "end": 159.9
    },
    {
        "word": "wine.",
        "start": 159.9,
        "end": 160.4
    },
    {
        "word": "Hey,",
        "start": 160.66,
        "end": 160.94
    },
    {
        "word": "hey.",
        "start": 161.38,
        "end": 161.38
    },
    {
        "word": "And",
        "start": 161.54,
        "end": 161.88
    },
    {
        "word": "for",
        "start": 161.88,
        "end": 162.12
    },
    {
        "word": "my",
        "start": 162.12,
        "end": 162.42
    },
    {
        "word": "good",
        "start": 162.42,
        "end": 162.72
    },
    {
        "word": "old",
        "start": 162.72,
        "end": 163.06
    },
    {
        "word": "bud-dies,",
        "start": 163.06,
        "end": 163.48
    },
    {
        "word": "I",
        "start": 163.62,
        "end": 164.0
    },
    {
        "word": "spent",
        "start": 164.0,
        "end": 164.18
    },
    {
        "word": "my",
        "start": 164.18,
        "end": 164.48
    },
    {
        "word": "last",
        "start": 164.48,
        "end": 164.82
    },
    {
        "word": "dime.",
        "start": 164.82,
        "end": 165.44
    },
    {
        "word": "Hey,",
        "start": 165.54,
        "end": 165.94
    },
    {
        "word": "hey.",
        "start": 166.16,
        "end": 166.16
    },
    {
        "word": "Now",
        "start": 166.46,
        "end": 166.76
    },
    {
        "word": "wine",
        "start": 166.76,
        "end": 167.18
    },
    {
        "word": "is",
        "start": 167.18,
        "end": 167.44
    },
    {
        "word": "good",
        "start": 167.44,
        "end": 167.6
    },
    {
        "word": "to",
        "start": 167.6,
        "end": 167.94
    },
    {
        "word": "me,",
        "start": 167.94,
        "end": 168.32
    },
    {
        "word": "it",
        "start": 168.64,
        "end": 168.78
    },
    {
        "word": "helped",
        "start": 168.78,
        "end": 168.9
    },
    {
        "word": "me",
        "start": 168.9,
        "end": 169.24
    },
    {
        "word": "pass",
        "start": 169.24,
        "end": 169.58
    },
    {
        "word": "the",
        "start": 169.58,
        "end": 169.92
    },
    {
        "word": "time.",
        "start": 169.92,
        "end": 170.32
    },
    {
        "word": "And",
        "start": 170.66,
        "end": 170.82
    },
    {
        "word": "my",
        "start": 170.82,
        "end": 171.18
    },
    {
        "word": "good",
        "start": 171.18,
        "end": 171.44
    },
    {
        "word": "old",
        "start": 171.44,
        "end": 171.88
    },
    {
        "word": "bud-dy",
        "start": 171.88,
        "end": 172.28
    },
    {
        "word": "whiskey",
        "start": 172.28,
        "end": 172.92
    },
    {
        "word": "keep",
        "start": 172.92,
        "end": 173.22
    },
    {
        "word": "me",
        "start": 173.22,
        "end": 173.68
    },
    {
        "word": "warm",
        "start": 173.68,
        "end": 173.84
    },
    {
        "word": "in",
        "start": 173.84,
        "end": 174.02
    },
    {
        "word": "the",
        "start": 174.02,
        "end": 174.32
    },
    {
        "word": "sun-shine.",
        "start": 174.32,
        "end": 174.96
    },
    {
        "word": "Hey,",
        "start": 175.52,
        "end": 175.86
    },
    {
        "word": "hey.",
        "start": 175.88,
        "end": 176.06
    },
    {
        "word": "Your",
        "start": 176.4,
        "end": 176.68
    },
    {
        "word": "ma-ma",
        "start": 176.68,
        "end": 177.1
    },
    {
        "word": "may",
        "start": 177.1,
        "end": 177.56
    },
    {
        "word": "have",
        "start": 177.56,
        "end": 177.98
    },
    {
        "word": "just",
        "start": 177.98,
        "end": 178.26
    },
    {
        "word": "a",
        "start": 178.26,
        "end": 178.54
    },
    {
        "word": "child",
        "start": 178.54,
        "end": 179.0
    },
    {
        "word": "that's",
        "start": 179.0,
        "end": 179.3
    },
    {
        "word": "got",
        "start": 179.3,
        "end": 179.46
    },
    {
        "word": "his",
        "start": 179.46,
        "end": 179.92
    },
    {
        "word": "own.",
        "start": 179.92,
        "end": 180.38
    },
    {
        "word": "Hey,",
        "start": 180.46,
        "end": 180.88
    },
    {
        "word": "hey.",
        "start": 180.9,
        "end": 181.08
    },
    {
        "word": "If",
        "start": 181.48,
        "end": 181.72
    },
    {
        "word": "God",
        "start": 181.72,
        "end": 182.0
    },
    {
        "word": "has",
        "start": 182.0,
        "end": 182.24
    },
    {
        "word": "plans",
        "start": 182.24,
        "end": 182.58
    },
    {
        "word": "for",
        "start": 182.58,
        "end": 182.82
    },
    {
        "word": "me,",
        "start": 182.82,
        "end": 183.3
    },
    {
        "word": "I",
        "start": 183.44,
        "end": 183.62
    },
    {
        "word": "hope",
        "start": 183.62,
        "end": 183.78
    },
    {
        "word": "it",
        "start": 183.78,
        "end": 184.0
    },
    {
        "word": "ain't",
        "start": 184.0,
        "end": 184.18
    },
    {
        "word": "writ-ten",
        "start": 184.18,
        "end": 184.48
    },
    {
        "word": "in",
        "start": 184.48,
        "end": 184.88
    },
    {
        "word": "stone.",
        "start": 184.88,
        "end": 185.26
    },
    {
        "word": "Hey,",
        "start": 185.26,
        "end": 185.88
    },
    {
        "word": "hey.",
        "start": 185.88,
        "end": 186.16
    },
    {
        "word": "Be-cause",
        "start": 186.66,
        "end": 186.66
    },
    {
        "word": "I've",
        "start": 186.66,
        "end": 187.18
    },
    {
        "word": "been",
        "start": 187.18,
        "end": 187.38
    },
    {
        "word": "work-ing,",
        "start": 187.38,
        "end": 187.88
    },
    {
        "word": "work-ing",
        "start": 188.06,
        "end": 188.36
    },
    {
        "word": "my-self",
        "start": 188.36,
        "end": 188.9
    },
    {
        "word": "down",
        "start": 188.9,
        "end": 189.24
    },
    {
        "word": "to",
        "start": 189.24,
        "end": 189.64
    },
    {
        "word": "the",
        "start": 189.64,
        "end": 189.92
    },
    {
        "word": "bone.",
        "start": 189.92,
        "end": 190.22
    },
    {
        "word": "And",
        "start": 190.48,
        "end": 190.86
    },
    {
        "word": "I",
        "start": 190.86,
        "end": 191.12
    },
    {
        "word": "swear",
        "start": 191.12,
        "end": 191.3
    },
    {
        "word": "on",
        "start": 191.3,
        "end": 191.7
    },
    {
        "word": "grand-pa's",
        "start": 191.7,
        "end": 192.48
    },
    {
        "word": "grave,",
        "start": 192.48,
        "end": 192.94
    },
    {
        "word": "I'll",
        "start": 192.94,
        "end": 193.44
    },
    {
        "word": "be",
        "start": 193.44,
        "end": 193.68
    },
    {
        "word": "paid",
        "start": 193.68,
        "end": 194.06
    },
    {
        "word": "when",
        "start": 194.06,
        "end": 194.24
    },
    {
        "word": "I",
        "start": 194.24,
        "end": 194.48
    },
    {
        "word": "come",
        "start": 194.48,
        "end": 194.72
    },
    {
        "word": "home.",
        "start": 194.72,
        "end": 195.42
    },
    {
        "word": "Hey,",
        "start": 195.46,
        "end": 195.92
    },
    {
        "word": "hey.",
        "start": 195.94,
        "end": 196.12
    },
    {
        "word": "Well,",
        "start": 196.3,
        "end": 196.54
    },
    {
        "word": "I",
        "start": 196.56,
        "end": 196.84
    },
    {
        "word": "need",
        "start": 196.84,
        "end": 197.24
    },
    {
        "word": "a",
        "start": 197.24,
        "end": 197.5
    },
    {
        "word": "dol-lar,",
        "start": 197.5,
        "end": 197.74
    },
    {
        "word": "dol-lar,",
        "start": 197.98,
        "end": 198.52
    },
    {
        "word": "dol-lar,",
        "start": 198.74,
        "end": 198.94
    },
    {
        "word": "that's",
        "start": 199.14,
        "end": 199.26
    },
    {
        "word": "what",
        "start": 199.26,
        "end": 199.44
    },
    {
        "word": "I",
        "start": 199.44,
        "end": 199.86
    },
    {
        "word": "need.",
        "start": 199.86,
        "end": 200.26
    },
    {
        "word": "Hey,",
        "start": 200.52,
        "end": 200.94
    },
    {
        "word": "hey.",
        "start": 200.96,
        "end": 201.18
    },
    {
        "word": "Said",
        "start": 201.4,
        "end": 201.54
    },
    {
        "word": "I",
        "start": 201.54,
        "end": 201.74
    },
    {
        "word": "need",
        "start": 201.74,
        "end": 202.26
    },
    {
        "word": "a",
        "start": 202.26,
        "end": 202.52
    },
    {
        "word": "dol-lar,",
        "start": 202.52,
        "end": 202.96
    },
    {
        "word": "dol-lar,",
        "start": 203.1,
        "end": 203.58
    },
    {
        "word": "dol-lar,",
        "start": 203.72,
        "end": 203.94
    },
    {
        "word": "that's",
        "start": 204.16,
        "end": 204.36
    },
    {
        "word": "what",
        "start": 204.36,
        "end": 204.54
    },
    {
        "word": "I",
        "start": 204.54,
        "end": 204.86
    },
    {
        "word": "need.",
        "start": 204.86,
        "end": 205.28
    },
    {
        "word": "Hey,",
        "start": 205.5,
        "end": 205.96
    },
    {
        "word": "hey.",
        "start": 205.96,
        "end": 206.14
    },
    {
        "word": "Well,",
        "start": 206.26,
        "end": 206.52
    },
    {
        "word": "I",
        "start": 206.52,
        "end": 206.72
    },
    {
        "word": "need",
        "start": 206.72,
        "end": 207.26
    },
    {
        "word": "a",
        "start": 207.26,
        "end": 207.52
    },
    {
        "word": "dol-lar,",
        "start": 207.52,
        "end": 207.88
    },
    {
        "word": "dol-lar,",
        "start": 208.12,
        "end": 208.6
    },
    {
        "word": "dol-lar,",
        "start": 208.78,
        "end": 208.96
    },
    {
        "word": "that's",
        "start": 209.18,
        "end": 209.36
    },
    {
        "word": "what",
        "start": 209.36,
        "end": 209.56
    },
    {
        "word": "I",
        "start": 209.56,
        "end": 209.9
    },
    {
        "word": "need.",
        "start": 209.9,
        "end": 210.2
    },
    {
        "word": "And",
        "start": 210.44,
        "end": 210.64
    },
    {
        "word": "if",
        "start": 210.64,
        "end": 210.94
    },
    {
        "word": "I",
        "start": 210.94,
        "end": 211.24
    },
    {
        "word": "share",
        "start": 211.24,
        "end": 211.36
    },
    {
        "word": "with",
        "start": 211.36,
        "end": 211.68
    },
    {
        "word": "you",
        "start": 211.68,
        "end": 212.1
    },
    {
        "word": "my",
        "start": 212.1,
        "end": 212.38
    },
    {
        "word": "sto-ry,",
        "start": 212.38,
        "end": 212.98
    },
    {
        "word": "would",
        "start": 212.98,
        "end": 213.3
    },
    {
        "word": "you",
        "start": 213.3,
        "end": 213.78
    },
    {
        "word": "share",
        "start": 213.78,
        "end": 214.02
    },
    {
        "word": "your",
        "start": 214.02,
        "end": 214.42
    },
    {
        "word": "dol-lar",
        "start": 214.42,
        "end": 214.6
    },
    {
        "word": "with",
        "start": 214.6,
        "end": 214.84
    },
    {
        "word": "me?",
        "start": 214.84,
        "end": 215.42
    },
    {
        "word": "Come",
        "start": 215.72,
        "end": 215.86
    },
    {
        "word": "on,",
        "start": 215.86,
        "end": 216.22
    },
    {
        "word": "share",
        "start": 216.42,
        "end": 216.52
    },
    {
        "word": "your",
        "start": 216.52,
        "end": 216.92
    },
    {
        "word": "dol-lar",
        "start": 216.92,
        "end": 217.1
    },
    {
        "word": "with",
        "start": 217.1,
        "end": 217.36
    },
    {
        "word": "me.",
        "start": 217.36,
        "end": 217.86
    },
    {
        "word": "Go",
        "start": 218.14,
        "end": 218.38
    },
    {
        "word": "ahead,",
        "start": 218.38,
        "end": 218.68
    },
    {
        "word": "share",
        "start": 218.68,
        "end": 219.04
    },
    {
        "word": "your",
        "start": 219.04,
        "end": 219.46
    },
    {
        "word": "dol-lar",
        "start": 219.46,
        "end": 219.64
    },
    {
        "word": "with",
        "start": 219.64,
        "end": 219.88
    },
    {
        "word": "me.",
        "start": 219.88,
        "end": 220.44
    },
    {
        "word": "Come",
        "start": 220.48,
        "end": 220.88
    },
    {
        "word": "on,",
        "start": 220.88,
        "end": 221.24
    },
    {
        "word": "share",
        "start": 221.4,
        "end": 221.54
    },
    {
        "word": "your",
        "start": 221.54,
        "end": 221.94
    },
    {
        "word": "dol-lar.",
        "start": 221.94,
        "end": 222.4
    },
    {
        "word": "Give",
        "start": 222.54,
        "end": 222.72
    },
    {
        "word": "me",
        "start": 222.72,
        "end": 222.88
    },
    {
        "word": "your",
        "start": 222.88,
        "end": 223.16
    },
    {
        "word": "dol-lar.",
        "start": 223.16,
        "end": 223.58
    },
    {
        "word": "Share",
        "start": 223.72,
        "end": 224.06
    },
    {
        "word": "your",
        "start": 224.06,
        "end": 224.46
    },
    {
        "word": "dol-lar",
        "start": 224.46,
        "end": 224.66
    },
    {
        "word": "with",
        "start": 224.66,
        "end": 224.98
    },
    {
        "word": "me.",
        "start": 224.98,
        "end": 225.38
    },
    {
        "word": "Come",
        "start": 225.48,
        "end": 225.86
    },
    {
        "word": "on,",
        "start": 225.86,
        "end": 226.2
    },
    {
        "word": "share",
        "start": 226.38,
        "end": 226.54
    },
    {
        "word": "your",
        "start": 226.54,
        "end": 226.96
    },
    {
        "word": "dol-lar",
        "start": 226.96,
        "end": 227.14
    },
    {
        "word": "with",
        "start": 227.14,
        "end": 227.52
    },
    {
        "word": "me.",
        "start": 227.52,
        "end": 227.82000000000002
    }
]
const firstWordStartTime = lyricsData[0].start; // Get the start time of the first word

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
  const rectangles = Array.from({ length: numRows * 4 });
  const lyricsRows = groupLyricsByDuration(lyricsData, 4);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // Track if playback was paused

  const audioRef = useRef(null); // Audio reference

  // Start animation and audio
  const handleStart = () => {
    if (isPaused) {
      // Resume from the current time if paused
      setIsPaused(false);
      setIsAnimationActive(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      // Fresh start with delay
      setIsAnimationActive(false);
      setTimeout(() => {
        setIsAnimationActive(true);
      }, firstWordStartTime * 1000);

      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  const handleStop = () => {
    setIsPaused(true); // Mark playback as paused
    setIsAnimationActive(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleRestart = () => {
    setIsAnimationActive(false);
    setCurrentWordIndex(0);
    setCurrentLetterIndex(0);
    setIsPaused(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  useEffect(() => {
    if (!isAnimationActive) return;

    let letterTimer, wordTimer;

    const currentWord = lyricsData[currentWordIndex].word;
    const wordDuration = lyricsData[currentWordIndex].end - lyricsData[currentWordIndex].start;
    const letterDuration = wordDuration / currentWord.length;

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
      }, letterDuration * 5);
    };

    startLetterHighlight();

    wordTimer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % lyricsData.length);
      setCurrentLetterIndex(0);
    }, wordDuration * 1000);

    return () => {
      clearInterval(letterTimer);
      clearTimeout(wordTimer);
    };
  }, [currentWordIndex, isAnimationActive]);

  return (
    <div className="container my-4">
      <audio ref={audioRef} src={songFile} preload="auto" />

      <div className="mb-4 d-flex gap-3">
        <button className="btn btn-primary" onClick={handleStart} disabled={isAnimationActive}>
          Start Animation
        </button>
        <button className="btn btn-secondary" onClick={handleStop} disabled={!isAnimationActive}>
          Stop Animation
        </button>
        <button className="btn btn-success" onClick={handleRestart}>
          Restart Animation
        </button>
      </div>

      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="row g-0">
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="col-3">
                <div
                  className="border border-dark"
                  style={{
                    paddingTop: '10%',
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-2">
            <p className="d-flex flex-wrap text-left w-100" style={{ justifyContent: 'space-between' }}>
              {lyricsRows[rowIndex] && lyricsRows[rowIndex].map((lyric, index) => {
                const totalRowDuration = lyricsRows[rowIndex].reduce((sum, word) => sum + (word.end - word.start), 0);
                const wordWidth = `${((lyric.end - lyric.start) / totalRowDuration) * 50}%`;

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
                            lyricsData.indexOf(lyric) < currentWordIndex ||
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