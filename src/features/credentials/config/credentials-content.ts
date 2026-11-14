import type { Testimonial } from "../types/credentials";

export const curriculumVitae = {
  previewWidth: 1273,
  previewHeight: 1800,
  pages: [
    { number: 1, src: "/images/credentials/ay-ea-cv-preview.png" },
    { number: 2, src: "/images/credentials/ay-ea-cv-page-2.png" },
    { number: 3, src: "/images/credentials/ay-ea-cv-page-3.png" },
  ],
  documentHref: "/documents/ayomide-ajibola-cv.pdf",
} as const;

/** Recommendations supplied for publication; Bridge500 surname corrected as requested. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "arcon",
    organisation: "ARCON",
    quote:
      "I particularly appreciate her discretion when handling sensitive information, her responsiveness to feedback, and her ability to remain composed when priorities change.",
    name: "Direct manager",
    role: "Advertising Regulatory Council of Nigeria (ARCON)",
    recommendation: {
      title: "Trusted with the details.",
      paragraphs: [
        "As Ayomide’s direct manager at the Advertising Regulatory Council of Nigeria (ARCON), I have had the opportunity to observe her organisational skills, professionalism, and dedication to providing effective executive support.",
        "Ayomide brings care and attention to managing schedules, coordinating meetings, handling correspondence, and following up on outstanding tasks. She understands that an Executive Assistant’s value goes beyond completing assignments; it includes anticipating needs, communicating clearly, and helping priorities stay on track.",
        "I particularly appreciate her discretion when handling sensitive information, her responsiveness to feedback, and her ability to remain composed when priorities change. She works respectfully with colleagues and stakeholders, making her a dependable point of contact.",
        "I am pleased to recommend Ayomide for Executive Assistant opportunities. She would bring reliability, initiative, and a strong sense of responsibility to any executive or team she supports.",
      ],
    },
  },
  {
    id: "bridge500",
    organisation: "Bridge500",
    quote:
      "Her ability to anticipate needs, stay organised and ensure that nothing falls through the cracks has been particularly valuable to the team.",
    name: "Oyindamola Tiamiyu",
    role: "Founder, Bridge500",
    recommendation: {
      title: "A dependable part of the team.",
      paragraphs: [
        "I am delighted to write this letter of commendation in recognition of Ayomide Ajibola’s outstanding contributions and commitment in her capacity as Executive Assistant at Bridge500.",
        "Throughout her time with Bridge500, Ayomide has consistently demonstrated exceptional diligence, professionalism, resourcefulness and attention to detail in carrying out her duties and responsibilities. She approaches every assignment with a strong sense of responsibility, ensuring that tasks are properly coordinated, details are not overlooked and responsibilities are executed accurately and within stipulated timelines. Her ability to anticipate needs, stay organised and ensure that nothing falls through the cracks has been particularly valuable to the team.",
        "One of Ayomide’s most commendable qualities is her willingness to go beyond the immediate scope of her role. She is an excellent team player who readily offers support to other team members and work streams whenever the need arises. Her collaborative attitude, responsiveness and willingness to contribute wherever necessary reflect a genuine understanding of teamwork and shared responsibility.",
        "In addition to her administrative capabilities, Ayomide possesses a commendable level of digital and technical proficiency. She demonstrates a good understanding of various productivity, communication and organisational tools that support efficient administrative operations and team coordination. Her ability to leverage these tools effectively contributes to smoother workflows, improved organisation and overall team productivity.",
        "I particularly appreciate her dedication, versatility and the positive attitude she brings to the team. Her contributions have been valuable to the operations of Bridge500, and I am confident that she will continue to distinguish herself in any professional environment she finds herself.",
        "I therefore commend Ayomide Ajibola for her excellent service, dedication and contributions as Executive Assistant at Bridge500. She is an asset to any team, and I have no doubt that she will continue to demonstrate the same level of excellence, accountability and professionalism in her future endeavours.",
        "Please accept this commendation with confidence.",
      ],
      signOff: "Yours faithfully,",
    },
  },
];
