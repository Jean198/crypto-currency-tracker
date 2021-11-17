import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css'

export default function Layout({children, title="Crypto Tracker"}) {
  return (
    <div className="layout">
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        
            <header className='header'>
                <Link href='/' passHref>
                    <a>
                        <h1>JN</h1>
                    </a>
                </Link>

                
            </header>

            
        

        <main>{children}</main>
      
    </div>
  )
}
