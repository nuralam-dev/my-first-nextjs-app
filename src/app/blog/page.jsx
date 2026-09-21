import Post from "../components/Post";
const blogsData = [
  {
    id: 1,
    title: "Modern Web Development Trends",
    targetAudience: "Frontend & Full-Stack Developers, Tech Enthusiasts",
    topics: [
      "Server-side rendering vs. client-side hydration",
      "The growth of TypeScript",
      "AI-assisted coding tools",
    ],
    excerpt:
      "Modern web development has shifted dramatically toward developer velocity and type safety. With tools like TypeScript catching runtime errors early in development and modern frameworks optimizing how code is delivered to the browser, building scalable web applications is faster and more reliable than ever.",
  },
  {
    id: 2,
    title: "Getting Started with Modern JavaScript & TypeScript",
    targetAudience: "Beginner to Intermediate Web Developers",
    topics: [
      "Fundamentals of JavaScript ES6+",
      "Transition to static typing with TypeScript",
      "Core OOP principles",
    ],
    excerpt:
      "Transitioning from vanilla JavaScript to TypeScript can feel like adding a safety net to your daily workflow. By explicitly defining types, interfaces, and expected data structures, developers can eliminate entire classes of bugs before their code ever touches production.",
  },
  {
    id: 3,
    title: "Effective Strategies for Technical Interview Preparation",
    targetAudience: "Computer Science Students, Job Seekers, Career Switchers",
    topics: [
      "Problem-solving patterns",
      "Logic and IQ evaluations",
      "System design fundamentals",
      "Behavioral presentation",
    ],
    excerpt:
      "Aceing a technical interview isn't just about memorizing algorithms; it’s about demonstrating structured problem-solving under pressure. Taking time to break down complex logic, articulate edge cases clearly, and present your ideas confidently can distinguish you from other candidates.",
  },
  {
    id: 4,
    title: "How to Balance Intensive Bootcamps with Academic Exams",
    targetAudience:
      "Students balancing professional skill development alongside formal university studies",
    topics: [
      "Time-blocking techniques",
      "Managing milestone stress",
      "Leveraging support systems",
      "Prioritizing goals",
    ],
    excerpt:
      "Balancing university exams alongside rigorous software engineering bootcamps requires strategic time management. Utilizing structured support mechanisms, setting daily study milestones, and maintaining clear communication with mentors ensures long-term momentum without burnout.",
  },
  {
    id: 5,
    title: "Building Your Personal Developer Brand",
    targetAudience: "Early-career software engineers and freelancers",
    topics: [
      "Portfolios",
      "GitHub hygiene",
      "Submitting video introductions",
      "Building community connections",
    ],
    excerpt:
      "Technical skill gets you to the table, but effective personal branding opens the door. From concise self-introduction videos to active GitHub repositories, showcasing both your technical progress and communication style helps hiring managers see your full potential.",
  },
];
const BlogPage = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 container mx-auto p-1.5">
      {blogsData.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default BlogPage;
