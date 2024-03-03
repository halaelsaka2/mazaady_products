
const defaultNavItems = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Blog',
        url: '/',
    },
    {
        id: 3,
        title: 'Gifts',
        url: '/',
    },
];


const NavBar = ({ appenClass }) => (
    <nav className={`hidden xl:flex justify-between gap-20 text-[#828282] h-auto ${appenClass}`}>
        {defaultNavItems.map(({
            title, id, url
        }) => (
            <a key={id} className='font-bold hover:text-[#D20653] hover:border-b-4 hover:border-[#D20653] rounded py-5' href={url}>
                {title}
            </a>
        ))}
    </nav>
);

export default NavBar;
