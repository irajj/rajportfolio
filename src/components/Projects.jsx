import { Github, ExternalLink } from "lucide-react";
import fallsResponseImg from "../assets/images/projectimg/fallsResponseImg.jpg";
import studentEnrollmentImg from "../assets/images/projectimg/studentEnrollmentImg.jpg";
import engineeringCrmImg from "../assets/images/projectimg/engineeringCrmImg.jpg";
import mortgageCrmImg from "../assets/images/projectimg/mortgageCrmImg.jpg";
import medtechPortalImg from "../assets/images/projectimg/medtechPortalImg.jpg";
import jnjPortalImg from "../assets/images/projectimg/johnson-johnson-facility.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "J&J Japan – Healthcare & Education Platform",
      description:
        "Led full-cycle development of a production-ready Power Pages portal for Johnson & Johnson Japan. The platform supports e-learning, sales reporting, and API-based recall tracking. Delivered robust backend plugins, improved UI/UX, and ensured continuous client collaboration. The live portal is actively used by healthcare professionals.",
      tags: ["Power Pages", "Dynamics 365", "Healthcare", "API Integration", "Plugins", "UI/UX"],
      links: {
        github: "",
        demo: "https://partner.jjkkpro.jp/ja-JP/signin?ReturnUrl=%2Fja-JP%2F",
      },
      image: jnjPortalImg,
      featured: true,
    },
    {
      title: "Falls Response System for Emergency Care",
      description:
        "A robust solution for emergency care teams, including a Canvas App to capture falls data, Power Pages for client-side access, and Power Automate workflows integrated with government APIs. Visualized critical insights through Power BI dashboards.",
      tags: ["Healthcare", "Canvas App", "Power Pages", "Power BI", "Automation"],
      links: {
        github: "",
        demo: "",
      },
      image: fallsResponseImg,
      featured: true,
    }, {
      title: "Student Enrollment Portal",
      description:
        "Developed a Power Pages-based multi-step form with SharePoint document uploads. Integrated Power BI for real-time application data insights and used Power Automate for automated notifications. Enabled role-based access and SSRS reports for summaries.",
      tags: ["Education", "Power Pages", "SharePoint", "Power BI", "SSRS"],
      links: {
        github: "",
        demo: "",
      },
      image: studentEnrollmentImg,
      featured: true,
    },
    {
      title: "Engineering CRM – Sales Module",
      description:
        "Customized Dynamics 365 CRM for an offshore engineering firm. Delivered solutions in agile sprints, developed plugins, and maintained custom views and forms to streamline the sales cycle.",
      tags: ["CRM", "Dynamics 365", "Plugins", "Sales Module", "Agile"],
      links: {
        github: "",
        demo: "",
      },
      image: engineeringCrmImg,
      featured: false,
    },
    {
      title: "Mortgage CRM – Client & Broker Portal",
      description:
        "Built a complete CRM for managing clients, leads, and brokers. Integrated NMLS API for real-time license verification and automated lead conversions. Enhanced reporting through SSRS and designed branded email templates.",
      tags: ["Mortgage", "CRM", "NMLS API", "SSRS", "Automation"],
      links: {
        github: "",
        demo: "",
      },
      image: mortgageCrmImg,
      featured: false,
    },
    {
      title: "MedTech – External Product Access Portal",
      description:
        "Developed a secure Power Pages portal for MedTech stakeholders. Used plugins, workflows, and UI customizations to streamline product access management with high security and usability standards.",
      tags: ["MedTech", "Power Pages", "Plugins", "Security", "Workflow"],
      links: {
        github: "",
        demo: "",
      },
      image: medtechPortalImg,
      featured: true,
    }




  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
