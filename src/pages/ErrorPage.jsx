import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryTitle from '../components/SecondaryTitle'

function ErrorPage() {
  return (
    <div className='error-page col'>
      <h1>404</h1>
      <SecondaryTitle text="The page does not exist"/>
      <ul>
      <li><span>Check the URL of the page.</span> Sometimes, a simple typo or spelling mistake can cause a page not to load. Make sure the correct address is entered and try again.</li>
        <li><span>Refresh the page.</span> Sometimes, a temporary glitch or network issue can prevent a page from loading. Try reloading the page by pressing F5 or clicking on the refresh button on the browser.</li>
        <li><Link href="/">Go back to the homepage.</Link> Sometimes, a link might be broken or outdated. Try going back to the page where the link was found and see if there is an updated or alternative link to the same information.</li>
        <li><span>Use a search engine.</span> Sometimes, a page might be indexed by a search engine even if it doesn't exist anymore. Try searching for keywords related to the topic of the page and see if other sources of information can be found.</li>
      </ul>
    </div>
  )
}

export default ErrorPage
