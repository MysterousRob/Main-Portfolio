import React from 'react'
import { Link } from 'react-router-dom'
import { footerNavData } from './FooterData'

const FooterNav = () => {
  return (
    <div className="pl-12 bg-black flex">
        {/* You were going straight into footerNavData.links, which is one too deep to access title */}

        {footerNavData.map((nav, index) => (
        <div key={index} className='p-2.5'>
            <h3 className='text-white'>
                {nav.header}
            </h3>
            {nav.links.map((link, i) => (
                <Link key={i} to={link.href}>
                    <p className="text-white">
                        {link.title}
                    </p>
                </Link>
            ))}
        </div>
        ))}
    </div>
  )
}

export default FooterNav