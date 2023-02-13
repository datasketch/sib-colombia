import DropDown from './Dropdown'

const ResponsiveNavbarMenu = ({ nav, menuIsActive, setMenuIsActive }) => {
  return (
    <ul className={`lg:hidden fixed w-3/4 top-0 h-full bg-white z-40 pt-14 px-8 space-y-6 duration-500 ease-in ${menuIsActive ? 'right-0' : '-right-full'}`}>
      <div className='border-b border-black'>
        <button onClick={() => setMenuIsActive(false)} type='button' className='w-7 h-7 absolute right-8 top-4 cursor-pointer'>
          <img src='images/icons/Icon X feather-menu.svg' alt='close icon' />
        </button>
      </div>
      {
        nav.map((item, i) => (
          <DropDown key={i} >
            <DropDown.Button className='font-lato text-sm' {...item} arrow={!!item.childs?.length} src={'/images/icons/icon-up-arrow.svg'}>
              {item.label}
            </DropDown.Button>
            <DropDown.Items className=''>
              {item.childs?.map((el, key) =>
                <DropDown key={'SUB-' + key} >
                  <DropDown.Button className='font-lato text-sm' arrow={!!item.children?.length} href={el.href} src={'/images/icons/icon-up-arrow.svg'}>
                    {el.label}
                  </DropDown.Button>
                  <DropDown.Items className=''>
                    {el.children?.map(ch =>
                      <DropDown.Item key={ch.label} className='text-black  py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full flex justify-between' color={item.color} href={ch.href}>

                        {ch.label}
                        {ch.children && <img src={item.icon} alt='icon arrow' />}
                      </DropDown.Item>)}
                  </DropDown.Items>
                </DropDown>
              )
              }
            </DropDown.Items>
          </DropDown>
        ))
      }
    </ul>

  )
}

export default ResponsiveNavbarMenu
