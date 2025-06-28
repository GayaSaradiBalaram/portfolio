"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ChevronUp,
  Menu,
  X,
  MapPin,
  ChevronRight,
  Award,
  Calendar,
  BarChart3,
  TrendingUp,
  Database,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ["DATA ANALYST", "BUSINESS INTELLIGENCE", "MACHINE LEARNING", "DATA SCIENTIST"]
  const typingSpeed = 120
  const deletingSpeed = 60
  const pauseTime = 2500

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)

      // Professional scroll animations
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 100

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in-professional")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Professional typing animation
  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentWord.length) {
            setTypedText(currentWord.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentWord.slice(0, typedText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, words])

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script")
    script.src = "https://cdn.emailjs.com/dist/email.min.js"
    script.onload = () => {
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
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      <style jsx>{`
        /* Professional Background Patterns */
        .professional-bg-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%);
        }

        .professional-grid-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .professional-dots-bg {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Professional Animations */
        @keyframes fadeInProfessional {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInProfessional {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleInProfessional {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatProfessional {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
          }
        }

        .animate-fade-in-professional {
          animation: fadeInProfessional 0.8s ease-out forwards;
        }

        .animate-slide-in-professional {
          animation: slideInProfessional 0.8s ease-out forwards;
        }

        .animate-scale-in-professional {
          animation: scaleInProfessional 0.6s ease-out forwards;
        }

        .animate-float-professional {
          animation: floatProfessional 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .professional-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .professional-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .professional-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .professional-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .typing-cursor::after {
          content: '|';
          animation: blink 1.2s infinite;
          color: #3b82f6;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .stagger-professional > * {
          opacity: 0;
          transform: translateY(15px);
          animation: fadeInProfessional 0.6s ease-out forwards;
        }

        .stagger-professional > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-professional > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-professional > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-professional > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-professional > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-professional > *:nth-child(6) { animation-delay: 0.6s; }

        /* Professional Gradient Overlays */
        .professional-gradient-overlay {
          background: linear-gradient(135deg, 
            rgba(30, 58, 138, 0.95) 0%, 
            rgba(59, 130, 246, 0.9) 50%, 
            rgba(147, 197, 253, 0.85) 100%);
        }

        .professional-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 animate-slide-in-professional">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-slate-800 animate-fade-in-professional flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              DATA ANALYST PORTFOLIO
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-professional">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium uppercase text-sm tracking-wider professional-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-100 transition-all duration-300 professional-hover"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-xs mr-2 font-medium">MENU</span>
              {mobileMenuOpen ? <X className="h-4 w-4 inline" /> : <Menu className="h-4 w-4 inline" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 animate-fade-in-professional bg-white">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 uppercase text-sm tracking-wider font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
        className="relative min-h-screen flex items-center justify-center text-white pt-16 professional-bg-pattern"
      >
        <div className="absolute inset-0 professional-gradient-overlay"></div>
        <div className="absolute inset-0 professional-dots-bg opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Professional Photo */}
          <div className="mb-12 animate-scale-in-professional">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 p-1 animate-float-professional animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white p-2">
                <Image
                  src="/images/profile-photo.png"
                  alt="S. Gaya Saradhi Balaram"
                  width={220}
                  height={220}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-8 tracking-wide animate-fade-in-professional"
            style={{ animationDelay: "0.2s" }}
          >
            S. GAYA SARADHI BALARAM
          </h1>

          <div
            className="text-2xl md:text-3xl mb-6 text-blue-100 tracking-wide animate-fade-in-professional typing-cursor font-light"
            style={{ animationDelay: "0.4s" }}
          >
            {typedText}
          </div>

          <p
            className="text-lg md:text-xl mb-12 text-blue-50 max-w-4xl mx-auto leading-relaxed animate-fade-in-professional font-light"
            style={{ animationDelay: "0.6s" }}
          >
            Transforming complex data into strategic business insights through advanced analytics and machine learning
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-professional"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium tracking-wide professional-hover shadow-lg"
              onClick={handleDownloadResume}
            >
              <TrendingUp className="mr-3 h-5 w-5" />
              VIEW RESUME
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg font-medium tracking-wide bg-transparent professional-hover"
              onClick={() => scrollToSection("projects")}
            >
              <Database className="mr-3 h-5 w-5" />
              EXPLORE PROJECTS
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 text-slate-800 relative bg-white professional-grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide animate-on-scroll">
              PROFESSIONAL PROFILE
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">About Me</h3>
                <p className="text-lg leading-relaxed text-slate-600 mb-6">
                  As a dedicated Data Analyst with expertise in Machine Learning and Business Intelligence, I specialize
                  in transforming raw data into actionable business insights. With a strong academic foundation from K L
                  University (CGPA: 9.37) and hands-on industry experience, I excel at bridging the gap between complex
                  technical analysis and strategic business decisions.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 mb-6">
                  My approach combines statistical rigor with business acumen, ensuring that every analysis delivers
                  measurable value. I'm passionate about leveraging cutting-edge technologies to solve real-world
                  challenges and drive organizational growth through data-driven strategies.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Core Competencies</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700">Advanced Statistical Analysis & Predictive Modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700">Business Intelligence & Data Visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700">Machine Learning & Deep Learning Implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700">Database Management & ETL Processes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700">Strategic Business Consulting & Reporting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-20 animate-on-scroll">
              <h3 className="text-3xl font-bold mb-12 text-center tracking-wide">TECHNICAL EXPERTISE</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-professional">
                <Card className="bg-white border-slate-200 professional-card-hover shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-blue-600 font-bold mb-4 text-lg">Programming</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Python (Advanced)</li>
                      <li>• SQL (Advanced)</li>
                      <li>• R (Intermediate)</li>
                      <li>• Java (Intermediate)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200 professional-card-hover shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="text-emerald-600 font-bold mb-4 text-lg">Analytics & ML</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Pandas, NumPy</li>
                      <li>• Scikit-learn</li>
                      <li>• TensorFlow, Keras</li>
                      <li>• Statistical Modeling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200 professional-card-hover shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-blue-600 font-bold mb-4 text-lg">Visualization</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Power BI (Expert)</li>
                      <li>• Tableau</li>
                      <li>• Matplotlib, Seaborn</li>
                      <li>• Plotly, D3.js</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200 professional-card-hover shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="text-emerald-600 font-bold mb-4 text-lg">Platforms</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Google Cloud Platform</li>
                      <li>• Microsoft Azure</li>
                      <li>• AWS Services</li>
                      <li>• Jupyter, Git</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div className="mb-20 animate-on-scroll">
              <h3 className="text-3xl font-bold mb-12 text-center tracking-wide">EDUCATION</h3>
              <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-slate-200 professional-card-hover shadow-lg">
                <CardContent className="p-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-blue-600 mb-3">
                        Bachelor of Technology in Artificial Intelligence and Data Science
                      </h4>
                      <p className="text-xl text-slate-700 mb-3">K L University, Vijayawada</p>
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Calendar className="h-4 w-4" />
                          2021 - 2025
                        </span>
                        <span className="font-bold text-blue-600 text-xl bg-blue-100 px-4 py-2 rounded-lg">
                          CGPA: 9.37/10
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold mb-12 text-center tracking-wide">PROFESSIONAL CERTIFICATIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-professional">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-6 text-center justify-center bg-white text-slate-700 border border-slate-200 professional-card-hover shadow-md text-sm"
                  >
                    <Award className="h-4 w-4 mr-2 text-blue-600" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 text-slate-800 relative bg-slate-50 professional-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide animate-on-scroll">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-12">
              <Card className="bg-white border-slate-200 professional-card-hover animate-on-scroll shadow-lg">
                <CardContent className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">Data Analyst Intern</h3>
                      <p className="text-xl text-slate-700 mb-3">Absolin Software Solutions</p>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>May 2023 - August 2023</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          Developed comprehensive Power BI dashboards for business analytics
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          Built image segmentation models using computer vision
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-4">Achievements</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          Automated data preprocessing workflows
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          Collaborated on cross-functional business solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 professional-card-hover animate-on-scroll shadow-lg">
                <CardContent className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-600 mb-2">Data Science Intern</h3>
                      <p className="text-xl text-slate-700 mb-3">Bharat Intern (Virtual)</p>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>June 2023 - July 2023</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          Built high-accuracy ML classification models
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          Performed comprehensive exploratory data analysis
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-4">Achievements</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          Developed end-to-end ML pipelines
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          Created stakeholder presentation materials
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 text-slate-800 relative bg-white professional-grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide animate-on-scroll">
              FEATURED PROJECTS
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-slate-200 professional-card-hover animate-on-scroll shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-600 tracking-wide">{project.title}</h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Technology Stack
                      </span>
                      <p className="text-slate-700 mt-1">{project.tech}</p>
                    </div>

                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide professional-hover"
                      onClick={handleGitHubClick}
                    >
                      <ChevronRight className="mr-2 h-4 w-4" />
                      VIEW PROJECT
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-slate-800 relative bg-slate-50 professional-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-wide animate-on-scroll">
              GET IN TOUCH
            </h2>

            <p className="text-xl text-center mb-16 text-slate-600 animate-on-scroll">
              Let's discuss how data-driven insights can transform your business
            </p>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-8 text-blue-600">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm professional-hover">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-lg text-slate-700">India (Open for Relocation)</span>
                  </div>

                  <button
                    onClick={handleEmailClick}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm professional-hover w-full text-left"
                  >
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-lg text-slate-700">saradhisaragadam761@gmail.com</span>
                  </button>

                  <button
                    onClick={handleLinkedInClick}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm professional-hover w-full text-left"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <span className="text-lg text-slate-700">LinkedIn Profile</span>
                  </button>

                  <button
                    onClick={handleGitHubClick}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm professional-hover w-full text-left"
                  >
                    <Github className="h-6 w-6 text-blue-600" />
                    <span className="text-lg text-slate-700">GitHub Portfolio</span>
                  </button>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="text-lg text-slate-700">+91 8185957761</span>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <Card className="bg-white border-slate-200 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-blue-600">Send a Message</h3>
                    <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Name *</label>
                          <Input
                            name="user_name"
                            required
                            className="bg-slate-50 border-slate-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Email *</label>
                          <Input
                            name="user_email"
                            type="email"
                            required
                            className="bg-slate-50 border-slate-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-700">Subject *</label>
                        <Input
                          name="subject"
                          required
                          className="bg-slate-50 border-slate-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-700">Message *</label>
                        <Textarea
                          name="message"
                          required
                          className="bg-slate-50 border-slate-300 text-slate-800 min-h-[120px] focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Tell me about your data project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide professional-hover"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            SENDING MESSAGE...
                          </>
                        ) : (
                          <>
                            <ChevronRight className="mr-2 h-5 w-5" />
                            SEND MESSAGE
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-slate-300 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in-professional">
            <p className="mb-4 md:mb-0">&copy; 2024 S. Gaya Saradhi Balaram. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={handleLinkedInClick}
                className="text-slate-400 hover:text-blue-400 transition-all duration-300 professional-hover"
              >
                <Linkedin className="h-6 w-6" />
              </button>
              <button
                onClick={handleGitHubClick}
                className="text-slate-400 hover:text-blue-400 transition-all duration-300 professional-hover"
              >
                <Github className="h-6 w-6" />
              </button>
              <button
                onClick={handleEmailClick}
                className="text-slate-400 hover:text-blue-400 transition-all duration-300 professional-hover"
              >
                <Mail className="h-6 w-6" />
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
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-50 professional-hover animate-scale-in-professional"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
