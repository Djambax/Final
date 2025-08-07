import Footer from './src/components/Footer'

const bricks = [
  Footer
]

const config = {
  appId: 'f69bc161-6b19-4ff6-adea-85d7e76fa4cb',
  apiKey: '2d0622e5-7a48-4425-9931-7ef11f3e6d2d',
  bricks: bricks,
  pageTypes: [{
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: 'PUBLISHED',
    getDefaultContent: () => []
  }],
  logo: '/vite.svg', // Ou ton logo
  contentClassName: 'content',
  renderLocalLink: ({ href, children, className, activeClassName, isActive }) => (
    <Link to={href} className={isActive ? activeClassName : className}>
      {children}
    </Link>
  ),
}

export default config