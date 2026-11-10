(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const n="/prime-edge-co/assets/prime-edge-logo.png",d=[{number:"01",eyebrow:"Standard refresh",title:"Make faded numbers readable again.",copy:"We clean up the curb face and repaint the existing house number so it reads clearly from the street.",price:"$10",tag:"Best for a simple repaint"},{number:"02",eyebrow:"Color + custom",title:"Add a little more edge.",copy:"Choose a color or a custom look for the address numbers at the front of your house. Custom work starts at $20.",price:"$20+",tag:"Color or custom curb address"}],p=[["01","Tell us the address","Share the street address painted on your curb and the look you want."],["02","Pick your finish","Keep it crisp and classic, or go colored/custom with a little more personality."],["03","Get a cleaner curb","We paint the front-of-house curb numbers so guests, neighbors, and deliveries can spot them."]],u=["Destin Romero","Angelene Gonzalez","Connor Saye","Rachel Kaltenbach"],h=document.querySelector("#root");h.innerHTML=`
  <div class="site-shell">
    <header class="site-header" id="top">
      <a class="brand-lockup" href="#top" aria-label="Prime Edge Co. home">
        <img src="${n}" alt="Prime Edge Co. logo" />
        <span>CURB ADDRESS PAINTING</span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#service">The service</a>
        <a href="#pricing">Pricing</a>
        <a href="#quote">Request a quote</a>
      </nav>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu <span>+</span></button>
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <a href="#service">The service</a>
        <a href="#pricing">Pricing</a>
        <a href="#quote">Request a quote</a>
      </div>
    </header>

    <main>
      <section class="hero section-dark" aria-labelledby="hero-title">
        <div class="hero-stripe" aria-hidden="true"></div>
        <div class="hero-copy">
          <p class="kicker"><span class="kicker-dot"></span> Local curb address painting</p>
          <h1 id="hero-title">Make your<br /><em>address</em><br />impossible to miss.</h1>
          <p class="hero-intro">Prime Edge Co. refreshes the street numbers painted on the curb in front of your house — so your home stays easy to find from the road.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#quote">Price my curb <span>↗</span></a>
            <a class="text-link" href="#service">See how it works <span>↓</span></a>
          </div>
          <div class="hero-proof" aria-label="Prime Edge Co. service highlights">
            <span><strong>$10</strong> standard repaint</span>
            <span><strong>$20+</strong> colored / custom</span>
          </div>
        </div>
        <div class="hero-art" aria-label="Example of a street-facing curb address">
          <div class="hero-logo-wrap"><img src="${n}" alt="Prime Edge Co." /></div>
          <div class="address-stage">
            <div class="address-shadow"></div>
            <div class="curb-face">
              <span class="curb-label">STREET-FACING ADDRESS</span>
              <span class="curb-number curb-word">YOUR ADDRESS</span>
              <span class="curb-line"></span>
            </div>
            <div class="street-line">FRESH NUMBERS / CLEAN CURB / PRIME EDGE</div>
          </div>
          <span class="art-note note-top">01 / curbside clarity</span>
          <span class="art-note note-bottom">painted where people look</span>
        </div>
      </section>

      <section class="intro-band" id="service" aria-labelledby="service-title">
        <div class="section-label">What we do <span>01</span></div>
        <div class="intro-grid">
          <div>
            <p class="eyebrow">Your house number, sharpened up.</p>
            <h2 id="service-title">The curb is the first sign people see.</h2>
          </div>
          <div class="intro-copy">
            <p>Sun, weather, tires, and time can fade the street address painted on the curb. Prime Edge Co. gives those numbers a clean, visible reset — right at the front of your house.</p>
            <p>It is a small detail that makes a real difference for visitors, deliveries, neighbors, and anyone trying to find you from the road.</p>
          </div>
        </div>
        <div class="service-ribbon" aria-label="Service promise">
          <span>READABLE</span><span>CURBSIDE</span><span>ADDRESS</span><span>DETAIL</span><span>READABLE</span>
        </div>
      </section>

      <section class="services-section section-dark" aria-labelledby="services-title">
        <div class="section-heading-row">
          <div>
            <div class="section-label section-label-light">Choose your edge <span>02</span></div>
            <h2 id="services-title">Simple price.<br /><em>Sharp finish.</em></h2>
          </div>
          <p>Every job starts with the street address on your curb. Pick the refresh that fits your front-of-house look.</p>
        </div>
        <div class="service-cards">
          ${d.map((e,t)=>`
            <article class="service-card ${t===1?"service-card-accent":""}">
              <div class="card-topline"><span>${e.number}</span><span>${e.eyebrow}</span></div>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
              <div class="price-line"><strong>${e.price}</strong><span>${e.tag}</span></div>
              <a href="#quote" class="card-link">Choose this finish <span>↗</span></a>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="process-section" aria-labelledby="process-title">
        <div class="process-visual">
          <img src="${n}" alt="Prime Edge Co. logo" />
          <div class="visual-stamp">CURB<br />READY</div>
          <div class="visual-number">EDGE</div>
        </div>
        <div class="process-content">
          <div class="section-label">The Prime Edge process <span>03</span></div>
          <h2 id="process-title">From faded<br /><em>to found.</em></h2>
          <div class="process-list">
            ${p.map(([e,t,o])=>`
              <div class="process-item">
                <span class="process-number">${e}</span>
                <div><h3>${t}</h3><p>${o}</p></div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="quote-section section-dark" id="quote" aria-labelledby="quote-title">
        <div class="quote-branding">
          <img src="${n}" alt="Prime Edge Co. logo" />
          <p>YOUR HOUSE NUMBER<br /><strong>DESERVES A PRIME EDGE.</strong></p>
        </div>
        <div class="quote-form-wrap">
          <div class="section-label section-label-light">Start your curb refresh <span>04</span></div>
          <h2 id="quote-title">Tell us where<br /><em>to paint.</em></h2>
          <p class="quote-lede">Send the address, choose a finish, and we’ll use your notes to shape the right curbside quote.</p>
          <form class="quote-form" id="quote-form">
            <label> Your name <input name="name" type="text" placeholder="First and last name" required /></label>
            <label> House street address <input name="address" type="text" placeholder="The address painted on the curb" required /></label>
            <label> Preferred finish
              <select name="finish" required>
                <option value="" disabled selected>Choose a finish</option>
                <option>Standard repaint — $10</option>
                <option>Colored or custom — $20+</option>
              </select>
            </label>
            <label> Extra notes <textarea name="notes" rows="3" placeholder="Color, style, or anything we should know"></textarea></label>
            <button class="button button-primary" type="submit">Request a quote <span>↗</span></button>
            <p class="form-note">No payment today. This is a quick quote request for your curb address.</p>
            <div class="form-success" role="status" aria-live="polite"></div>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-top">
        <a class="footer-logo" href="#top"><img src="${n}" alt="Prime Edge Co." /></a>
        <div class="footer-tagline">Fresh numbers.<br /><span>Clean curb.</span><br />Prime edge.</div>
        <a class="back-top" href="#top">Back to top <span>↑</span></a>
      </div>
      <div class="creator-line">
        <span>Created by</span>
        <div class="creator-names">${u.map(e=>`<span>${e}</span>`).join("")}</div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Prime Edge Co.</span><span>Curb address painting / local service</span></div>
    </footer>
  </div>
`;const r=document.querySelector(".nav-toggle"),l=document.querySelector(".mobile-menu");r.addEventListener("click",()=>{const e=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!e)),l.setAttribute("aria-hidden",String(e)),l.classList.toggle("is-open",!e),r.querySelector("span").textContent=e?"+":"×"});document.querySelectorAll(".mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{r.setAttribute("aria-expanded","false"),l.setAttribute("aria-hidden","true"),l.classList.remove("is-open"),r.querySelector("span").textContent="+"})});document.querySelector("#quote-form").addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget,o=t.elements.name.value.trim(),i=t.querySelector(".form-success");i.textContent=`Thanks, ${o||"neighbor"} — your curb quote request is ready. Prime Edge Co. will follow up with the next step.`,t.reset(),i.classList.add("is-visible")});
