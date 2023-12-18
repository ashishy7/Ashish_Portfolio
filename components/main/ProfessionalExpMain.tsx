import React from 'react'
import ProfessionalExpCard from '../sub/ProfessionalExpCard'
ProfessionalExpCard


export default function ProfessionalExpMain() {
  return (

    <div
    className="flex flex-col items-center justify-center py-20"
    id="projects"
    >
   
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
    PROFESSIONAL EXPERIENCE
    </h1>
    
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProfessionalExpCard
        title="Application Development Analyst"
        description={
            <>
               ● Designed and developed Java large-scale, distributed applications, services, and features that had a direct impact on the core business, leading to an increase of seller enrollments by 100k+ across 4 marketplaces.
              <br />
              ● Optimized flows with React reusable components, eliminating 70% of legacy code reusability.
              <br />
              ● Boosted web app performance by Redux for state management, reducing page load time from 5 to 2sec.
              <br />
              ● Delivered advanced reporting and product ranking solutions, driving a 40% client business growth.
              <br />
              ● Enhanced web accessibility from 60% to 82% through robust solutions.
              <br />
              ● Successfully led a esteemed team of 3 individuals in the migration of physical to cloud-based servers.
              <br />
              ● Reviewed code/designs, resolved 20+ production-level issues, and followed Agile methodology.
              <br />
              ● Integrated 10 vanilla JavaScript flow jobs within the ML platform, achieving a remarkable 90% increase in product query responses.
            </>
          }
      />
      <ProfessionalExpCard
        title="Associate Software Engineer"
        description={
            <>
              ● Created 8 streamlined Jenkins jobs for CI/CD processes, resulting in a remarkable 3-hour time reduction per release.
              <br />
              ● Built frontend using react.js for data ingestion process supporting data from SQL database, XML, and CSV files.
              <br />
              ● Achieved 80% test coverage using Enzyme and Jest for application tests, following Test-Driven Development (TDD).
              <br />
              ● Support Lead overlooking SDLC for new features and issues resolution together with strategy development for issue resolution and weekly status reporting to the customer. Performed deployment planning and release documentation.
              <br />
              ● Optimized production job deployment by developing a high-impact script, reducing time by 30% for deployment.
              <br />
              ● Revitalized software development, transitioning search apps to monolithic codebases, resolving 50%+ environmental issues, and creating dynamic React web components for improved UI.
            </>
          }
      />
      </div>
      </div>
  )
}
