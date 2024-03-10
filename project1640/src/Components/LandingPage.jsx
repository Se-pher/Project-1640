import React from "react";
import Mountain from "../Image/Mountains.jpg";

const LandingPage = () => {
  return (
    <div>
      <header className="landing-header">
        <img
          src={Mountain}
          alt=""
          style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1>Welcome to My Blog</h1>
          <p>Explore the Latest Articles</p>
          <button>Explore</button>
        </div>
      </header>
      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
      </section>
      <section>
        <h2>Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
      <footer>
        <p>&copy; 2024 Our Company</p>
      </footer>
    </div>
  );
};

export default LandingPage;
