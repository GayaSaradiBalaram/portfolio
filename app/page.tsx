"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, ChevronUp, Menu, X, MapPin, ChevronRight, Award, Calendar } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script")
    script.src = "https://cdn.emailjs.com/dist/email.min.js"
    script.onload = () => {
      // Initialize EmailJS
      ;(window as any).emailjs.init("vQnv_Vw0r2VvY6PzU")
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1pasOWbH7vjwK2WavRuV9VBPMKUGfM6eK/view?usp=sharing", "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:saradhisaragadam761@gmail.com"
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/gaya-saradhi-balaram-saragadam/", "_blank")
  }

  const handleGitHubClick = () => {
    window.open("https://github.com/GayaSaradiBalaram", "_blank")
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

    try {
      await (window as any).emailjs.sendForm("service_15d3feq", "template_v7syyrh", form)

      alert("✅ Your message has been sent successfully!")
      form.reset()
    } catch (error) {
      console.error("❌ FAILED...", error)
      alert("❌ Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const certifications = [
    "Google TensorFlow Developer",
    "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    "RPA Professional (Automation 360)",
    "PCAP: Python",
    "Google Certified Associate Cloud Engineer",
    "Microsoft Azure AI Fundamentals",
  ]

  const projects = [
    {
      title: "Advanced Image Classification System",
      description:
        "Developed a comprehensive computer vision solution using deep learning techniques for multi-class image classification. Implemented data augmentation, transfer learning, and hyperparameter optimization to achieve 92% accuracy on test datasets.",
      tech: "TensorFlow, Keras, Python, OpenCV, NumPy",
      details: [
        "Preprocessed and augmented 10,000+ images using advanced techniques",
        "Implemented CNN architectures including ResNet and VGG",
        "Achieved 92% accuracy with precision and recall optimization",
        "Deployed model using Flask API for real-time predictions",
      ],
      image: "/images/image-classification.png",
    },
    {
      title: "Intelligent Language Translation Platform",
      description:
        "Built a full-stack web application for real-time multi-language translation using NLP techniques and REST API integration. Features include text translation, language detection, and translation history.",
      tech: "NLP, REST APIs, Python, Streamlit, Flask",
      details: [
        "Integrated multiple translation APIs for enhanced accuracy",
        "Implemented language detection with 95% accuracy",
        "Built responsive web interface using Streamlit",
        "Added translation history and user preference features",
      ],
      image: "/images/ai-translator.png",
    },
    {
      title: "Automated Survey Analytics Dashboard",
      description:
        "Created an end-to-end survey analysis platform that automatically processes responses, generates insights, and creates interactive visualizations. Includes sentiment analysis and statistical reporting.",
      tech: "Python, Pandas, Matplotlib, Power BI, NLP",
      details: [
        "Processed 5,000+ survey responses with automated cleaning",
        "Implemented sentiment analysis using VADER and TextBlob",
        "Created interactive Power BI dashboards with drill-down capabilities",
        "Generated automated reports with statistical significance testing",
      ],
      image: "/images/survey-analytics.png",
    },
    {
      title: "Business Intelligence Sales Forecasting",
      description:
        "Developed predictive models for sales forecasting using time series analysis and machine learning. Created comprehensive dashboards for stakeholder reporting and decision-making support.",
      tech: "Python, Scikit-learn, Power BI, SQL, Time Series",
      details: [
        "Built ARIMA and LSTM models for time series forecasting",
        "Achieved 85% accuracy in quarterly sales predictions",
        "Created executive dashboards with KPI tracking",
        "Implemented automated alert system for anomaly detection",
      ],
      image: "/images/sales-dashboard.png",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-white">DATA ANALYST PORTFOLIO</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-orange-400 transition-colors font-medium uppercase text-sm tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white border border-slate-600 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-xs mr-2">MENU</span>
              {mobileMenuOpen ? <X className="h-4 w-4 inline" /> : <Menu className="h-4 w-4 inline" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-orange-400 hover:bg-slate-800 transition-colors uppercase text-sm tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white pt-16"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Professional Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 p-2">
                <Image
                  src="/images/profile-photo.png"
                  alt="S. Gaya Saradhi Balaram"
                  width={180}
                  height={180}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">HI, I'M S. GAYA SARADHI BALARAM</h1>

          <p className="text-xl md:text-2xl mb-4 text-slate-200 tracking-wide">
            DATA ANALYST | PYTHON | POWER BI | SQL | MACHINE LEARNING | TABLEAU
          </p>

          <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed">
            TURNING DATA INTO DECISIONS WITH INSIGHTFUL ANALYSIS AND VISUALIZATION.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold tracking-wider"
              onClick={handleDownloadResume}
            >
              <ChevronRight className="mr-2 h-5 w-5" />
              VIEW RESUME
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold tracking-wider bg-transparent"
              onClick={() => scrollToSection("projects")}
            >
              <ChevronRight className="mr-2 h-5 w-5" />
              LET'S EXPLORE MORE!
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 text-white relative"
        style={{
          background: "linear-gradient(135deg, #334155 0%, #475569 50%, #64748b 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider">WHO AM I?</h2>

            <div className="mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-slate-200 mb-6">
                Driven by a passion for Machine Learning and Data Science, I strive to solve real-world problems using
                predictive modeling, data analysis, and visualization tools. As a 2025 graduate in Artificial
                Intelligence and Data Science from K L University (CGPA: 9.37), I aim to create a meaningful impact in
                every project I take on.
              </p>

              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                My journey in data science began with a curiosity about how data can tell stories and drive decisions.
                Through my academic pursuits and hands-on internship experiences, I've developed expertise in
                statistical analysis, machine learning algorithms, and data visualization techniques. I'm particularly
                passionate about using Python, SQL, and business intelligence tools to transform raw data into
                actionable insights.
              </p>

              <p className="text-lg leading-relaxed text-slate-300 mb-8">
                With experience in both technical implementation and business communication, I bridge the gap between
                complex data analysis and strategic business decisions. My goal is to help organizations leverage their
                data assets to drive growth, optimize operations, and gain competitive advantages in today's data-driven
                world.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 tracking-wider">TECHNICAL SKILLS</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-orange-400 font-bold mb-4">Programming Languages</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Python (Advanced)</li>
                    <li>• SQL (Advanced)</li>
                    <li>• R (Intermediate)</li>
                    <li>• Java (Intermediate)</li>
                    <li>• C (Basic)</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-orange-400 font-bold mb-4">Data Analysis & ML</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Pandas, NumPy</li>
                    <li>• Scikit-learn</li>
                    <li>• TensorFlow, Keras</li>
                    <li>• Statistical Analysis</li>
                    <li>• Predictive Modeling</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-orange-400 font-bold mb-4">Visualization Tools</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Power BI (Advanced)</li>
                    <li>• Tableau (Intermediate)</li>
                    <li>• Matplotlib, Seaborn</li>
                    <li>• Plotly</li>
                    <li>• Excel (Advanced)</li>
                  </ul>
                </div>

                <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-orange-400 font-bold mb-4">Tools & Platforms</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Jupyter Notebook</li>
                    <li>• Git, GitHub</li>
                    <li>• Google Cloud Platform</li>
                    <li>• Microsoft Azure</li>
                    <li>• Streamlit, Django</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 tracking-wider">EDUCATION</h3>
              <div className="bg-slate-700/30 p-8 rounded-lg border border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-orange-400 mb-2">
                      Bachelor of Technology in Artificial Intelligence and Data Science
                    </h4>
                    <p className="text-lg text-slate-300 mb-2">K L University, Vijayawada</p>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4" />
                        2021 - 2025
                      </span>
                      <span className="font-semibold text-orange-400 text-lg">CGPA: 9.37/10</span>
                    </div>
                    <div className="text-slate-300">
                      <p className="mb-3">
                        <strong>Relevant Coursework:</strong>
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm">
                        <li>• Machine Learning & Deep Learning</li>
                        <li>• Data Structures & Algorithms</li>
                        <li>• Statistical Analysis & Probability</li>
                        <li>• Database Management Systems</li>
                        <li>• Computer Vision & NLP</li>
                        <li>• Business Intelligence & Analytics</li>
                        <li>• Big Data Technologies</li>
                        <li>• Software Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold tracking-wider"
                onClick={() => scrollToSection("experience")}
              >
                <ChevronRight className="mr-2 h-5 w-5" />I WANT TO KNOW MORE!!
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold tracking-wider bg-transparent"
                onClick={() => scrollToSection("experience")}
              >
                <ChevronRight className="mr-2 h-5 w-5" />
                NAH! LET'S TALK ABOUT EXPERIENCE
              </Button>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wider">CERTIFICATIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-4 text-center justify-center bg-slate-700/50 text-white hover:bg-slate-600/50 border border-slate-600"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 text-white relative"
        style={{
          background: "linear-gradient(135deg, #475569 0%, #64748b 50%, #334155 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wider">INTERNSHIP EXPERIENCE</h2>

            <div className="space-y-12">
              {/* Internship 1 */}
              <Card className="bg-slate-800/50 border-slate-600 text-white">
                <CardContent className="pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-400 mb-2">Data Analyst Intern</h3>
                      <p className="text-xl text-slate-300 mb-2">Absolin Software Solutions</p>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span>May 2023 - Aug 2023</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 text-slate-200">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Worked on Power BI dashboards for comprehensive business analytics and reporting
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Developed image segmentation models using computer vision techniques
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Built ML model development pipelines and automated data preprocessing workflows
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Collaborated with cross-functional teams on data-driven business solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Internship 2 */}
              <Card className="bg-slate-800/50 border-slate-600 text-white">
                <CardContent className="pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-400 mb-2">Data Science Intern</h3>
                      <p className="text-xl text-slate-300 mb-2">Bharat Intern (Virtual)</p>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span>Jun 2023 - Jul 2023</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 text-slate-200">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Built ML classification models with high accuracy using ensemble methods
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Performed comprehensive exploratory data analysis on large datasets
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Developed end-to-end ML pipelines from data collection to model deployment
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      Created data visualizations and statistical reports for stakeholder presentations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 text-white relative"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wider">PROJECTS</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-slate-700 rounded-t-lg mb-6 flex items-center justify-center">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="rounded-t-lg object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-orange-400 tracking-wide">
                        {project.title.toUpperCase()}
                      </h3>

                      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                      <p className="text-sm text-slate-400 mb-6">
                        <strong>Tech Stack:</strong> {project.tech}
                      </p>

                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wider"
                        onClick={handleGitHubClick}
                      >
                        <ChevronRight className="mr-2 h-4 w-4" />
                        LET'S GO!!
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 text-white relative"
        style={{
          background: "linear-gradient(135deg, #334155 0%, #475569 50%, #64748b 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-wider">GET IN TOUCH</h2>

            <p className="text-xl text-center mb-12 text-slate-200">
              Let's chat! Your data, my brain - together we can be unstoppable.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-orange-400" />
                  <span className="text-lg">India (Open for Relocation)</span>
                </div>

                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                >
                  <Mail className="h-6 w-6 text-orange-400" />
                  <span className="text-lg">saradhisaragadam761@gmail.com</span>
                </button>

                <button
                  onClick={handleGitHubClick}
                  className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                >
                  <Github className="h-6 w-6 text-orange-400" />
                  <span className="text-lg">github.com/GayaSaradiBalaram</span>
                </button>

                <button
                  onClick={handleLinkedInClick}
                  className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-orange-400" />
                  <span className="text-lg">linkedin.com/in/gaya-saradhi-balaram-saragadam</span>
                </button>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-orange-400" />
                  <span className="text-lg">+91 8185957761</span>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Name *</label>
                      <Input
                        name="user_name"
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email *</label>
                      <Input
                        name="user_email"
                        type="email"
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Subject *</label>
                    <Input
                      name="subject"
                      required
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Message *</label>
                    <Textarea
                      name="message"
                      required
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                      placeholder="Tell me about your data project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wider"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <ChevronRight className="mr-2 h-5 w-5" />
                        SEND MESSAGE
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>&copy; Portfolio. All rights reserved. | Design: HTML5 UP</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <button onClick={handleLinkedInClick} className="text-slate-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button onClick={handleGitHubClick} className="text-slate-400 hover:text-orange-400 transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button onClick={handleEmailClick} className="text-slate-400 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg z-50"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
