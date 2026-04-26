export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tech?: string;
}

export const projects: Project[] = [
  {
    title: "Facial Text Emotion Detector & Emoji Generator",
    year: 2024,
    tech: "Machine Learning, NLP",
    description:
      "Multimodal emotion detection using facial recognition and natural language processing. Improved prediction accuracy through preprocessing and model tuning.",
    url: "https://github.com/ShadmanSakib44/Facial_Text_EmotionDetector_EmojiGenerator",
  },
  {
    title: "EduCast",
    year: 2023,
    tech: "MERN Stack",
    description:
      "Full-stack educational platform with authentication and content management. Built responsive frontend using React.js.",
    url: "https://github.com/ShadmanSakib44/EduCast-.git",
  },
  {
    title: "ResuMetrics",
    year: 2023,
    tech: "MERN Stack",
    description:
      "Job portal and resume builder with matching functionality. Improved user experience through streamlined interface design.",
    url: "https://github.com/ShadmanSakib44/ResuMetrics",
  },
];
