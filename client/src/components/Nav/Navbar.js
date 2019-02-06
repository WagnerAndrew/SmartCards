import React from 'react'
import { Navbar, NavItem} from 'react-materialize'


export default () => (

        <Navbar className="red darken-3" brand="SmartCards" left>
                <NavItem href="/">Libraries</NavItem>
                <NavItem href="/addLibrary">Add Library</NavItem>
                <NavItem href="/addCard">Add Card</NavItem>
        </Navbar>

)
