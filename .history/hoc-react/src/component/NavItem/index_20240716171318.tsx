
type TNavbarItem={
    label: string;
    type?: string;
}

const NavbarItem = ({label, type=" "}:TNavbarItem) => {
  return (
    <div>
        <button className='nav-link'>
            <div className={`text-sm  ${type}`}> {label}</div>
        </button>
    </div>
  )
}

export default NavbarItem