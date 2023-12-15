import React from 'react';
import '../css/Blog.css';
const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Exploring the Benefits of Mindfulness',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      link: '#', // Replace with the link to the blog post
    },
    {
      id: 2,
      title: 'Healthy Recipes for a Balanced Diet',
      image: 'https://via.placeholder.com/400x250', // Replace with actual image URL
      link: '#', // Replace with the link to the blog post
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Featured Blog Posts</h2>
      <div className="featured-posts">
        {featuredPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-title">{post.title}</h3>
            <a href={post.link} className="cta-button">
              Read More
            </a>
          </div>
        ))}
      </div>
      <a href="#blog" className="cta-button explore-button">
        Explore More Articles
      </a>
    </section>
  );
};

export default Blog;
