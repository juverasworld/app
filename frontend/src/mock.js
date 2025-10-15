// Mock data for AI Content Creator

export const mockKeywords = [
  "React",
  "Next.js",
  "TypeScript",
  "UI Design",
  "Frontend Career",
  "CSS Tricks",
  "Portfolio Building",
  "Developer Mindset",
  "Web Performance",
  "Design Systems"
];

export const mockPosts = [
  {
    id: "1",
    keyword: "React",
    title: "This one React mistake cost me 3 days of debugging 😭",
    linkedinPost: "Last week, I spent 3 days debugging a React app that kept crashing randomly. The culprit? A seemingly innocent useEffect hook.\n\nI was fetching data inside useEffect without proper cleanup. Every time the component re-rendered, a new API call fired. Within minutes, I had hundreds of pending requests, memory leaks, and a frozen browser.\n\nThe fix? One line: a cleanup function.\n\nLesson learned: Always clean up your side effects. Return a cleanup function in useEffect, especially when dealing with subscriptions, timers, or API calls.\n\nThis small habit has saved me countless hours since. Don't let React's flexibility fool you — discipline in your hooks will make or break your app's stability.",
    xPost: "Spent 3 days debugging a React app 😭\n\nThe problem? useEffect without cleanup.\n\nResult: Memory leaks, frozen browser, hundreds of API calls.\n\nThe fix? One cleanup function.\n\nAlways return cleanup in useEffect. Your future self will thank you. 🧹\n\n#ReactJS #WebDev",
    hashtags: "#ReactJS #FrontendDev #WebDevelopment #JavaScript",
    scheduledTime: "6:00 AM",
    scheduledDate: "2025-07-15",
    status: "scheduled",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    createdAt: "2025-07-14T10:30:00Z"
  },
  {
    id: "2",
    keyword: "Frontend Career",
    title: "This is one client-attracting advice no one will tell you for free…",
    linkedinPost: "Want to know the secret to attracting high-paying clients as a frontend developer?\n\nIt's not about being the best coder. It's about being the best communicator.\n\nI learned this the hard way. For years, I focused solely on technical skills — mastering React, perfecting my CSS, learning the latest frameworks. But clients kept choosing developers with half my skills.\n\nWhy? Because they could explain things clearly. They understood business goals, not just code.\n\nNow, I spend as much time learning how to present my work as I do building it. I create case studies, explain ROI, and speak in outcomes, not features.\n\nResult? My client rate tripled in 6 months.\n\nTechnical skills get you in the door. Communication skills get you the contract.",
    xPost: "Secret to attracting clients as a frontend dev?\n\nIt's not about being the best coder.\nIt's about being the best communicator. 🗣️\n\nTechnical skills → get you noticed\nCommunication skills → get you hired\n\nLearn to speak business, not just code.\n\n#FrontendDev #FreelanceTips",
    hashtags: "#FrontendCareer #WebDevelopment #FreelanceDev #TechCareer",
    scheduledTime: "5:00 PM",
    scheduledDate: "2025-07-15",
    status: "scheduled",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    createdAt: "2025-07-14T14:00:00Z"
  },
  {
    id: "3",
    keyword: "CSS Tricks",
    title: "I discovered this CSS trick and everything clicked 💡",
    linkedinPost: "For years, I wrestled with CSS layouts. Flexbox, Grid, positioning — nothing felt intuitive.\n\nThen I discovered the 'gap' property, and everything changed.\n\nBefore 'gap', I was using margins everywhere. My code was messy, calculations were off, and responsive design was a nightmare.\n\nWith 'gap', spacing became effortless:\n• Works with Flexbox AND Grid\n• No margin collapsing issues\n• Clean, readable code\n• Perfect responsive behavior\n\nOne property, infinite possibilities.\n\nSometimes the simplest solutions are the most powerful. Don't overcomplicate your CSS — learn the modern properties that make your life easier.",
    xPost: "CSS tip that changed everything for me: the 'gap' property 💡\n\nBefore: Messy margins everywhere\nAfter: Clean, effortless spacing\n\nWorks with Flexbox AND Grid.\nNo more margin collapsing headaches.\n\nModern CSS is beautiful.\n\n#CSS #WebDev #FrontendTips",
    hashtags: "#CSS #WebDevelopment #FrontendDev #CodingTips",
    scheduledTime: "6:00 AM",
    scheduledDate: "2025-07-16",
    status: "draft",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    createdAt: "2025-07-14T16:20:00Z"
  }
];

export const mockStats = {
  totalPosts: 127,
  scheduledPosts: 8,
  draftPosts: 5,
  publishedPosts: 114,
  engagementRate: "24%",
  avgViews: "1,250"
};
