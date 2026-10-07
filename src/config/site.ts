// Site-wide labels live here so they can be renamed in one place.
export const site = {
  name: 'Steven Gotzler',
  description: 'Steven Gotzler: research, pedagogy, and lab work on games, labor, and computation.',
  nav: [
    // `section` names the page's colour section (see tokens.css)
    { label: 'Research', href: '/research', section: 'research' },
    { label: 'Pedagogy', href: '/pedagogy', section: 'pedagogy' },
    { label: 'Lab', href: '/lab', section: 'lab' }, // working label, may change
  ],
  cv: '/files/Gotzler_CV.pdf', // linked from the About page only
  footer: [
    { key: 'email', text: 'sgotzler@unc.edu', href: 'mailto:sgotzler@unc.edu' },
    { key: 'github', text: 'sgotzler', href: 'https://github.com/sgotzler' },
  ],
};
