import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "August 2025 - Present (Part-time)",
      title: "Software Developer, IT and Technical Support",
      subtitle: "Grasshopper Green Technologies",
      description:
        "I provided comprehensive IT support by troubleshooting hardware, software, and network issues while maintaining core infrastructure like VoIP systems and internal networks. My role involved collaborating with internal teams to identify technical needs, implementing efficiency-boosting software solutions, and assisting in the deployment and testing of internal applications. Additionally, I managed user accounts and system configurations to ensure secure, streamlined operations across the organization.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – Present",
      title: "Project Manager: Training, Education & SMME Development",
      subtitle: "Contour Enviro Group",
      description:
        "Design and implement comprehensive training programs for SMMEs in financial literacy, environmental management, and regulatory compliance. Manage end-to-end project lifecycle, ensuring adherence to timelines, budgets, and quality standards. Develop strategic partnerships with government agencies, industry bodies, and academic institutions. Conduct thorough monitoring and evaluation of training program impacts. Prepare and manage project budgets, including grant applications and funding proposals.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "November 2020 - June 2024",
      title: "Project Manager: Vegetation Management",
      subtitle: "Contour Enviro Group",
      description:
        "Designed and implemented alien invasive plant control strategies across multiple sites. Ensured compliance with National Environmental Management: Biodiversity Act (NEMBA). Managed Field teams, budgets, and comprehensive environmental monitoring programs. Stakeholder engagement and developed strategic clearing operations. Maintained GIS-based mapping systems for invasion tracking and management.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "March 2020 - August 2020",
      title: "Wildlife Monitor",
      subtitle: "Hunters Moon Game Ranch",
      description:
        "Conducted daily wildlife observations and comprehensive habitat monitoring. Collected and managed critical ecological data. Supported conservation efforts and invasive species control initiatives.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="Bridging Conservation, Project Management, and Digital Innovation"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
