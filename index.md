---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Awesome Language Setups"
  text: "by ProgSoc"
  tagline: Your guide to streamlined development environments and best practices for various programming languages.
  image:
    src: /images/logo.svg
    alt: ProgSoc Logo
  actions:
    - theme: brand
      text: Explore Setups
      link: /setups
    - theme: alt
      text: Contribute
      link: /contributing

features:
  - title: Built by UTS Students
    details: This resource is created and maintained by students at UTS, ensuring the setups are relevant to your learning.
  - title: Tailored for ProgSoc Workshops
    details: Find pre-configured environments designed to get you ready for ProgSoc programming workshops quickly and easily.
  - title: Community Driven
    details: Join the ProgSoc community and contribute your knowledge to help fellow UTS students.
  - title: Comprehensive Setup Guides
    details: We provide step-by-step instructions for macOS, Linux, and Windows to ensure everyone can follow along.
  - title: Focus on Practical Tools
    details: Discover the essential tools and best practices used in UTS programming courses and workshops.
  - title: Always Improving
    details: We continuously update and add new language setups and guides based on community needs and workshop requirements.
---

<style>
.features {
  margin-top: 4rem;
}
.features > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0;
  list-style: none;
}
.features li {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
}
.features h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
</style>

<div class="features">
  <h3>Why Awesome Language Setups?</h3>
  <ul>
    <li v-for="{ title, details } in $frontmatter.features" :key="title">
      <h3>{{ title }}</h3>
      <p>{{ details }}</p>
    </li>
  </ul>
</div>
