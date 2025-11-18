import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Advanced Diploma in Nature Conservation</CardTitle>
              <p className="text-sm text-muted-foreground">
                Cape Peninsula University of Technology — 2021 – 2022
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This program builds on the National Diploma to develop managerial, research, and technical skills for careers in natural resource management, research, and environmental policy.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Enhanced <strong>investigative, analytical, and problem-solving</strong> skills</li>
                <li>Management principles for <strong>Natural Resource and Protected Area Management</strong></li>
                <li>Expertise in <strong>policy implementation and natural resource management</strong></li>
                <li>Provides <strong>domain expertise</strong> for <strong>Green-Tech roles</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>National Diploma in Nature Conservation</CardTitle>
              <p className="text-sm text-muted-foreground">
                Cape Peninsula University of Technology — 2016 – 2018
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This program is designed to train competent nature conservation managers and researchers who contribute to the conservation of biodiversity.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Biodiversity Management</strong> and <strong>Natural Resource Management</strong></li>
                <li><strong>Research and Monitoring Techniques</strong></li>
                <li><strong>Environmental Policy Compliance</strong></li>
                <li>Career focus areas include <strong>Protected Areas Management, Alien Species Control,</strong> and <strong>Ecological Restoration</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>GIS in Conservation Mapping (Expert Level)</CardTitle>
              <p className="text-sm text-muted-foreground">
                Regional Centre For Mapping Of Resources For Development — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Completion of a four-module course sequence, demonstrating expert-level proficiency in applying Geographic Information Systems (GIS) for complex conservation mapping and spatial analysis.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Demonstrating <strong>expert-level proficiency</strong> in applying <strong>Geographic Information Systems (GIS)</strong></li>
                <li>Focus on <strong>Oracle Cloud Infrastructure (OCI)</strong> services</li>
                <li>Expertise in <strong>spatial analysis</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>OCI 2025 Certified Developer Professional</CardTitle>
              <p className="text-sm text-muted-foreground">
                Oracle University — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This certification validates expertise in designing, coding, testing, and deploying cloud-native applications on Oracle Cloud Infrastructure (OCI).
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Expertise in <strong>designing, coding, testing, and deploying</strong> cloud-native applications</li>
                <li>Utilizing <strong>Oracle Cloud Infrastructure (OCI)</strong> services</li>
                <li>Focus on services like <strong>Containers</strong> and <strong>Serverless</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>OCI 2025 Certified Foundations Associate</CardTitle>
              <p className="text-sm text-muted-foreground">
                Oracle University — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This certification confirms fundamental knowledge of public cloud services, focusing on the core architecture and key principles of Oracle Cloud Infrastructure (OCI).
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confirms <strong>fundamental knowledge of public cloud services</strong></li>
                <li>Understanding of the core <strong>OCI architecture</strong></li>
                <li>Knowledge of <strong>security</strong> and <strong>networking principles</strong> within OCI</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certificate in Full Stack Development</CardTitle>
              <p className="text-sm text-muted-foreground">
                FNB App Academy — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This intensive program focuses on the entire application lifecycle, from user interface design to back-end API development using modern programming languages.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Intensive program focusing on the <strong>entire application lifecycle</strong></li>
                <li>Skills include <strong>front-end (UI) development</strong></li>
                <li>Skills include <strong>back-end (API) development</strong></li>
                <li>Use of <strong>modern programming languages</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Software Development Certification</CardTitle>
              <p className="text-sm text-muted-foreground">
                Power Learn Project Academy — 2024
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This certification provides a strong foundation in essential software engineering concepts, logic, version control, and data handling.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Provides a strong foundation in <strong>software engineering fundamentals</strong></li>
                <li>Focus on <strong>programming logic</strong></li>
                <li>Skills in <strong>version control (Git)</strong></li>
                <li>Knowledge of <strong>data handling</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Verified Cyber Threat Management Course</CardTitle>
              <p className="text-sm text-muted-foreground">
                Cisco Networking Academy — 2024
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                This course focuses on evaluating network and systems vulnerabilities, creating structured assessment plans, and developing strategies for incident response and recovery.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Demonstrates proficiency in evaluating <strong>network and systems vulnerability</strong></li>
                <li>Creating <strong>vulnerability assessment plans</strong></li>
                <li>Recommending <strong>disaster recovery</strong> and <strong>incident response activities</strong></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
