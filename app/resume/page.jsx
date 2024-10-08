"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaSwift,
  FaGit,
  FaGithub,
  FaGitlab,
  FaAws,
  FaMicrosoft
} from "react-icons/fa";

import { DiGoogleCloudPlatform } from "react-icons/di";

import { VscVscodeInsiders } from "react-icons/vsc";

import {SiPandas, SiTailwindcss, SiNextdotjs, SiCplusplus, SiCsharp, SiC} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Highly motivated, goal-oriented college senior with a track record of academic excellence and passion for understanding and exploring new skills and opportunities. Has built communication skills and academic talent through many years of extracurricular involvement and multidisciplinary experiences. Constantly looking for intriguing and challenging opportunities to increase my knowledge and skill set.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sai Prashanth Lanka",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1(972) 469-2323",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "GitHub",
      fieldValue: "sailanka02",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "saip.lanka02@gmail.com",
    },
    {
      fieldName: "Occupation",
      fieldValue: "Looking",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Well rounded long term professional experience in the tech industry, working with various companies and organizations.",
  items: [
    {
      company: "MacysTech",
      position: "Developer Intern",
      duration: "June 2024 - August 2024",
    },
    {
      company: "WellMed/UnitedHealth Group",
      position: "Developer/Technology Intern",
      duration: "May 2023 - August 2023",
    },
    {
      company: "Cepheid",
      position: "Project Management/Gov Intern",
      duration: "May 2022 - August 2022",
    },
    {
      company: "LAK Technologies LLC",
      position: "Cloud Resources Intern",
      duration: "January 2019 - January 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Education in multiple fields, including computer science, electronics engineering, data engineering and cloud computing.",
  items: [

    {
      institution: "Codecademy",
      degree: "Full-Stack Developer Track",
      duration: "2024",
    },
    {
      institution: "Texas A&M University",
      degree: "Electronics Engineering",
      duration: "2021 - ",
    },
    {
      institution: "Amazon Web Services",
      degree: "Certified Cloud Practitioner",
      duration: "2022",
    },
    {
      institution: "LinkedIn Learning",
      degree: "Python Machine Learning",
      duration: "2021",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
  "Experience and proficiency in multiple programming languages, frameworks, and tools. Proficient in front-end and back-end development, cloud computing, and data engineering."
  ,
    skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <VscVscodeInsiders />,
      name: "vs code",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiCplusplus />,
      name: "c++",
    },
    {
      icon: <SiCsharp />,
      name: "c#",
    },
    {
      icon: <SiC />,
      name: "c",
    },
    {
      icon: <FaSwift />,
      name: "swift",
    },
    {
      icon: <SiPandas />,
      name: "pandas",
    },
    {
      icon: <DiGoogleCloudPlatform />,
        name: "google cloud",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaMicrosoft />,
      name: "microsoft",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
        icon: <FaGithub />,
        name: "github",
    },
    {
        icon: <FaGitlab />,
        name: "gitlab",
    },


  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
