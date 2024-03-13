import { MenuItem, SubMenu } from '@szhsin/react-menu'

export default function MenuBoxItem ({ child }) {
  const { children } = child

  console.log(child)
  console.log('ANGELA')

  return (
    !children || !children.length
      ? (
        <MenuItem value={child.label} aria-label={child.slug}> {child.label} </MenuItem>
        )
      : (
        <SubMenu label={child.label} itemProps={{ 'aria-label': child.slug }} openTrigger="undefined">
          {child.children.map((grandChild, index) => (
            <MenuBoxItem key={index} child={grandChild} />
          ))}
        </SubMenu>
        )
  )
}
