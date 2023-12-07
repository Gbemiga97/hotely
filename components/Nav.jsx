import Link from "next/link"


const links = [
    {
        path: '/',
        pathname: "Home"
    },
    {
        path: '/',
        pathname: "Find Hotel"
    },
    {
        path: '/',
        pathname: "About Us"
    },
    {
        path: '/',
        pathname: "Contact Us"
    },
]

const Nav = ({containerStyles, listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <ul className={`${listStyles}`}>
            {
                links.map(({path, pathname}, i) => (
                    <li key={i}>
                        <Link
                        href={path}
                        >
                        {pathname}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Nav