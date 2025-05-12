import React from "react";

type CertificateData = {
    id: string;
    title: string;
    description: string;
    fileName: string;
};

const certificates: CertificateData[] = [
    {
        id: "C1",
        title: "J&J Global Non‐Employee Worker Notice",
        description: "Notice outlining rights and responsibilities for non-employee workers.",
        fileName: "C1 -J&J Global Non‐Employee Worker Notice.pdf",
    },
    {
        id: "C2",
        title: "Annual Complaint Awareness Training - JNJ",
        description: "Covers adverse events, product quality, and special situations.",
        fileName: "C2 - Annual Complaint (Adverse Events, Special Situations, and Product Quality Complaints) Awareness Training for - JNJ.pdf",
    },
    {
        id: "C3",
        title: "Annual Complaint - JNJ",
        description: "Overview of complaint procedures and reporting obligations.",
        fileName: "C3 - Annual Complaint - JNJ.pdf",
    },
    {
        id: "C4",
        title: "[RETIRED] InfoSec Training v14 - JNJ",
        description: "Retired course on best practices in information security.",
        fileName: "C4 - [RETIRED] Information Security Training Course v14 - JNJ.pdf",
    },
    {
        id: "C5",
        title: "ENT-IT-SDLC BT CBUG! - JNJ",
        description: "Training on the software development lifecycle within JNJ.",
        fileName: "C5 - ENT-IT-SDLC BT CBUG! - JNJ.pdf",
    },
    {
        id: "C6",
        title: "Information Security Training Ground - JNJ",
        description: "Interactive training on information security awareness.",
        fileName: "C6 - Information Security Training Ground - JNJ.pdf",
    },
    {
        id: "C7",
        title: "J&J Global Non-Employee Worker Notice - Duplicate",
        description: "Duplicate record of worker notice for compliance reference.",
        fileName: "C7- J&J Global Non-Employee Worker Notice - JNJ.pdf",
    },
    {
        id: "C8",
        title: "Records & Information Management Training - JNJ",
        description: "Training on records handling and information lifecycle management.",
        fileName: "C8 - JJIMU-RIM-2023 - Records and Information Management Training- JNJ.pdf",
    },
    {
        id: "C9",
        title: "Open Source Software ePolicy - JNJ",
        description: "Guidance on using and managing open source software in JNJ.",
        fileName: "C9 - Open Source Software ePolicy - JNJ.pdf",
    },
    {
        id: "C10",
        title: "Quality Management Framework - JNJ",
        description: "Training on JNJ's quality standards and governance framework.",
        fileName: "C10 - Quality Management Framework - JNJ.pdf",
    },
];

const Certificate: React.FC = () => {
    return (
        <div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
            <h2 className="text-3xl font-bold mb-10 text-center">J&J Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-gray-900 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-blue-500/20 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{cert.description}</p>
                        <a
                            href={`/${cert.fileName}`}
                            download
                            className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Download PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificate;
