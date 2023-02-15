import viteLogo from './assets/vite-logo.png'
import reactLogo from './assets/react-logo.png'
import PWALogo from './assets/pwa_dark.svg'

const App = () => {
  return (
    <div id="app">
      <div id="logos">
        <img src={viteLogo} />
        <img id="logo-spin" src={reactLogo} />
        <img src={PWALogo} />
      </div>
      <b>Vite</b> funcionando con <b>React</b> y <b>PWA</b>.
    </div>
  )
}

export default App;