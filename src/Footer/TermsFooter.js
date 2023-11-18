import React from "react";
import "./TermsFooter.css";

function TermsFooter() {
  return (
    <div className="terms-footer-container">
      <div className="terms-footer">
        <div className="tagline">
          <p style={{ whiteSpace: "nowrap" }}>
            {/*Check your products for purity. Throw those faulty & fake
            products. Find out the reality of those "organic" products.*/}
            Helping you become your best version
          </p>
        </div>
        <br />
        <div className="links-row">
          <div className="column">
            <span className="column-title">Get to know us</span>
            <a href="/about" target="_blank" rel="noreferrer">
              About</a>
            <br />
            <a href="/grading-method" target="_blank" rel="noreferrer">
              How we recommend products</a>
            <br />
            <a href="/privacy" target="_blank" rel="noreferrer">
              Privacy</a>
            <br />
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms & Conditions</a>
            <br />
          </div>
          
          <div className="column">
            <span className="column-title">Contact Us</span>
            <a href="https://www.instagram.com/skineasy.ai/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <br />
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <br />
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              Youtube
            </a>
            <br />
            <a href="mailto:consult@toxicfree.com" target="_blank" rel="noreferrer">
              consult@levelup.com
            </a>
            <br />
          </div>

          <div className="column">
            <span className="column-title">Links</span>
            <a href="/api-ref" target="_blank" rel="noreferrer">
              API</a>
            <br />
            <a href="/business" target="_blank" rel="noreferrer">
              Business</a>
            <br />
            <a href="/sitemap" target="_blank" rel="noreferrer">
              Sitemap</a>
            <br />
            <a href="/blog" target="_blank" rel="noreferrer">
              Blog</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsFooter;
