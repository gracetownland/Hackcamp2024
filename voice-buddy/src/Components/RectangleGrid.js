import React, { useState, useEffect, useRef } from 'react';
import songFile from "./../PythonBE/input.mp3"; // Import audio file (place in an audio folder)
import songFile2 from "./../PythonBE/Aloe Blacc - I Need A Dollar.mp3"; // Import audio file (place in an audio folder)
//let songFile =  "./../PythonBE/input.mp3";
//let songFile2 = "./../PythonBE/Aloe Blacc - I Need A Dollar.mp3";
let lyricsData = [
    {
        "word": "So",
        "start": 0.0,
        "end": 0.36
    },
    {
        "word": "in",
        "start": 0.36,
        "end": 0.62
    },
    {
        "word": "col-lege,",
        "start": 0.62,
        "end": 1.18
    },
    {
        "word": "I",
        "start": 1.68,
        "end": 1.78
    },
    {
        "word": "had",
        "start": 1.78,
        "end": 1.94
    },
    {
        "word": "to",
        "start": 1.94,
        "end": 2.14
    },
    {
        "word": "write",
        "start": 2.14,
        "end": 2.24
    },
    {
        "word": "a",
        "start": 2.24,
        "end": 2.34
    },
    {
        "word": "lot",
        "start": 2.34,
        "end": 2.5
    },
    {
        "word": "of",
        "start": 2.5,
        "end": 2.76
    },
    {
        "word": "pa-per-s.",
        "start": 2.76,
        "end": 3.16
    },
    {
        "word": "When",
        "start": 4.04,
        "end": 4.38
    },
    {
        "word": "a",
        "start": 4.38,
        "end": 4.52
    },
    {
        "word": "nor-mal",
        "start": 4.52,
        "end": 4.78
    },
    {
        "word": "stu-dent",
        "start": 4.78,
        "end": 5.0
    },
    {
        "word": "writes",
        "start": 5.0,
        "end": 5.22
    },
    {
        "word": "a",
        "start": 5.22,
        "end": 5.34
    },
    {
        "word": "pa-per,",
        "start": 5.34,
        "end": 5.48
    },
    {
        "word": "they",
        "start": 5.54,
        "end": 5.62
    },
    {
        "word": "might",
        "start": 5.62,
        "end": 5.78
    },
    {
        "word": "spread",
        "start": 5.78,
        "end": 6.0
    },
    {
        "word": "the",
        "start": 6.0,
        "end": 6.18
    },
    {
        "word": "work",
        "start": 6.18,
        "end": 6.34
    },
    {
        "word": "out",
        "start": 6.34,
        "end": 6.48
    },
    {
        "word": "a",
        "start": 6.48,
        "end": 6.54
    },
    {
        "word": "lit-tle",
        "start": 6.54,
        "end": 6.68
    },
    {
        "word": "like",
        "start": 6.68,
        "end": 6.9
    },
    {
        "word": "this.",
        "start": 6.9,
        "end": 7.48
    },
    {
        "word": "And",
        "start": 8.7,
        "end": 8.92
    },
    {
        "word": "I",
        "start": 8.92,
        "end": 9.06
    },
    {
        "word": "would",
        "start": 9.06,
        "end": 9.26
    },
    {
        "word": "want",
        "start": 9.26,
        "end": 9.4
    },
    {
        "word": "to",
        "start": 9.4,
        "end": 9.6
    },
    {
        "word": "do",
        "start": 9.6,
        "end": 9.82
    },
    {
        "word": "that,",
        "start": 9.82,
        "end": 10.1
    },
    {
        "word": "but",
        "start": 10.18,
        "end": 10.4
    },
    {
        "word": "then",
        "start": 10.4,
        "end": 11.1
    },
    {
        "word": "ac-tu-al-ly",
        "start": 11.1,
        "end": 11.32
    },
    {
        "word": "the",
        "start": 11.32,
        "end": 11.46
    },
    {
        "word": "pa-per",
        "start": 11.46,
        "end": 11.72
    },
    {
        "word": "would",
        "start": 11.72,
        "end": 12.1
    },
    {
        "word": "come",
        "start": 12.1,
        "end": 12.3
    },
    {
        "word": "along,",
        "start": 12.3,
        "end": 12.6
    },
    {
        "word": "and",
        "start": 12.68,
        "end": 12.72
    },
    {
        "word": "then",
        "start": 12.72,
        "end": 12.86
    },
    {
        "word": "I",
        "start": 12.86,
        "end": 12.92
    },
    {
        "word": "would",
        "start": 12.92,
        "end": 13.04
    },
    {
        "word": "kind",
        "start": 13.04,
        "end": 13.18
    },
    {
        "word": "of",
        "start": 13.18,
        "end": 13.24
    },
    {
        "word": "do",
        "start": 13.24,
        "end": 13.44
    },
    {
        "word": "this.",
        "start": 13.44,
        "end": 14.0
    },
    {
        "word": "Laugh-ter",
        "start": 15.4,
        "end": 15.84
    },
    {
        "word": "Now,",
        "start": 16.66,
        "end": 17.1
    },
    {
        "word": "I",
        "start": 17.1,
        "end": 17.22
    },
    {
        "word": "had",
        "start": 17.22,
        "end": 17.34
    },
    {
        "word": "a",
        "start": 17.34,
        "end": 17.38
    },
    {
        "word": "hy-poth-e-sis",
        "start": 17.38,
        "end": 18.2
    },
    {
        "word": "that",
        "start": 18.2,
        "end": 18.96
    },
    {
        "word": "the",
        "start": 18.96,
        "end": 19.34
    },
    {
        "word": "brains",
        "start": 19.34,
        "end": 19.64
    },
    {
        "word": "of",
        "start": 19.64,
        "end": 19.84
    },
    {
        "word": "pro-cras-ti-na-tors",
        "start": 19.84,
        "end": 20.36
    },
    {
        "word": "were",
        "start": 20.36,
        "end": 20.58
    },
    {
        "word": "ac-tu-al-ly",
        "start": 20.58,
        "end": 21.16
    },
    {
        "word": "dif-fer-ent",
        "start": 21.16,
        "end": 21.64
    },
    {
        "word": "than",
        "start": 21.64,
        "end": 21.84
    },
    {
        "word": "the",
        "start": 21.84,
        "end": 22.08
    },
    {
        "word": "brains",
        "start": 22.08,
        "end": 22.54
    },
    {
        "word": "of",
        "start": 22.54,
        "end": 22.84
    },
    {
        "word": "oth-er",
        "start": 22.84,
        "end": 23.06
    },
    {
        "word": "peo-ple.",
        "start": 23.06,
        "end": 23.6
    },
    {
        "word": "And",
        "start": 24.48,
        "end": 24.92
    },
    {
        "word": "to",
        "start": 24.92,
        "end": 25.1
    },
    {
        "word": "test",
        "start": 25.1,
        "end": 25.38
    },
    {
        "word": "this,",
        "start": 25.38,
        "end": 25.66
    },
    {
        "word": "I",
        "start": 25.68,
        "end": 25.78
    },
    {
        "word": "found",
        "start": 25.78,
        "end": 25.96
    },
    {
        "word": "an",
        "start": 25.96,
        "end": 26.22
    },
    {
        "word": "MRI",
        "start": 26.22,
        "end": 26.52
    },
    {
        "word": "lab",
        "start": 26.52,
        "end": 26.76
    },
    {
        "word": "that",
        "start": 26.76,
        "end": 26.92
    },
    {
        "word": "ac-tu-al-ly",
        "start": 26.92,
        "end": 27.16
    },
    {
        "word": "let",
        "start": 27.16,
        "end": 27.28
    },
    {
        "word": "me",
        "start": 27.28,
        "end": 27.58
    },
    {
        "word": "scan",
        "start": 27.58,
        "end": 27.86
    },
    {
        "word": "both",
        "start": 27.86,
        "end": 28.16
    },
    {
        "word": "my",
        "start": 28.16,
        "end": 28.54
    },
    {
        "word": "brain",
        "start": 28.54,
        "end": 28.84
    },
    {
        "word": "and",
        "start": 28.84,
        "end": 29.32
    },
    {
        "word": "the",
        "start": 29.32,
        "end": 29.54
    },
    {
        "word": "brain",
        "start": 29.54,
        "end": 29.66
    },
    {
        "word": "of",
        "start": 29.66,
        "end": 29.9
    },
    {
        "word": "a",
        "start": 29.9,
        "end": 30.02
    },
    {
        "word": "proven",
        "start": 30.02,
        "end": 30.2
    },
    {
        "word": "non",
        "start": 30.2,
        "end": 30.52
    },
    {
        "word": "-pro-cras-ti-na-tor.",
        "start": 30.52,
        "end": 31.24
    },
    {
        "word": "And",
        "start": 31.96,
        "end": 31.96
    },
    {
        "word": "so",
        "start": 31.96,
        "end": 32.28
    },
    {
        "word": "I",
        "start": 32.28,
        "end": 32.3
    },
    {
        "word": "could",
        "start": 32.3,
        "end": 32.52
    },
    {
        "word": "com-pare",
        "start": 32.52,
        "end": 32.78
    },
    {
        "word": "them.",
        "start": 32.78,
        "end": 33.04
    },
    {
        "word": "So",
        "start": 33.2,
        "end": 33.4
    },
    {
        "word": "here's",
        "start": 33.4,
        "end": 33.68
    },
    {
        "word": "the",
        "start": 33.68,
        "end": 33.86
    },
    {
        "word": "brain",
        "start": 33.86,
        "end": 34.0
    },
    {
        "word": "of",
        "start": 34.0,
        "end": 34.16
    },
    {
        "word": "a",
        "start": 34.16,
        "end": 34.4
    },
    {
        "word": "non",
        "start": 34.4,
        "end": 34.56
    },
    {
        "word": "-pro-cras-ti-na-tor.",
        "start": 34.56,
        "end": 35.34
    },
    {
        "word": "Laugh-ter",
        "start": 36.8,
        "end": 37.32
    },
    {
        "word": "Now,",
        "start": 39.93999999999999,
        "end": 40.459999999999994
    },
    {
        "word": "here's",
        "start": 40.459999999999994,
        "end": 40.98
    },
    {
        "word": "my",
        "start": 40.98,
        "end": 41.28
    },
    {
        "word": "brain.",
        "start": 41.28,
        "end": 41.64
    },
    {
        "word": "Laugh-ter",
        "start": 43.84,
        "end": 44.36
    },
    {
        "word": "There",
        "start": 47.62,
        "end": 48.14
    },
    {
        "word": "is",
        "start": 48.14,
        "end": 48.54
    },
    {
        "word": "a",
        "start": 48.54,
        "end": 48.72
    },
    {
        "word": "dif-fer-ence.",
        "start": 48.72,
        "end": 49.12
    },
    {
        "word": "Both",
        "start": 50.1,
        "end": 50.44
    },
    {
        "word": "brains",
        "start": 50.44,
        "end": 50.8
    },
    {
        "word": "have",
        "start": 50.8,
        "end": 51.0
    },
    {
        "word": "a",
        "start": 51.0,
        "end": 51.26
    },
    {
        "word": "ra-tio-nal",
        "start": 51.26,
        "end": 51.56
    },
    {
        "word": "de-ci-sion",
        "start": 51.56,
        "end": 51.96
    },
    {
        "word": "mak-er",
        "start": 51.96,
        "end": 52.22
    },
    {
        "word": "in",
        "start": 52.22,
        "end": 52.36
    },
    {
        "word": "them,",
        "start": 52.36,
        "end": 52.52
    },
    {
        "word": "but",
        "start": 52.56,
        "end": 52.7
    },
    {
        "word": "the",
        "start": 52.7,
        "end": 52.94
    },
    {
        "word": "pro-cras-ti-na-tor's",
        "start": 52.94,
        "end": 53.72
    },
    {
        "word": "brain",
        "start": 53.72,
        "end": 54.04
    },
    {
        "word": "al-so",
        "start": 54.04,
        "end": 54.68
    },
    {
        "word": "has",
        "start": 54.68,
        "end": 54.9
    },
    {
        "word": "an",
        "start": 54.9,
        "end": 55.2
    },
    {
        "word": "in-stant",
        "start": 55.2,
        "end": 55.64
    },
    {
        "word": "grat-i-fi-ca-tion",
        "start": 55.64,
        "end": 56.46
    },
    {
        "word": "mon-key.",
        "start": 56.46,
        "end": 56.96
    },
    {
        "word": "Now,",
        "start": 57.18,
        "end": 57.4
    },
    {
        "word": "what",
        "start": 57.4,
        "end": 57.52
    },
    {
        "word": "does",
        "start": 57.52,
        "end": 57.66
    },
    {
        "word": "this",
        "start": 57.66,
        "end": 57.82
    },
    {
        "word": "mean",
        "start": 57.82,
        "end": 57.96
    },
    {
        "word": "for",
        "start": 57.96,
        "end": 58.06
    },
    {
        "word": "the",
        "start": 58.06,
        "end": 58.24
    },
    {
        "word": "pro-cras-ti-na-tor?",
        "start": 58.24,
        "end": 58.72
    },
    {
        "word": "Well,",
        "start": 58.72,
        "end": 59.06
    },
    {
        "word": "it",
        "start": 59.5,
        "end": 59.5
    },
    {
        "word": "means",
        "start": 59.5,
        "end": 59.72
    },
    {
        "word": "ev-ery-thing's",
        "start": 59.72,
        "end": 60.1
    },
    {
        "word": "fine",
        "start": 60.1,
        "end": 60.66
    },
    {
        "word": "un-til",
        "start": 60.66,
        "end": 61.04
    },
    {
        "word": "this",
        "start": 61.04,
        "end": 61.32
    },
    {
        "word": "hap-pen-s.",
        "start": 61.32,
        "end": 61.96
    },
    {
        "word": "Laugh-ter",
        "start": 63.46,
        "end": 63.98
    },
    {
        "word": "So",
        "start": 63.98,
        "end": 64.44
    },
    {
        "word": "the",
        "start": 64.44,
        "end": 64.62
    },
    {
        "word": "ra-tio-nal",
        "start": 64.62,
        "end": 65.04
    },
    {
        "word": "de-ci-sion",
        "start": 65.04,
        "end": 65.46
    },
    {
        "word": "mak-er",
        "start": 65.46,
        "end": 65.74
    },
    {
        "word": "will",
        "start": 65.74,
        "end": 66.0
    },
    {
        "word": "make",
        "start": 66.0,
        "end": 66.24
    },
    {
        "word": "the",
        "start": 66.24,
        "end": 66.44
    },
    {
        "word": "ra-tio-nal",
        "start": 66.44,
        "end": 66.86
    },
    {
        "word": "de-ci-sion",
        "start": 66.86,
        "end": 67.44
    },
    {
        "word": "to",
        "start": 67.44,
        "end": 67.82
    },
    {
        "word": "do",
        "start": 67.82,
        "end": 68.08
    },
    {
        "word": "some-thing",
        "start": 68.08,
        "end": 68.42
    },
    {
        "word": "pro-duc-tive,",
        "start": 68.42,
        "end": 69.12
    },
    {
        "word": "but",
        "start": 69.32,
        "end": 69.44
    },
    {
        "word": "the",
        "start": 69.44,
        "end": 69.62
    },
    {
        "word": "mon-key",
        "start": 69.62,
        "end": 69.74
    },
    {
        "word": "does-n't",
        "start": 69.74,
        "end": 70.04
    },
    {
        "word": "like",
        "start": 70.04,
        "end": 70.32
    },
    {
        "word": "that",
        "start": 70.32,
        "end": 70.62
    },
    {
        "word": "plan.",
        "start": 70.62,
        "end": 70.94
    },
    {
        "word": "So",
        "start": 71.28,
        "end": 71.46
    },
    {
        "word": "he",
        "start": 71.46,
        "end": 71.54
    },
    {
        "word": "ac-tu-al-ly",
        "start": 71.54,
        "end": 71.68
    },
    {
        "word": "takes",
        "start": 71.68,
        "end": 71.94
    },
    {
        "word": "the",
        "start": 71.94,
        "end": 72.18
    },
    {
        "word": "wheel,",
        "start": 72.18,
        "end": 72.4
    },
    {
        "word": "and",
        "start": 72.78,
        "end": 72.84
    },
    {
        "word": "he",
        "start": 72.84,
        "end": 73.06
    },
    {
        "word": "says,",
        "start": 73.06,
        "end": 73.32
    },
    {
        "word": "ac-tu-al-ly,",
        "start": 73.88,
        "end": 74.0
    },
    {
        "word": "let's",
        "start": 74.16,
        "end": 74.34
    },
    {
        "word": "read",
        "start": 74.34,
        "end": 74.56
    },
    {
        "word": "the",
        "start": 74.56,
        "end": 74.74
    },
    {
        "word": "en-tire",
        "start": 74.74,
        "end": 75.0
    },
    {
        "word": "Wikipedia",
        "start": 75.0,
        "end": 75.5
    },
    {
        "word": "page",
        "start": 75.5,
        "end": 75.76
    },
    {
        "word": "of",
        "start": 75.76,
        "end": 75.92
    },
    {
        "word": "the",
        "start": 75.92,
        "end": 76.0
    },
    {
        "word": "Nan-cy",
        "start": 76.0,
        "end": 76.34
    },
    {
        "word": "Ker-ri-g-an",
        "start": 76.34,
        "end": 76.78
    },
    {
        "word": "-Tanya",
        "start": 76.78,
        "end": 77.06
    },
    {
        "word": "Hard-ing",
        "start": 77.06,
        "end": 77.42
    },
    {
        "word": "scan-dal",
        "start": 77.42,
        "end": 77.7
    },
    {
        "word": "be-cause",
        "start": 77.7,
        "end": 77.82
    },
    {
        "word": "I",
        "start": 77.82,
        "end": 78.04
    },
    {
        "word": "just",
        "start": 78.04,
        "end": 78.3
    },
    {
        "word": "re-mem-bered",
        "start": 78.3,
        "end": 78.64
    },
    {
        "word": "that",
        "start": 78.64,
        "end": 78.8
    },
    {
        "word": "that",
        "start": 78.8,
        "end": 79.04
    },
    {
        "word": "hap-pened.",
        "start": 79.04,
        "end": 79.26
    },
    {
        "word": "The",
        "start": 79.92,
        "end": 80.02
    },
    {
        "word": "in-stant",
        "start": 80.02,
        "end": 80.34
    },
    {
        "word": "grat-i-fi-ca-tion",
        "start": 80.34,
        "end": 81.02
    },
    {
        "word": "mon-key",
        "start": 81.02,
        "end": 81.34
    },
    {
        "word": "does",
        "start": 81.34,
        "end": 81.66
    },
    {
        "word": "not",
        "start": 81.66,
        "end": 81.94
    },
    {
        "word": "seem",
        "start": 81.94,
        "end": 82.16
    },
    {
        "word": "like",
        "start": 82.16,
        "end": 82.34
    },
    {
        "word": "a",
        "start": 82.34,
        "end": 82.48
    },
    {
        "word": "guy",
        "start": 82.48,
        "end": 82.68
    },
    {
        "word": "you",
        "start": 82.68,
        "end": 82.84
    },
    {
        "word": "want",
        "start": 82.84,
        "end": 82.98
    },
    {
        "word": "be-hind",
        "start": 82.98,
        "end": 83.24
    },
    {
        "word": "the",
        "start": 83.24,
        "end": 83.44
    },
    {
        "word": "wheel.",
        "start": 83.44,
        "end": 83.6
    },
    {
        "word": "He",
        "start": 83.64,
        "end": 83.76
    },
    {
        "word": "lives",
        "start": 83.76,
        "end": 84.0
    },
    {
        "word": "en-tire-ly",
        "start": 84.0,
        "end": 84.56
    },
    {
        "word": "in",
        "start": 84.56,
        "end": 84.74
    },
    {
        "word": "the",
        "start": 84.74,
        "end": 84.86
    },
    {
        "word": "present",
        "start": 84.86,
        "end": 85.04
    },
    {
        "word": "mo-men-t.",
        "start": 85.04,
        "end": 85.46
    },
    {
        "word": "He",
        "start": 85.66,
        "end": 85.82
    },
    {
        "word": "has",
        "start": 85.82,
        "end": 86.12
    },
    {
        "word": "no",
        "start": 86.12,
        "end": 86.4
    },
    {
        "word": "mem-o-ry",
        "start": 86.4,
        "end": 86.76
    },
    {
        "word": "of",
        "start": 86.76,
        "end": 86.92
    },
    {
        "word": "the",
        "start": 86.92,
        "end": 87.1
    },
    {
        "word": "past,",
        "start": 87.1,
        "end": 87.44
    },
    {
        "word": "no",
        "start": 87.44,
        "end": 87.94
    },
    {
        "word": "knowl-edge",
        "start": 87.94,
        "end": 88.26
    },
    {
        "word": "of",
        "start": 88.26,
        "end": 88.4
    },
    {
        "word": "the",
        "start": 88.4,
        "end": 88.5
    },
    {
        "word": "fu-ture,",
        "start": 88.5,
        "end": 88.72
    },
    {
        "word": "and",
        "start": 88.8,
        "end": 88.84
    },
    {
        "word": "he",
        "start": 88.84,
        "end": 88.88
    },
    {
        "word": "on-ly",
        "start": 88.88,
        "end": 89.06
    },
    {
        "word": "cares",
        "start": 89.06,
        "end": 89.24
    },
    {
        "word": "about",
        "start": 89.24,
        "end": 89.46
    },
    {
        "word": "two",
        "start": 89.46,
        "end": 89.7
    },
    {
        "word": "things,",
        "start": 89.7,
        "end": 90.08
    },
    {
        "word": "easy",
        "start": 90.34,
        "end": 90.88
    },
    {
        "word": "and",
        "start": 90.88,
        "end": 91.52
    },
    {
        "word": "fun.",
        "start": 91.52,
        "end": 91.94
    },
    {
        "word": "Now,",
        "start": 92.46,
        "end": 92.7
    },
    {
        "word": "some-times",
        "start": 92.7,
        "end": 93.0
    },
    {
        "word": "it",
        "start": 93.0,
        "end": 93.1
    },
    {
        "word": "makes",
        "start": 93.1,
        "end": 93.32
    },
    {
        "word": "sense",
        "start": 93.32,
        "end": 93.74
    },
    {
        "word": "to",
        "start": 93.74,
        "end": 93.9
    },
    {
        "word": "be",
        "start": 93.9,
        "end": 94.16
    },
    {
        "word": "do-ing",
        "start": 94.16,
        "end": 94.4
    },
    {
        "word": "things",
        "start": 94.4,
        "end": 94.82
    },
    {
        "word": "that",
        "start": 94.82,
        "end": 95.0
    },
    {
        "word": "are",
        "start": 95.0,
        "end": 95.22
    },
    {
        "word": "easy",
        "start": 95.22,
        "end": 95.56
    },
    {
        "word": "and",
        "start": 95.56,
        "end": 95.84
    },
    {
        "word": "fun,",
        "start": 95.84,
        "end": 96.12
    },
    {
        "word": "but",
        "start": 96.18,
        "end": 96.38
    },
    {
        "word": "oth-er",
        "start": 96.38,
        "end": 96.66
    },
    {
        "word": "times",
        "start": 96.66,
        "end": 97.2
    },
    {
        "word": "it",
        "start": 97.2,
        "end": 97.48
    },
    {
        "word": "makes",
        "start": 97.48,
        "end": 97.8
    },
    {
        "word": "much",
        "start": 97.8,
        "end": 98.08
    },
    {
        "word": "more",
        "start": 98.08,
        "end": 98.34
    },
    {
        "word": "sense",
        "start": 98.34,
        "end": 98.84
    },
    {
        "word": "to",
        "start": 98.84,
        "end": 99.14
    },
    {
        "word": "be",
        "start": 99.14,
        "end": 99.36
    },
    {
        "word": "do-ing",
        "start": 99.36,
        "end": 99.7
    },
    {
        "word": "things",
        "start": 99.7,
        "end": 100.36
    },
    {
        "word": "that",
        "start": 100.36,
        "end": 100.88
    },
    {
        "word": "are",
        "start": 100.88,
        "end": 101.3
    },
    {
        "word": "hard-er",
        "start": 101.3,
        "end": 101.58
    },
    {
        "word": "and",
        "start": 101.58,
        "end": 101.8
    },
    {
        "word": "less",
        "start": 101.8,
        "end": 102.1
    },
    {
        "word": "pleas-ant",
        "start": 102.1,
        "end": 102.52
    },
    {
        "word": "for",
        "start": 102.52,
        "end": 102.84
    },
    {
        "word": "the",
        "start": 102.84,
        "end": 103.0
    },
    {
        "word": "sake",
        "start": 103.0,
        "end": 103.12
    },
    {
        "word": "of",
        "start": 103.12,
        "end": 103.26
    },
    {
        "word": "the",
        "start": 103.26,
        "end": 103.38
    },
    {
        "word": "big",
        "start": 103.38,
        "end": 103.56
    },
    {
        "word": "pic-ture,",
        "start": 103.56,
        "end": 103.96
    },
    {
        "word": "and",
        "start": 104.12,
        "end": 104.4
    },
    {
        "word": "that's",
        "start": 104.4,
        "end": 104.7
    },
    {
        "word": "when",
        "start": 104.7,
        "end": 104.8
    },
    {
        "word": "we",
        "start": 104.8,
        "end": 104.9
    },
    {
        "word": "have",
        "start": 104.9,
        "end": 105.04
    },
    {
        "word": "a",
        "start": 105.04,
        "end": 105.28
    },
    {
        "word": "con-flic-t.",
        "start": 105.28,
        "end": 105.74
    },
    {
        "word": "Turns",
        "start": 106.54,
        "end": 106.8
    },
    {
        "word": "out",
        "start": 106.8,
        "end": 107.68
    },
    {
        "word": "that",
        "start": 107.68,
        "end": 107.86
    },
    {
        "word": "the",
        "start": 107.86,
        "end": 108.0
    },
    {
        "word": "pro-cras-ti-na-tor",
        "start": 108.0,
        "end": 108.68
    },
    {
        "word": "has",
        "start": 108.68,
        "end": 109.3
    },
    {
        "word": "a",
        "start": 109.3,
        "end": 109.64
    },
    {
        "word": "guardian",
        "start": 109.64,
        "end": 109.94
    },
    {
        "word": "an-gel,",
        "start": 109.94,
        "end": 110.32
    },
    {
        "word": "some-one",
        "start": 110.5,
        "end": 110.7
    },
    {
        "word": "called",
        "start": 110.7,
        "end": 111.08
    },
    {
        "word": "the",
        "start": 111.08,
        "end": 111.36
    },
    {
        "word": "pan-ic",
        "start": 111.36,
        "end": 111.86
    },
    {
        "word": "mon-ster.",
        "start": 111.86,
        "end": 112.36
    },
    {
        "word": "Laugh-ter",
        "start": 113.88,
        "end": 114.44
    },
    {
        "word": "Now,",
        "start": 115.61999999999999,
        "end": 116.1
    },
    {
        "word": "the",
        "start": 117.06,
        "end": 117.24
    },
    {
        "word": "pan-ic",
        "start": 117.24,
        "end": 117.72
    },
    {
        "word": "mon-ster",
        "start": 117.72,
        "end": 118.22
    },
    {
        "word": "is",
        "start": 118.22,
        "end": 118.6
    },
    {
        "word": "dor-mant",
        "start": 118.6,
        "end": 118.96
    },
    {
        "word": "most",
        "start": 118.96,
        "end": 119.22
    },
    {
        "word": "of",
        "start": 119.22,
        "end": 119.34
    },
    {
        "word": "the",
        "start": 119.34,
        "end": 119.48
    },
    {
        "word": "time,",
        "start": 119.48,
        "end": 119.8
    },
    {
        "word": "but",
        "start": 120.12,
        "end": 120.72
    },
    {
        "word": "he",
        "start": 120.72,
        "end": 120.96
    },
    {
        "word": "sud-den-ly",
        "start": 120.96,
        "end": 121.28
    },
    {
        "word": "wakes",
        "start": 121.28,
        "end": 121.6
    },
    {
        "word": "up.",
        "start": 121.6,
        "end": 122.4
    },
    {
        "word": "Any",
        "start": 122.66,
        "end": 122.84
    },
    {
        "word": "time",
        "start": 122.84,
        "end": 123.16
    },
    {
        "word": "a",
        "start": 123.16,
        "end": 123.38
    },
    {
        "word": "dead-line",
        "start": 123.38,
        "end": 123.64
    },
    {
        "word": "gets",
        "start": 123.64,
        "end": 123.9
    },
    {
        "word": "too",
        "start": 123.9,
        "end": 124.2
    },
    {
        "word": "close",
        "start": 124.2,
        "end": 124.46
    },
    {
        "word": "or",
        "start": 124.46,
        "end": 124.72
    },
    {
        "word": "there's",
        "start": 124.72,
        "end": 124.96
    },
    {
        "word": "dan-ger",
        "start": 124.96,
        "end": 125.22
    },
    {
        "word": "of",
        "start": 125.22,
        "end": 125.44
    },
    {
        "word": "pub-lic",
        "start": 125.44,
        "end": 125.68
    },
    {
        "word": "em-bar-rass-men-t,",
        "start": 125.68,
        "end": 126.26
    },
    {
        "word": "a",
        "start": 126.66,
        "end": 126.88
    },
    {
        "word": "ca-reer",
        "start": 126.88,
        "end": 127.04
    },
    {
        "word": "dis-as-ter",
        "start": 127.04,
        "end": 127.42
    },
    {
        "word": "or",
        "start": 127.42,
        "end": 127.56
    },
    {
        "word": "some",
        "start": 127.56,
        "end": 127.72
    },
    {
        "word": "oth-er",
        "start": 127.72,
        "end": 127.94
    },
    {
        "word": "scary",
        "start": 127.94,
        "end": 128.28
    },
    {
        "word": "con-se-quence.",
        "start": 128.28,
        "end": 128.96
    },
    {
        "word": "But",
        "start": 129.16,
        "end": 129.26
    },
    {
        "word": "there's",
        "start": 129.26,
        "end": 129.52
    },
    {
        "word": "a",
        "start": 129.52,
        "end": 129.62
    },
    {
        "word": "sec-ond",
        "start": 129.62,
        "end": 129.82
    },
    {
        "word": "kind",
        "start": 129.82,
        "end": 130.04
    },
    {
        "word": "of",
        "start": 130.04,
        "end": 130.22
    },
    {
        "word": "pro-cras-ti-na-tion",
        "start": 130.22,
        "end": 130.92
    },
    {
        "word": "that",
        "start": 130.92,
        "end": 131.34
    },
    {
        "word": "hap-pens",
        "start": 131.34,
        "end": 131.68
    },
    {
        "word": "in",
        "start": 131.68,
        "end": 131.96
    },
    {
        "word": "sit-u-a-tions",
        "start": 131.96,
        "end": 132.62
    },
    {
        "word": "when",
        "start": 132.62,
        "end": 132.94
    },
    {
        "word": "there",
        "start": 132.94,
        "end": 133.14
    },
    {
        "word": "is",
        "start": 133.14,
        "end": 133.4
    },
    {
        "word": "no",
        "start": 133.4,
        "end": 133.64
    },
    {
        "word": "dead-line.",
        "start": 133.64,
        "end": 134.02
    },
    {
        "word": "So",
        "start": 134.3,
        "end": 134.64
    },
    {
        "word": "if",
        "start": 134.64,
        "end": 134.82
    },
    {
        "word": "you",
        "start": 134.82,
        "end": 134.92
    },
    {
        "word": "want",
        "start": 134.92,
        "end": 135.02
    },
    {
        "word": "to",
        "start": 135.02,
        "end": 135.1
    },
    {
        "word": "have",
        "start": 135.1,
        "end": 135.2
    },
    {
        "word": "a",
        "start": 135.2,
        "end": 135.38
    },
    {
        "word": "ca-reer",
        "start": 135.38,
        "end": 135.48
    },
    {
        "word": "where",
        "start": 135.48,
        "end": 135.58
    },
    {
        "word": "you",
        "start": 135.58,
        "end": 135.64
    },
    {
        "word": "want",
        "start": 135.64,
        "end": 135.72
    },
    {
        "word": "to",
        "start": 135.72,
        "end": 135.8
    },
    {
        "word": "be",
        "start": 135.8,
        "end": 135.94
    },
    {
        "word": "a",
        "start": 135.94,
        "end": 136.04
    },
    {
        "word": "self",
        "start": 136.04,
        "end": 136.36
    },
    {
        "word": "-s-tarter,",
        "start": 136.36,
        "end": 136.6
    },
    {
        "word": "some-thing",
        "start": 136.7,
        "end": 136.92
    },
    {
        "word": "in",
        "start": 136.92,
        "end": 137.06
    },
    {
        "word": "the",
        "start": 137.06,
        "end": 137.26
    },
    {
        "word": "art-s,",
        "start": 137.26,
        "end": 137.54
    },
    {
        "word": "some-thing",
        "start": 137.66,
        "end": 138.28
    },
    {
        "word": "en-trepreneuri-al,",
        "start": 138.28,
        "end": 139.06
    },
    {
        "word": "there's",
        "start": 139.5,
        "end": 139.7
    },
    {
        "word": "no",
        "start": 139.7,
        "end": 139.9
    },
    {
        "word": "dead-lines",
        "start": 139.9,
        "end": 140.22
    },
    {
        "word": "on",
        "start": 140.22,
        "end": 140.4
    },
    {
        "word": "those",
        "start": 140.4,
        "end": 140.58
    },
    {
        "word": "things",
        "start": 140.58,
        "end": 140.74
    },
    {
        "word": "at",
        "start": 140.74,
        "end": 140.96
    },
    {
        "word": "first",
        "start": 140.96,
        "end": 141.34
    },
    {
        "word": "be-cause",
        "start": 141.34,
        "end": 141.76
    },
    {
        "word": "noth-ing's",
        "start": 141.76,
        "end": 142.26
    },
    {
        "word": "hap-pen-ing",
        "start": 142.26,
        "end": 142.54
    },
    {
        "word": "at",
        "start": 142.54,
        "end": 142.78
    },
    {
        "word": "first,",
        "start": 142.78,
        "end": 142.96
    },
    {
        "word": "not",
        "start": 142.96,
        "end": 143.16
    },
    {
        "word": "un-til",
        "start": 143.16,
        "end": 143.46
    },
    {
        "word": "you've",
        "start": 143.46,
        "end": 143.74
    },
    {
        "word": "gone",
        "start": 143.74,
        "end": 143.9
    },
    {
        "word": "out",
        "start": 143.9,
        "end": 144.12
    },
    {
        "word": "and",
        "start": 144.12,
        "end": 144.2
    },
    {
        "word": "done",
        "start": 144.2,
        "end": 144.28
    },
    {
        "word": "the",
        "start": 144.28,
        "end": 144.48
    },
    {
        "word": "hard",
        "start": 144.48,
        "end": 144.66
    },
    {
        "word": "work",
        "start": 144.66,
        "end": 144.8
    },
    {
        "word": "to",
        "start": 144.8,
        "end": 144.94
    },
    {
        "word": "get",
        "start": 144.94,
        "end": 145.12
    },
    {
        "word": "some",
        "start": 145.12,
        "end": 145.28
    },
    {
        "word": "mo-men-tum,",
        "start": 145.28,
        "end": 145.72
    },
    {
        "word": "to",
        "start": 145.72,
        "end": 145.88
    },
    {
        "word": "get",
        "start": 145.88,
        "end": 146.04
    },
    {
        "word": "things",
        "start": 146.04,
        "end": 146.32
    },
    {
        "word": "go-ing.",
        "start": 146.32,
        "end": 146.66
    },
    {
        "word": "There's",
        "start": 146.98,
        "end": 147.22
    },
    {
        "word": "al-so",
        "start": 147.22,
        "end": 147.46
    },
    {
        "word": "all",
        "start": 147.46,
        "end": 147.56
    },
    {
        "word": "kinds",
        "start": 147.56,
        "end": 147.76
    },
    {
        "word": "of",
        "start": 147.76,
        "end": 147.92
    },
    {
        "word": "im-por-tant",
        "start": 147.92,
        "end": 148.16
    },
    {
        "word": "things",
        "start": 148.16,
        "end": 148.4
    },
    {
        "word": "out-side",
        "start": 148.4,
        "end": 148.76
    },
    {
        "word": "of",
        "start": 148.76,
        "end": 148.92
    },
    {
        "word": "your",
        "start": 148.92,
        "end": 149.1
    },
    {
        "word": "ca-reer",
        "start": 149.1,
        "end": 149.4
    },
    {
        "word": "that",
        "start": 149.4,
        "end": 149.74
    },
    {
        "word": "don't",
        "start": 149.74,
        "end": 150.0
    },
    {
        "word": "in-volve",
        "start": 150.0,
        "end": 150.3
    },
    {
        "word": "any",
        "start": 150.3,
        "end": 150.58
    },
    {
        "word": "dead-li-nes,",
        "start": 150.58,
        "end": 150.96
    },
    {
        "word": "like",
        "start": 151.14,
        "end": 151.22
    },
    {
        "word": "see-ing",
        "start": 151.22,
        "end": 151.42
    },
    {
        "word": "your",
        "start": 151.42,
        "end": 151.62
    },
    {
        "word": "fam-i-ly",
        "start": 151.62,
        "end": 151.96
    },
    {
        "word": "or",
        "start": 151.96,
        "end": 152.18
    },
    {
        "word": "ex-er-cis-ing",
        "start": 152.18,
        "end": 152.78
    },
    {
        "word": "and",
        "start": 152.78,
        "end": 152.92
    },
    {
        "word": "tak-ing",
        "start": 152.92,
        "end": 153.18
    },
    {
        "word": "care",
        "start": 153.18,
        "end": 153.36
    },
    {
        "word": "of",
        "start": 153.36,
        "end": 153.52
    },
    {
        "word": "your",
        "start": 153.52,
        "end": 153.66
    },
    {
        "word": "health,",
        "start": 153.66,
        "end": 154.12
    },
    {
        "word": "work-ing",
        "start": 154.74,
        "end": 155.06
    },
    {
        "word": "on",
        "start": 155.06,
        "end": 155.22
    },
    {
        "word": "your",
        "start": 155.22,
        "end": 155.4
    },
    {
        "word": "re-la-tion-ship",
        "start": 155.4,
        "end": 155.88
    },
    {
        "word": "or",
        "start": 155.88,
        "end": 156.32
    },
    {
        "word": "get-ting",
        "start": 156.32,
        "end": 156.66
    },
    {
        "word": "out",
        "start": 156.66,
        "end": 156.92
    },
    {
        "word": "of",
        "start": 156.92,
        "end": 157.02
    },
    {
        "word": "a",
        "start": 157.02,
        "end": 157.2
    },
    {
        "word": "re-la-tion-ship",
        "start": 157.2,
        "end": 157.52
    },
    {
        "word": "that",
        "start": 157.52,
        "end": 157.7
    },
    {
        "word": "is-n't",
        "start": 157.7,
        "end": 157.86
    },
    {
        "word": "work-ing.",
        "start": 157.86,
        "end": 158.34
    },
    {
        "word": "Now,",
        "start": 159.14000000000001,
        "end": 159.62
    },
    {
        "word": "if",
        "start": 160.24,
        "end": 160.44
    },
    {
        "word": "the",
        "start": 160.44,
        "end": 160.52
    },
    {
        "word": "pro-cras-ti-na-tor's",
        "start": 160.52,
        "end": 161.18
    },
    {
        "word": "on-ly",
        "start": 161.18,
        "end": 161.44
    },
    {
        "word": "mech-a-nism",
        "start": 161.44,
        "end": 162.1
    },
    {
        "word": "of",
        "start": 162.64000000000001,
        "end": 162.92
    },
    {
        "word": "do-ing",
        "start": 162.92,
        "end": 163.18
    },
    {
        "word": "these",
        "start": 163.18,
        "end": 163.44
    },
    {
        "word": "hard",
        "start": 163.44,
        "end": 163.72
    },
    {
        "word": "things",
        "start": 163.72,
        "end": 164.22
    },
    {
        "word": "is",
        "start": 164.22,
        "end": 164.54
    },
    {
        "word": "the",
        "start": 164.54,
        "end": 164.76
    },
    {
        "word": "pan-ic",
        "start": 164.76,
        "end": 164.96
    },
    {
        "word": "mon-ster,",
        "start": 164.96,
        "end": 165.26
    },
    {
        "word": "that's",
        "start": 165.32,
        "end": 165.54
    },
    {
        "word": "a",
        "start": 165.54,
        "end": 165.72
    },
    {
        "word": "prob-lem",
        "start": 165.72,
        "end": 165.92
    },
    {
        "word": "be-cause",
        "start": 165.92,
        "end": 166.04
    },
    {
        "word": "in",
        "start": 166.04,
        "end": 166.3
    },
    {
        "word": "all",
        "start": 166.3,
        "end": 166.52
    },
    {
        "word": "of",
        "start": 166.52,
        "end": 166.66
    },
    {
        "word": "these",
        "start": 166.66,
        "end": 166.82
    },
    {
        "word": "non",
        "start": 166.82,
        "end": 167.12
    },
    {
        "word": "-dead-line",
        "start": 167.12,
        "end": 167.52
    },
    {
        "word": "sit-u-a-tion-s,",
        "start": 167.52,
        "end": 168.32
    },
    {
        "word": "the",
        "start": 169.08,
        "end": 169.26
    },
    {
        "word": "pan-ic",
        "start": 169.26,
        "end": 169.48
    },
    {
        "word": "mon-ster",
        "start": 169.48,
        "end": 169.76
    },
    {
        "word": "does-n't",
        "start": 169.76,
        "end": 170.04
    },
    {
        "word": "show",
        "start": 170.04,
        "end": 170.26
    },
    {
        "word": "up.",
        "start": 170.26,
        "end": 170.52
    },
    {
        "word": "And",
        "start": 170.52,
        "end": 170.7
    },
    {
        "word": "it's",
        "start": 170.7,
        "end": 170.86
    },
    {
        "word": "this",
        "start": 170.86,
        "end": 171.06
    },
    {
        "word": "long",
        "start": 171.06,
        "end": 171.44
    },
    {
        "word": "-term",
        "start": 171.44,
        "end": 171.58
    },
    {
        "word": "kind",
        "start": 171.58,
        "end": 171.82
    },
    {
        "word": "of",
        "start": 171.82,
        "end": 172.0
    },
    {
        "word": "pro-cras-ti-na-tion",
        "start": 172.0,
        "end": 172.98
    },
    {
        "word": "that's",
        "start": 172.98,
        "end": 173.68
    },
    {
        "word": "much",
        "start": 173.68,
        "end": 173.92
    },
    {
        "word": "less",
        "start": 173.92,
        "end": 174.22
    },
    {
        "word": "vis-i-ble",
        "start": 174.22,
        "end": 174.78
    },
    {
        "word": "and",
        "start": 174.78,
        "end": 175.16
    },
    {
        "word": "much",
        "start": 175.16,
        "end": 175.38
    },
    {
        "word": "less",
        "start": 175.38,
        "end": 175.78
    },
    {
        "word": "talked",
        "start": 175.78,
        "end": 176.08
    },
    {
        "word": "about",
        "start": 176.08,
        "end": 176.36
    },
    {
        "word": "than",
        "start": 176.36,
        "end": 176.52
    },
    {
        "word": "the",
        "start": 176.52,
        "end": 176.76
    },
    {
        "word": "fun-nier,",
        "start": 176.76,
        "end": 177.14
    },
    {
        "word": "short",
        "start": 177.14,
        "end": 177.52
    },
    {
        "word": "-term",
        "start": 177.52,
        "end": 177.88
    },
    {
        "word": "dead-line",
        "start": 177.88,
        "end": 178.32
    },
    {
        "word": "-based",
        "start": 178.32,
        "end": 178.7
    },
    {
        "word": "kind.",
        "start": 178.7,
        "end": 179.1
    },
    {
        "word": "And",
        "start": 179.48,
        "end": 179.7
    },
    {
        "word": "it",
        "start": 179.7,
        "end": 179.8
    },
    {
        "word": "can",
        "start": 179.8,
        "end": 179.94
    },
    {
        "word": "be",
        "start": 179.94,
        "end": 180.08
    },
    {
        "word": "the",
        "start": 180.08,
        "end": 180.18
    },
    {
        "word": "source",
        "start": 180.18,
        "end": 180.36
    },
    {
        "word": "of",
        "start": 180.36,
        "end": 180.6
    },
    {
        "word": "a",
        "start": 180.6,
        "end": 180.68
    },
    {
        "word": "huge",
        "start": 180.68,
        "end": 180.84
    },
    {
        "word": "amount",
        "start": 180.84,
        "end": 181.08
    },
    {
        "word": "of",
        "start": 181.08,
        "end": 181.3
    },
    {
        "word": "long",
        "start": 181.3,
        "end": 181.52
    },
    {
        "word": "-term",
        "start": 181.52,
        "end": 181.94
    },
    {
        "word": "un-hap-pi-ness",
        "start": 181.94,
        "end": 182.86
    },
    {
        "word": "and",
        "start": 182.86,
        "end": 183.32
    },
    {
        "word": "re-gret-s.",
        "start": 183.32,
        "end": 183.82
    },
    {
        "word": "I",
        "start": 184.4,
        "end": 184.62
    },
    {
        "word": "had",
        "start": 184.62,
        "end": 184.76
    },
    {
        "word": "a",
        "start": 184.76,
        "end": 184.84
    },
    {
        "word": "lit-tle",
        "start": 184.84,
        "end": 185.0
    },
    {
        "word": "bit",
        "start": 185.0,
        "end": 185.12
    },
    {
        "word": "of",
        "start": 185.12,
        "end": 185.22
    },
    {
        "word": "an",
        "start": 185.22,
        "end": 185.38
    },
    {
        "word": "epiphany.",
        "start": 185.38,
        "end": 186.0
    },
    {
        "word": "I",
        "start": 186.54,
        "end": 186.76
    },
    {
        "word": "don't",
        "start": 186.76,
        "end": 186.98
    },
    {
        "word": "think",
        "start": 186.98,
        "end": 187.16
    },
    {
        "word": "non",
        "start": 187.16,
        "end": 187.5
    },
    {
        "word": "-pro-cras-ti-na-tors",
        "start": 187.5,
        "end": 188.3
    },
    {
        "word": "ex-ist.",
        "start": 188.3,
        "end": 189.02
    },
    {
        "word": "That's",
        "start": 189.64,
        "end": 189.86
    },
    {
        "word": "right,",
        "start": 189.86,
        "end": 190.22
    },
    {
        "word": "I",
        "start": 190.44,
        "end": 190.66
    },
    {
        "word": "think",
        "start": 190.66,
        "end": 190.92
    },
    {
        "word": "all",
        "start": 190.92,
        "end": 191.32
    },
    {
        "word": "of",
        "start": 191.32,
        "end": 191.44
    },
    {
        "word": "you",
        "start": 191.44,
        "end": 191.54
    },
    {
        "word": "are",
        "start": 191.54,
        "end": 191.78
    },
    {
        "word": "pro-cras-ti-na-tors.",
        "start": 191.78,
        "end": 192.54
    },
    {
        "word": "Now,",
        "start": 193.54,
        "end": 193.72
    },
    {
        "word": "you",
        "start": 193.72,
        "end": 193.8
    },
    {
        "word": "might",
        "start": 193.8,
        "end": 193.98
    },
    {
        "word": "not",
        "start": 193.98,
        "end": 194.16
    },
    {
        "word": "all",
        "start": 194.16,
        "end": 194.28
    },
    {
        "word": "be",
        "start": 194.28,
        "end": 194.46
    },
    {
        "word": "a",
        "start": 194.46,
        "end": 194.74
    },
    {
        "word": "mess,",
        "start": 194.74,
        "end": 195.26
    },
    {
        "word": "like",
        "start": 195.46,
        "end": 195.76
    },
    {
        "word": "some",
        "start": 195.76,
        "end": 195.98
    },
    {
        "word": "of",
        "start": 195.98,
        "end": 196.12
    },
    {
        "word": "us.",
        "start": 196.12,
        "end": 196.74
    },
    {
        "word": "And",
        "start": 197.39999999999998,
        "end": 198.04
    },
    {
        "word": "some",
        "start": 198.04,
        "end": 198.3
    },
    {
        "word": "of",
        "start": 198.3,
        "end": 198.42
    },
    {
        "word": "you",
        "start": 198.42,
        "end": 198.5
    },
    {
        "word": "may",
        "start": 198.5,
        "end": 198.74
    },
    {
        "word": "have",
        "start": 198.74,
        "end": 198.96
    },
    {
        "word": "a",
        "start": 198.96,
        "end": 199.14
    },
    {
        "word": "healthy",
        "start": 199.14,
        "end": 199.38
    },
    {
        "word": "re-la-tion-ship",
        "start": 199.38,
        "end": 199.86
    },
    {
        "word": "with",
        "start": 199.86,
        "end": 200.14
    },
    {
        "word": "dead-lines.",
        "start": 200.14,
        "end": 200.68
    },
    {
        "word": "But",
        "start": 201.16,
        "end": 201.34
    },
    {
        "word": "re-mem-ber,",
        "start": 201.34,
        "end": 201.74
    },
    {
        "word": "the",
        "start": 201.8,
        "end": 202.0
    },
    {
        "word": "mon-key's",
        "start": 202.0,
        "end": 202.72
    },
    {
        "word": "sneaki-est",
        "start": 202.72,
        "end": 203.34
    },
    {
        "word": "trick",
        "start": 203.34,
        "end": 203.74
    },
    {
        "word": "is",
        "start": 203.74,
        "end": 203.9
    },
    {
        "word": "when",
        "start": 203.9,
        "end": 204.08
    },
    {
        "word": "the",
        "start": 204.08,
        "end": 204.4
    },
    {
        "word": "dead-lines",
        "start": 204.4,
        "end": 204.68
    },
    {
        "word": "aren't",
        "start": 204.68,
        "end": 205.04
    },
    {
        "word": "there.",
        "start": 205.04,
        "end": 205.58
    },
    {
        "word": "And",
        "start": 206.28,
        "end": 206.44
    },
    {
        "word": "we",
        "start": 206.44,
        "end": 206.48
    },
    {
        "word": "need",
        "start": 206.48,
        "end": 206.62
    },
    {
        "word": "to",
        "start": 206.62,
        "end": 206.68
    },
    {
        "word": "think",
        "start": 206.68,
        "end": 206.88
    },
    {
        "word": "about",
        "start": 206.88,
        "end": 207.24
    },
    {
        "word": "what",
        "start": 207.24,
        "end": 207.44
    },
    {
        "word": "we're",
        "start": 207.44,
        "end": 207.76
    },
    {
        "word": "re-al-ly",
        "start": 207.76,
        "end": 208.18
    },
    {
        "word": "pro-cras-ti-nat-ing",
        "start": 208.18,
        "end": 208.82
    },
    {
        "word": "on,",
        "start": 208.82,
        "end": 208.98
    },
    {
        "word": "be-cause",
        "start": 209.04,
        "end": 209.32
    },
    {
        "word": "ev-ery-one",
        "start": 209.32,
        "end": 210.0
    },
    {
        "word": "is",
        "start": 210.0,
        "end": 210.44
    },
    {
        "word": "pro-cras-ti-nat-ing",
        "start": 210.44,
        "end": 211.1
    },
    {
        "word": "on",
        "start": 211.1,
        "end": 211.46
    },
    {
        "word": "some-thing",
        "start": 211.46,
        "end": 211.98
    },
    {
        "word": "in",
        "start": 211.98,
        "end": 212.32
    },
    {
        "word": "life.",
        "start": 212.32,
        "end": 212.64
    },
    {
        "word": "That's",
        "start": 213.06,
        "end": 213.48
    },
    {
        "word": "a",
        "start": 213.48,
        "end": 213.58
    },
    {
        "word": "job",
        "start": 213.58,
        "end": 213.96
    },
    {
        "word": "for",
        "start": 213.96,
        "end": 214.52
    },
    {
        "word": "all",
        "start": 214.52,
        "end": 214.82
    },
    {
        "word": "of",
        "start": 214.82,
        "end": 214.92
    },
    {
        "word": "us,",
        "start": 214.92,
        "end": 215.38
    },
    {
        "word": "and",
        "start": 215.62,
        "end": 215.8
    },
    {
        "word": "it's",
        "start": 215.8,
        "end": 216.0
    },
    {
        "word": "a",
        "start": 216.0,
        "end": 216.02
    },
    {
        "word": "job",
        "start": 216.02,
        "end": 216.28
    },
    {
        "word": "that",
        "start": 216.28,
        "end": 216.44
    },
    {
        "word": "should",
        "start": 216.44,
        "end": 216.64
    },
    {
        "word": "prob-a-bly",
        "start": 216.64,
        "end": 217.08
    },
    {
        "word": "start",
        "start": 217.08,
        "end": 217.7
    },
    {
        "word": "to-day.",
        "start": 217.7,
        "end": 218.28
    },
    {
        "word": "Well,",
        "start": 218.74,
        "end": 219.08
    },
    {
        "word": "maybe",
        "start": 219.82,
        "end": 220.0
    },
    {
        "word": "not",
        "start": 220.0,
        "end": 220.44
    },
    {
        "word": "to-day,",
        "start": 220.44,
        "end": 221.06
    },
    {
        "word": "but",
        "start": 221.2,
        "end": 221.78
    },
    {
        "word": "...",
        "start": 221.78,
        "end": 223.58
    },
    {
        "word": "Well",
        "start": 223.58,
        "end": 223.8
    },
    {
        "word": "...",
        "start": 223.8,
        "end": 225.02
    },
    {
        "word": "some-time",
        "start": 225.02,
        "end": 225.36
    },
    {
        "word": "soon.",
        "start": 225.36,
        "end": 225.78
    }
]
let lyricsData2 = [
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

const firstWordStartTime = lyricsData[0].start;
const totalDuration = lyricsData[lyricsData.length - 1].end - lyricsData[0].start;
const numRows = Math.ceil(totalDuration / 4);

function groupLyricsByDuration(data, maxDuration) {
  const rows = [];
  let currentRow = [];
  let currentDuration = 0;

  data.forEach((lyric) => {
    const wordDuration = lyric.end - lyric.start;
    if (currentDuration + wordDuration > maxDuration && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [];
      currentDuration = 0;
    }
    currentRow.push(lyric);
    currentDuration += wordDuration;
  });
  if (currentRow.length > 0) rows.push(currentRow);
  return rows;
}

export default function RectangleGrid({isInstrumentsOnly }) {
   
   //songFile = isInstrumentsOnly ? songFile2 : songFile;
  const rectangles = Array.from({ length: numRows * 4 });
  const lyricsRows = groupLyricsByDuration(lyricsData, 4);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentWordIndex(0);
      setCurrentLetterIndex(0);
      handleStop();
    }
  };

  useEffect(() => {
    const updateLyrics = () => {
      if (!isPlaying || !audioRef.current) return;

      const currentTime = audioRef.current.currentTime;
      const wordIndex = lyricsData.findIndex(
        (lyric) => currentTime >= lyric.start && currentTime <= lyric.end
      );

      if (wordIndex !== -1 && wordIndex !== currentWordIndex) {
        setCurrentWordIndex(wordIndex);
        setCurrentLetterIndex(0);
      } else {
        const currentWord = lyricsData[currentWordIndex]?.word || "";
        const wordDuration = lyricsData[currentWordIndex]?.end - lyricsData[currentWordIndex]?.start || 1;
        const letterDuration = wordDuration / currentWord.length;
        const letterIndex = Math.floor((currentTime - lyricsData[currentWordIndex]?.start) / letterDuration);
        setCurrentLetterIndex(Math.min(letterIndex, currentWord.length - 1));
      }
      requestAnimationFrame(updateLyrics);
    };

    if (isPlaying) {
      requestAnimationFrame(updateLyrics);
    }
  }, [isPlaying, currentWordIndex]);

  return (
    <div className="container my-4">
      
      <audio ref={audioRef} src={songFile} preload="auto" />
      <div className="mb-4 d-flex gap-3">
        <button className="btn btn-primary" onClick={handleStart} disabled={isPlaying}>Start Animation</button>
        <button className="btn btn-secondary" onClick={handleStop} disabled={!isPlaying}>Stop Animation</button>
        <button className="btn btn-success" onClick={handleRestart}>Restart Animation</button>
      </div>

      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="row g-0">
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="col-3">
                <div className="border border-dark" style={{ paddingTop: '10%', position: 'relative' }}></div>
              </div>
            ))}
          </div>
          <div className="row mt-2">
            <p className="d-flex flex-wrap text-left w-100" style={{ justifyContent: 'space-between' }}>
              {lyricsRows[rowIndex] && lyricsRows[rowIndex].map((lyric, index) => {
                const totalRowDuration = lyricsRows[rowIndex].reduce((sum, word) => sum + (word.end - word.start), 0);
                const wordWidth = `${((lyric.end - lyric.start) / totalRowDuration) * 50}%`;

                return (
                  <span key={index} style={{ display: 'inline-block', width: wordWidth, textAlign: 'left' }}>
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