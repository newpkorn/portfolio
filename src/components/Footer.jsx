const Footer = () => {
  return (
    <section id="footer">
      <div className="pb-12 text-center text-sm text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} Made with&nbsp;
          <a
            href="https://material-tailwind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Material Tailwind
          </a>
          &nbsp;by newpk.
        </p>
        <p className='pt-1'>All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
