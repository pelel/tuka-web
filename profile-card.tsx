"use client"

import { Linkedin, Github, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <Card className="w-full max-w-xl overflow-hidden rounded-xl shadow-2xl">
        <div className="bg-gradient-to-br from-teal-700 to-teal-500 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-6">
              <h1 className="text-3xl font-bold mb-1">John Smith</h1>
              <p className="text-lg mb-4">Web Developer</p>
              <p className="text-sm leading-relaxed">
                Hi there! I'm John, a seasoned web developer passionate about crafting clean and dynamic websites. With
                5 years of experience, I specialize in front-end and back-end development using HTML, CSS, JavaScript,
                and frameworks like React and Angular. I thrive on creating user-centric designs and optimizing
                performance for seamless browsing experiences. Let's collaborate TOGETHER!
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-400">
                <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a href="#" className="hover:text-teal-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-teal-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-teal-200 transition-colors">
              <FileText size={24} />
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
