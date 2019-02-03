import React from 'react'
// import { Navbar, NavItem, Dropdown } from 'react-materialize'
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
                        <NavItem href="/">Libraries</NavItem>
                        <NavItem href="/add">Add Cards</NavItem>
                </Navbar>
        </>
)
