import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Camera, Video, Palette } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex items-center justify-end space-x-8">
            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            <li><a href="#interests" className="text-gray-300 hover:text-white">Interests</a></li>
            <li><a href="#featured" className="text-gray-300 hover:text-white">Featured</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-5xl font-bold text-white mb-4">NISCHAL R E</h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Innovative problem solver with a passion for leveraging emerging technologies to tackle real-world challenges efficiently. Focused on building scalable, impactful solutions with expertise in machine learning, AI, and programming.
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/nischal2805" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center text-gray-300 hover:text-white">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nischal-r-e-035114279/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <button className="flex items-center glass-card px-4 py-2 rounded-lg text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4 text-white">Programming Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4 text-white">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-300">
                <li>NLP</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Gen AI</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4 text-white">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Docker</li>
                <li>Kubernetes (Basic)</li>
                <li>Data Analysis</li>
                <li>Statistical Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Interests Section */}
      <section id="interests" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Creative Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Camera className="w-6 h-6 mr-3 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Photography</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Passionate about capturing moments through the lens. Specialized in landscape and street photography. Proficient with professional camera equipment and post-processing tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">Lightroom</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Photoshop</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Composition</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Video className="w-6 h-6 mr-3 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Videography</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Creating compelling visual stories through video. Experience in shooting and editing dynamic content with attention to detail and narrative flow.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">DaVinci Resolve</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Color Grading</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Motion</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 mr-3 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Content Creation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Combining technical skills with creative vision to produce engaging multimedia content. Focus on storytelling and visual aesthetics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">Visual Design</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Storytelling</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Editing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">AI-Driven Crime Data Classification</h3>
              <p className="text-gray-300 mb-4">
                Developed a custom BERT-based model for classifying crime data into 4 major categories and 57 subcategories. Achieved significant accuracy using multilingual NLP approach.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 glass text-sm rounded-full">NLP</span>
                <span className="px-3 py-1 glass text-sm rounded-full">BERT</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Alzheimer's Disease Early Detection</h3>
              <p className="text-gray-300 mb-4">
                Deep learning-based diagnostic tool using MRI scans and cognitive assessment data. Leverages CNN architectures to identify structural brain abnormalities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">TensorFlow</span>
                <span className="px-3 py-1 glass text-sm rounded-full">CNN</span>
                <span className="px-3 py-1 glass text-sm rounded-full">OpenCV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Financial AI Assistant</h3>
              <p className="text-gray-300 mb-4">
                AI-driven financial assistant analyzing spending habits and emotional triggers for better financial management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">Python</span>
                <span className="px-3 py-1 glass text-sm rounded-full">NLP</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Gen AI</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Crop Yield Detection</h3>
              <p className="text-gray-300 mb-4">
                ML model analyzing environmental and agricultural data for predicting crop yield and recommending farming strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">TensorFlow</span>
                <span className="px-3 py-1 glass text-sm rounded-full">OpenCV</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Scikit-Learn</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Flight Part Simulator</h3>
              <p className="text-gray-300 mb-4">
                Simulation for Pitot Tube Static System with threshold failure detection and alert system implementation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass text-sm rounded-full">Solidworks</span>
                <span className="px-3 py-1 glass text-sm rounded-full">Python</span>
                <span className="px-3 py-1 glass text-sm rounded-full">MATLAB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col space-y-4">
              <a href="mailto:nischalrellur2805@outlook.com" 
                 className="flex items-center text-gray-300 hover:text-white">
                <Mail className="w-5 h-5 mr-3" />
                nischalrellur2805@outlook.com
              </a>
              <a href="mailto:nischalre.cs23@rvce.edu.in" 
                 className="flex items-center text-gray-300 hover:text-white">
                <Mail className="w-5 h-5 mr-3" />
                nischalre.cs23@rvce.edu.in
              </a>
              <a href="tel:9148890326" 
                 className="flex items-center text-gray-300 hover:text-white">
                <Phone className="w-5 h-5 mr-3" />
                9148890326
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;