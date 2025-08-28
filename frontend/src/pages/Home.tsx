import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* 顶部导航 */}
      <header className="nav">
        <div className="nav__left">
          <div className="logo">Logo</div>
        </div>
        <nav className="nav__links">
          <a href="/">HOME</a>
          <a href="/risk">RISK PROFILE</a>
          <a href="/map">MAP</a>
          <a href="/hub">HUB</a>
          <a href="/resources">RESOURCES</a>
        </nav>
        <button className="nav__menu" aria-label="menu">≡</button>
      </header>

      {/* Hero 区 */}
      <section className="hero">
        <h1>WEATHER, TOGETHER</h1>
        <h2>Know the Climate. Protect What Matters.</h2>
        <p>
          Climate risk analysis, health alerts and tips for every day
          Australians to know the climate and stay safe.
        </p>
      </section>

      {/* 功能卡片 */}
      <section className="cards">
        <article className="card">
          <div className="card__emoji" role="img" aria-label="house">🏠</div>
          <h3>What's Your Home's<br/>Climate Risk?</h3>
          <p>Climate impact analysis for your suburb or address.</p>
          <button className="btn">Check Climate Risk &gt;</button>
        </article>

        <article className="card">
          <div className="card__emoji" role="img" aria-label="magnifier">🔍</div>
          <h3>Know the Risks.<br/>Take Action.</h3>
          <p>Climate-safe tips for homes, individuals and communities.</p>
          <button className="btn">Learn More &gt;</button>
        </article>

        <article className="card">
          <div className="card__emoji" role="img" aria-label="family">👨‍👩‍👧</div>
          <h3>Breathe Easy. Stay<br/>Cool. Stay Safe.</h3>
          <p>Health advice for kids, seniors, and people with conditions.</p>
          <button className="btn">See Health Advice &gt;</button>
        </article>

        <article className="card">
          <div className="card__emoji" role="img" aria-label="seedling">🌱</div>
          <h3>Join Local Climate<br/>Action</h3>
          <p>See what your community is doing and how you can contribute.</p>
          <button className="btn">Join the Action &gt;</button>
        </article>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <p>
          Read more about <a href="#">where our data comes from</a>
        </p>
        <p className="footer__links">
          About this Project | Climate Data Sources | Accessibility Options
        </p>
        <p className="footer__credit">
          Team 31 | The Incredibles<br/>Monash University
        </p>
      </footer>
    </div>
  );
};

export default Home;
