import React from 'react'
import { Navbar, NavItem, Dropdown } from 'react-materialize'


export default () => (
        <>
                <Navbar className="red darken-3 flow-text" brand="SmartCards" left>
                        {/* <Dropdown trigger={<NavItem>Libraries</NavItem>}>
                                <NavItem className="dropText" onClick={() => console.log('test click')}>JavaScript</NavItem>
                                <NavItem divider />
                                <NavItem onClick={() => console.log('test click')}>HTML</NavItem>
                                <NavItem divider />
                                <NavItem onClick={() => console.log('test click')}>CSS</NavItem>
                        </Dropdown> */}
                        <NavItem onClick={() => console.log('test click')}>Libraries</NavItem>
                        <NavItem onClick={() => console.log('test click')}>Add Cards</NavItem>
                </Navbar>
        </>
)
