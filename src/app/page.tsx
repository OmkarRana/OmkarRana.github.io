import data from "@/data/portfolio.json";
import { Header, Entrance, ContactForm } from "@/components/interactions";
import { WorkExperience } from "@/components/work-experience";
import { workExperiences } from "@/lib/experience";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUpRight, Award, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const person = {
    "@context": "https://schema.org", "@type": "Person", name: data.name,
    jobTitle: data.title, email: data.email,
    sameAs: [data.links.github, data.links.linkedin],
    worksFor: { "@type": "Organization", name: data.experience[0].company },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="reading-column">
        <section id="about" aria-labelledby="profile-name" className="profile-section">
          <Entrance>
            <div className="identity">
              <Avatar size="profile"><AvatarFallback>{data.initials}</AvatarFallback></Avatar>
              <div>
                <h1 id="profile-name">{data.name}</h1>
                <p className="profile-role">{data.title}</p>
              </div>
            </div>
            <div className="profile-context">
              <div><span className="context-label">Currently</span><span className="current-company"><span className="status-dot" aria-hidden="true" />{data.experience[0].company}</span></div>
              <div><span className="context-label">Focused on</span><span>{data.focusTechnologies.slice(0, 2).join(" & ")}</span></div>
            </div>
            <p className="profile-summary">{data.summary}</p>
            <div className="profile-availability"><span className="status-dot" aria-hidden="true" />{data.availability}</div>
            <div className="profile-actions">
              <div className="social-actions">
                <Button variant="muted" size="icon" nativeButton={false} render={<a href={data.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" />}><Github /></Button>
                <Button variant="muted" size="icon" nativeButton={false} render={<a href={data.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" />}><Linkedin /></Button>
                <Button variant="muted" size="icon" nativeButton={false} render={<a href={`mailto:${data.email}`} aria-label="Email Omkar" />}><Mail /></Button>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <Button variant="ghost" nativeButton={false} render={<a href={data.resumeUrl} target="_blank" rel="noreferrer" />}>View resume<ArrowUpRight data-icon="inline-end" /></Button>
              <Button variant="outline" nativeButton={false} render={<a href={data.resumeUrl} download="Omkar-Rana-Resume.pdf" aria-label="Download resume" />}><span className="download-label">Download</span><Download data-icon="inline-end" /></Button>
            </div>
          </Entrance>
        </section>

        <section id="experience" className="portfolio-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Work experience</h2>
          <WorkExperience experiences={workExperiences} />
        </section>

        <section id="skills" className="portfolio-section" aria-labelledby="skills-title">
          <h2 id="skills-title">Tools I work with</h2>
          <div className="skill-list">
            {data.skills.map(group => (
              <div className="skill-row" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-badges">{group.items.map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-section" aria-labelledby="projects-title">
          <h2 id="projects-title">Selected projects</h2>
          <p className="section-intro">A few things I’ve built with computer vision.</p>
          <div className="project-list">
            {data.projects.map(project => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle><h3>{project.name}</h3></CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent><ul className="project-details">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></CardContent>
                <CardFooter><div className="skill-badges">{project.technologies.map(tech => <Badge variant="outline" key={tech}>{tech}</Badge>)}</div>
                  {(project.repoUrl || project.demoUrl) && <div className="project-links">{project.repoUrl && <Button variant="link" nativeButton={false} render={<a href={project.repoUrl} target="_blank" rel="noreferrer" />}>Repository<ArrowUpRight data-icon="inline-end" /></Button>}{project.demoUrl && <Button variant="link" nativeButton={false} render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}>Demo<ArrowUpRight data-icon="inline-end" /></Button>}</div>}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="portfolio-section" aria-labelledby="credentials-title">
          <h2 id="credentials-title">Certifications</h2>
          <div className="credential-list">{data.certifications.map(cert => (
            <div className="credential-row" key={cert.name}>
              <Award aria-hidden="true" className="credential-icon" />
              <div><Button variant="text" nativeButton={false} render={<a href={cert.url} target="_blank" rel="noreferrer" />}>{cert.name}<ArrowUpRight data-icon="inline-end" /></Button>
                <p>{cert.issuer}{"credentialId" in cert && <span className="credential-id"> · ID: {cert.credentialId}</span>}</p>
              </div>
            </div>
          ))}</div>
        </section>

        <section className="portfolio-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div className="education-row"><GraduationCap aria-hidden="true" /><div><h3>{data.education.institution}</h3><p>{data.education.degree}</p><span>{data.education.start} — {data.education.end}<span className="education-location"> · {data.education.location}</span></span></div></div>
        </section>

        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Let’s work together.</h2>
          <p className="contact-copy">I’m looking for my next opportunity in data engineering. If you have a role in mind, I’d love to hear from you.</p>
          <Button variant="outline" size="lg" nativeButton={false} render={<a href={`mailto:${data.email}`} />}><Mail data-icon="inline-start" />{data.email}<ArrowUpRight data-icon="inline-end" /></Button>
          <ContactForm email={data.email} />
        </section>
        <Separator />
        <footer className="footer"><span>© {new Date().getFullYear()} {data.name}</span><Button variant="muted" size="sm" nativeButton={false} render={<a href="#about" />}>Back to top<ArrowDown className="rotate-180" data-icon="inline-end" /></Button></footer>
      </main>
    </>
  );
}
