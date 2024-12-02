import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/projects.json'; // Import the JSON file

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set posts from the imported JSON file
    setPosts(projects);
  }, []);

  return (
    <div>
      <Header title="Projects" />
      <main className="blog-main p-6">
        <h2 className="blog-title text-2xl mb-4">Latest Projects</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="blog-post border-b pb-4">
              <h3 className="blog-post-title text-xl font-semibold mb-2">{post.name}</h3>
              <p className="blog-post-description text-gray-700 mb-2">{post.description}</p>
              <p className="blog-post-technologies text-sm text-gray-600 mb-2">
                <strong>Technologies:</strong> {post.technologies.join(', ')}
              </p>
              <p className="blog-post-date text-xs text-gray-500 mb-2">
                <strong>Completed:</strong> {new Date(post.date).toLocaleDateString()}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post-link text-blue-500 hover:underline"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;


