/* ------------------------------------------------------------------
   Everything on the site is rendered from this one object.
   Edit text, links and experience here. Nothing else needs to change.
   Leave a link as "" to hide it.
------------------------------------------------------------------- */
const PORTFOLIO = {
  name: "Sudharshan S",
  title: "Software Tester | QA Automation Engineer",
  pageTitle: "Sudharshan S | Software Testing & QA Automation (Freelance)",
  location: "Coimbatore, Tamil Nadu, India",
  // Final public URL of the site, with trailing slash. Used for canonical, sitemap and link previews.
  // Change this if you publish somewhere other than GitHub Pages user site.
  siteUrl: "https://sudharshan29.github.io/",
  roleLine: "Freelance Software Tester & QA Automation Engineer in Coimbatore, India",
  description: "Freelance software tester and QA automation engineer in Coimbatore, India. Playwright, Selenium, Appium, API and AI product testing for web and mobile teams.",
  email: "sudharshann2003@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sudharshan-s-475564202",
    github: "https://github.com/sudharshan29",
    booking: "", // e.g. a Calendly link
    upwork: "",
    fiverr: "",
    freelancer: ""
  },
  // Leave empty to hide the resume button. Only add a PDF without a phone number if the site is public.
  resume: "",
  availability: "Available for freelance software testing projects: automation, API testing, manual testing and AI product testing. Remote, working with teams in India and abroad.",
  enquirySubject: "Project enquiry",

  // Freelance basics shown in the Contact section. Leave empty to hide.
  // Example: [{ label: "Response time", value: "Within 24 hours" }]
  engagement: [],

  headline: "Software testing your team can trust.",
  heroTag: "Available for freelance software testing",
  intro: "3+ years of testing across web, mobile and APIs. I build Playwright and Selenium frameworks, validate APIs and test AI-driven products for retail and e-commerce teams.",

  about: [
    "I am a software test engineer covering manual and automated testing. I currently work at Fabrainz on an AI-driven retail SaaS platform across web, Android and iOS, where I also test the AI-driven workflows for response accuracy, boundary conditions and edge cases. Before that, I spent two years at Tata Consultancy Services automating regression for an enterprise e-commerce platform.",
    "I treat automation as a way to shorten feedback loops, not as a goal in itself. I get involved early in sprint planning and design discussions so defects are found before regression, and I keep frameworks maintainable with the Page Object Model, data-driven tests and parallel execution."
  ],

  services: [
    { title: "Playwright automation framework", text: "A maintainable framework built from scratch: project structure, Page Object Model, parallel execution and reporting, with documentation for your team.", stack: ["Playwright", "JavaScript", "Allure"] },
    { title: "Selenium (Java) automation", text: "Automation suites with Selenium WebDriver, TestNG or JUnit and Cucumber (BDD) scenarios that stakeholders can read.", stack: ["Selenium", "Java", "TestNG", "Cucumber"] },
    { title: "API testing", text: "Postman collections that verify payload schemas, status codes and authentication flows for REST and microservice endpoints.", stack: ["Postman", "REST APIs", "JSON"] },
    { title: "Mobile test automation", text: "Android and iOS automation with Appium to check UI behaviour and consistency across devices.", stack: ["Appium", "Android", "iOS"] },
    { title: "AI product testing", text: "Structured scenarios for AI-driven features, covering response accuracy, boundary conditions and edge-case handling.", stack: ["Test design", "Exploratory", "Edge cases"] },
    { title: "Manual and regression testing", text: "Test plans, smoke, sanity and regression cycles, and defect reports with steps and root cause, tracked to closure.", stack: ["Manual testing", "JIRA", "STLC"] },
    { title: "CI integration", text: "Running your suites automatically on every change, so a failed check reaches the team early.", stack: ["Jenkins", "GitHub Actions", "Git"] }
  ],

  process: [
    { label: "01", title: "Scope", text: "We agree what the product does, where the risk is, and what to test or automate first." },
    { label: "02", title: "Plan", text: "A short test strategy and the deliverables, agreed before work starts." },
    { label: "03", title: "Build", text: "Testing and automation delivered in small steps, with regular updates." },
    { label: "04", title: "Hand over", text: "Reports, documentation and a walkthrough so your team can run it without me." }
  ],

  approach: [
    { label: "01", title: "Shift left", text: "Review requirements and designs with developers so defects surface before code is written." },
    { label: "02", title: "Maintainable by design", text: "Page Object Model, reusable components and clear naming so new team members can contribute quickly." },
    { label: "03", title: "Fast feedback", text: "Parallelised suites and CI integration so a failed check reaches the team while the change is still fresh." },
    { label: "04", title: "Evidence over opinion", text: "Defects reported with steps, root cause and retest results, tracked to closure." }
  ],

  skills: {
    core: ["Playwright (JavaScript)", "Selenium WebDriver (Java)", "Appium", "API Testing", "Postman", "Java", "JavaScript"],
    also: [
      { group: "Frameworks and design", items: ["Page Object Model", "Cucumber (BDD)", "Gherkin", "TestNG", "JUnit", "Data-driven testing"] },
      { group: "API and data", items: ["REST APIs", "JSON", "Contract testing", "SQL", "Database validation"] },
      { group: "CI/CD and DevOps", items: ["CI/CD", "Jenkins", "GitHub Actions", "Git", "GitHub", "Maven", "Docker"] },
      { group: "Reporting and tracking", items: ["Allure Reports", "JIRA", "ClickUp", "Zoho Sprints"] },
      { group: "Product and domain", items: ["AI product testing", "Business flow testing", "Requirements analysis", "Acceptance criteria validation", "Retail and e-commerce"] },
      { group: "Testing types", items: ["Functional", "Regression", "Integration", "Smoke and sanity", "End-to-end", "UI", "Cross-browser", "Mobile", "Manual testing", "Exploratory"] },
      { group: "Process", items: ["Agile", "Scrum", "SDLC", "STLC", "Shift-left testing", "Test planning"] }
    ]
  },

  experience: [
    {
      role: "Software Test Engineer",
      company: "Fabrainz",
      place: "Coimbatore, India",
      period: "Aug 2025 to Present",
      summary: "Software testing and automation for an AI-driven retail and e-commerce SaaS platform (web, Android, iOS) built on microservices and REST APIs.",
      points: [
        "Built a Playwright automation framework from scratch and ran suites in parallel, reducing regression execution time by about 40% and manual testing effort by 50%.",
        "Automated Android and iOS tests with Appium to check UI consistency across devices.",
        "Validated microservices and REST endpoints with Postman: payload schemas, status codes and authentication flows.",
        "Designed test scenarios for AI-driven workflows covering response accuracy, boundary conditions and edge cases.",
        "Practised shift-left testing with developers during design, and managed test plans and defect lifecycles in ClickUp and Zoho Sprints.",
        "Mentored junior QA engineers on Playwright standards and framework design, raising team automation coverage by 35%."
      ],
      stack: ["Playwright", "Appium", "Postman", "REST APIs", "AI Product Testing", "ClickUp", "Zoho Sprints", "Agile", "Scrum"]
    },
    {
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      place: "Chennai, India",
      period: "Jul 2023 to Jul 2025",
      summary: "Quality engineering for an enterprise retail and e-commerce platform with quarterly releases.",
      points: [
        "Developed and maintained Selenium WebDriver (Java) scripts, cutting manual regression time by 30% across quarterly releases.",
        "Wrote BDD scenarios in Cucumber (Gherkin) so business stakeholders could review test coverage.",
        "Implemented the Page Object Model to improve reuse, maintainability and onboarding.",
        "Executed smoke, sanity, regression and integration cycles and maintained STLC documentation.",
        "Reported 150+ defects in JIRA with root-cause analysis and retesting through closure."
      ],
      stack: ["Selenium WebDriver", "Java", "Cucumber", "POM", "JIRA", "Business Flow Testing", "Agile", "STLC"]
    }
  ],

  projects: [
    {
      name: "Playwright demo framework",
      context: "Personal project · Public demo targets · No client code",
      label: "Personal",
      problem: "Client work is confidential, so there was nothing public to show how I structure automation.",
      approach: "Built a Playwright (JavaScript) framework with the Page Object Model, fixtures for a logged-in state, separated test data, and UI tests on a demo shop plus API tests on a public REST API. Tests run in parallel and keep trace, screenshot and video on failure. A GitHub Actions workflow is included.",
      outcome: "18 tests (14 UI, 4 API) pass locally and in GitHub Actions, and stayed stable across repeated local runs. A deliberately broken assertion made a test fail, confirming the checks are real.",
      stack: ["Playwright", "JavaScript", "POM", "API testing", "GitHub Actions"],
      link: "https://github.com/sudharshan29/playwright-demo-framework"
    }
    // Add more public work here. The Projects section stays hidden while this list is empty.
  ],

  education: { degree: "Bachelors", school: "Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore", period: "2020 to 2023" }
};
