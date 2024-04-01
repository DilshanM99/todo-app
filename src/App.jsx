import { Toaster } from 'react-hot-toast';
import './App.css'
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import HeaderTitle from './components/HeaderTitle'
import styles from './styles/modules/app.module.scss';
function App() {

  return (
    <>
    <div className="container">
      <HeaderTitle title="TODO APP" />
      <div className={styles.app__wrapper}>
        <AppHeader/>
        <AppContent/>
      </div>
    </div>
    <Toaster toastOptions={{
      position: "bottom-right",
      style : {
        fontSize: '1.5rem'
      }
    }} />
    </>
  )
}

export default App
