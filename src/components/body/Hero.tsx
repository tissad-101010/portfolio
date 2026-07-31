'use client'

import Image from 'next/image'
import { fullName, profile, withBasePath } from '@/src/lib/portfolioData'

function downloadFile(url: string, filename: string) {
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}


export default function Hero() {
	return (
		<section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="flex flex-col md:flex-row items-center gap-12">
				
				{/* Profile image */}
				<div className="w-full md:w-auto flex-shrink-0">
					<div>
						<Image className="relative bg-gradient-to-br rounded-xl shadow-lg"
									src={withBasePath(profile.profileImage)} alt={fullName} width={250} height={250} priority />
					</div>
				</div>
				{/* About me text */}
				<div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 dark:text-gray-300">
						{profile.introduction}
          </p>
					{/* Download CV button */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg 
							hover:bg-blue-700 transition-colors shadow-md focus:outline-none 
							focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
							dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-300"
							onClick={() => downloadFile(withBasePath(profile.resume.url), profile.resume.filename)}>
							
              Download CV
            </button>
          </div>
        </div>
				
			</div>
		</section>
	)
}

  
