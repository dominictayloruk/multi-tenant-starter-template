import { Footer } from '@/components/footer';
import { LandingPageHeader } from '@/components/landing-page-header';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: 'Home', href: '/' },
          { title: 'Features', href: '/#features' },
          { title: 'Pricing', href: '/#pricing' },
          { title: 'Contact Us', href: '/#contact' },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Dominic Taylor"
        builtByLink="https://dominictaylor.dev/"
        githubLink="https://github.com/dominictayloruk/multi-tenant-starter-template/"
        twitterLink="https://twitter.com/dominictayloruk/"
        linkedinLink="https://linkedin.com/in/dominictayloruk/"
      />
    </div>
  );
}
