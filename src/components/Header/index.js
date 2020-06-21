import React from 'react'
import { Link } from 'wouter'

import useUser from 'hooks/useUser'

import "./index.css"

export default function Header() {
    const { isLogged, logout } = useUser()
    return (
        <header className="gf-header">
            {
                isLogged
                    ? <Link href=" " onClick={() => logout()}>
                        Logout
                </Link>
                    : <Link to="/login">
                        Login
                </Link>
            }

        </header>
    )
}
