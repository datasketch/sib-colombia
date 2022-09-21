import { ClickAwayListener, styled, Tooltip, tooltipClasses } from '@mui/material'
import { useState } from 'react'

const CustomTooltip = ({ title, children, placement }) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1]

    }
  }))

  return (<>
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div className='inline-block'>
        <LightTooltip
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={title}
          placement={placement || 'right-start'}
          classes={{
            maxHeight: '650px',
            maxWidth: '650px',
            overflowY: 'scroll',
            backgroundColor: ' #fff'
          }}
        >
          <button className='inline-block' onClick={handleTooltipOpen}>{children}</button>
        </LightTooltip>
      </div>
    </ClickAwayListener >
  </>
  )
}

export default CustomTooltip
