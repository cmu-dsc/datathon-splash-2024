'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Calendar, MapPin, Users, Zap } from "lucide-react"
import Image from 'next/image'

const BASE_URL = "https://datathon-splash.netlify.app/"

export function SplashPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="container mx-auto px-4 pt-2 pb-4 -mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <h1 className="text-2xl font-bold text-green-800 order-2 md:order-1">AI Sustainability Datathon</h1>
          <div className="flex items-center space-x-8 order-1 md:order-2">
            <Image src={`${BASE_URL}/img/DSClogo.png`} alt="DSC Logo" width={96} height={96} className="object-contain" unoptimized />
            <Image src={`${BASE_URL}/img/suds_logo_final.svg`} alt="SUDS Logo" width={96} height={96} className="object-contain" unoptimized />
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="24" viewBox="0 0 112 24" fill="none" className="w-28 h-6 min-w-[112px]">
              <g clipPath="url(#clip0_267_14010)">
                <path d="M23.9846 12L10.5723 17.1473L0 21.2064L6.77942 12L0 2.79358L10.5723 6.85274L23.9846 12Z" fill="#2D9BAD"></path>
                <path d="M27.6656 0H45.0444C51.7466 0 53.4135 2.92476 53.4135 5.53698V5.88424C53.4135 8.81286 50.863 10.5839 49.1035 10.8077C51.7466 11.1859 54.5788 13.146 54.5788 16.8887V17.236C54.5788 20.4116 52.6572 24 45.137 24H27.6617V0H27.6656ZM35.0315 4.93891V9.06367H43.2193C45.1717 9.06367 45.7698 8.11833 45.7698 7.01479C45.7698 5.88424 45.1408 4.93505 43.2193 4.93505H35.0315V4.93891ZM35.0315 13.9486V18.4669H43.7209C46.0167 18.4669 46.6495 17.3055 46.6495 16.1055V16.0862C46.6495 14.9248 46.0206 13.9486 43.7209 13.9486H35.0315Z" fill="#00243D"></path>
                <path d="M65.6566 0L75.5306 13.4045V0H82.8965V24H74.2225L64.4798 10.773V24H57.1216V0H65.6605H65.6566Z" fill="#00243D"></path>
                <path d="M93.1485 14.0103L82.8308 0H91.9408L97.1151 7.02637L102.289 0H111.399L101.082 14.0103V24H93.1485V14.0103Z" fill="#00243D"></path>
              </g>
              <defs>
                <clipPath id="clip0_267_14010">
                  <rect width="112" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 -mt-4">
        <section className="text-center mb-16">
          <div className="mb-8 relative">
            <Image
              src={`${BASE_URL}/img/globe.png`}
              alt="Cute AI and nature illustration"
              width={256}
              height={256}
              className="mx-auto object-cover rounded-full shadow-lg"
              unoptimized
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Powering a Sustainable AI Future</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in exploring the environmental impact of AI in finance.<br></br>
            Organized by CMU Data Science Club + Students Using Data for Social Good. <br></br> Sponsored by BNY Mellon.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              <span>November 9 - 16</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              <span>Giant Eagle Auditorium</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              <span>Teams up to 4</span>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://forms.gle/prVpCiV1VF8NoCM79" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
              Register Now
            </a>
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Challenge Topic</h3>
            <p className="text-gray-600">
              Analyze the environmental footprint and resource consumption of AI technologies in the financial industry. 
              Create innovative strategies to enhance the sustainability and eco-friendliness of AI applications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Who Can Participate?</h3>
            <p className="text-gray-600">
              This hackathon is exclusively for CMU students. Both graduate students and undergraduate students are eligible. Form teams of up to 4 members.
            </p>
          </div>
        </section>
        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Prizes and Perks</h3>
          <div className="bg-white/50 backdrop-blur-sm border border-green-200 rounded-lg p-6 inline-block">
            <p className="text-5xl font-bold text-green-600 mb-2">$2,000</p>
            <p className="text-xl text-gray-600">Cash Prize</p>
          </div>
          <p className="mt-4 text-gray-600">Plus, free food and t-shirts for all participants!</p>
        </section>
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Judging Criteria</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Exploration", desc: "Uncover novel datasets and provide insightful analysis." },
              { title: "Modeling", desc: "Develop advanced models to find meaningful data relationships." },
              { title: "Impact", desc: "Propose actionable and impactful policies." },
            ].map((criterion, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm border-green-200">
                <CardContent className="p-6">
                  <BadgeCheck className="w-12 h-12 text-green-600 mb-4" />
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{criterion.title}</h4>
                  <p className="text-gray-600">{criterion.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Submission Materials</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/50 backdrop-blur-sm border-green-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-2">Code Submission</h4>
                <div className="text-gray-600">
                  <p>Submit your project code as either:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Python Jupyter Notebook (.ipynb)</li>
                    <li>R Markdown file (.rmd)</li>
                  </ul>
                  <p className="mt-2">Ensure your code is well-documented and reproducible.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-green-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-2">Video Presentation</h4>
                <div className="text-gray-600">
                  <p>Create a video presentation of your project:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Duration: 5-10 minutes</li>
                    <li>Explain your approach, findings, and impact</li>
                    <li>Be creative and engaging!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Ready to make AI more sustainable? Join us for an exciting week of data science!</p>
          <Button variant="outline" className="bg-white text-green-800 hover:bg-green-100">
            <a href="https://forms.gle/prVpCiV1VF8NoCM79" target="_blank" rel="noopener noreferrer" className="text-green-800 no-underline">
              Register Now
            </a>
          </Button>
        </div>
      </footer>
    </div>
  )
}