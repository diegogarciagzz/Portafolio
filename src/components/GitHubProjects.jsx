import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/diegogarciagzz/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <motion.section
      id="github-projects"
      className="py-24 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">GitHub Repositories</h2>
      <div className="space-y-6">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="bg-[#112240] p-4 rounded border border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-cyan-400"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-400 text-sm">{repo.description || "No description available."}</p>
            <p className="text-gray-500 text-xs mt-2">Language: {repo.language || "N/A"}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
