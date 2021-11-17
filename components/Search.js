import styles from "../styles/Search.module.css"

export default function SearchBar({...rest}) {
  return (


  
     
     <>
     <div className="title">Crypto-Currency Tracker</div>
     <div className={styles.coin_search}>
      
      <input className={styles.coin_input} {...rest}/>
      
    </div>
     </>
     
  
    
   
  )
}
