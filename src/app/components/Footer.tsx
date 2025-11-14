// We can move your icons here
const TwitterIcon = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg> )
const InstagramIcon = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.62c-3.203 0-3.57.01-4.832.069-2.73.125-3.95 1.346-4.074 4.074-.06 1.262-.069 1.63-.069 4.832s.01 3.57.069 4.832c.125 2.73 1.346 3.95 4.074 4.074 1.262.06 1.63.069 4.832.069s3.57-.01 4.832-.069c2.73-.125 3.95-1.346 4.074-4.074.06-1.262.069-1.63.069-4.832s-.01-3.57-.069-4.832c-.125-2.73-1.346-3.95-4.074-4.074C15.57 3.793 15.2 3.783 12 3.783zM12 9.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM12 16a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm6.2-6.7a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg> )
const YoutubeIcon = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> )
const MusicIcon = () => ( <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18"cy="16" r="3"></circle></svg> )

export function Footer() {
  const navLinks = ['Home', 'About', 'Services', 'Creators', 'Join', 'Contact']
  
  return (
    <footer className="px-[6%] pt-16 pb-8 text-un-text-gray border-t border-un-border mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="text-xl font-bold tracking-wide mb-4 text-white">
            UNKNWN DISCO
          </div>
          <p>Visibility. Energy. Culture.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">NAVIGATE</h4>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">CONNECT</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all">
              <TwitterIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all">
              <YoutubeIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all">
              <MusicIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-un-border pt-8 text-center text-sm">
        © {new Date().getFullYear()} UNKNWN DISCO. All rights reserved.
      </div>
    </footer>
  )
}