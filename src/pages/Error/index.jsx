import React from 'react'
import { Link } from 'react-router-dom'


function Error() {
    return (
        <>
         <span>Erreur 404</span>
        <div><Link to="/">Retourner à la page d'accueil</Link></div>
        </>
    )
}

export default Error