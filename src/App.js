// local components
import Dog from './components/Dog'
import Not from './components/Not'

// hooks imports
import { useState } from 'react'

// local style
import './App.css';
import { styles } from './styles'

// external style
import { Layout } from 'antd'
const { Header, Content } = Layout



function App() {
  const [showDog, setShowDog] = useState(true)
  return (
    <div className="App">
      <Header style={styles.header}>Dog or Not?</Header>
      <Content style={styles.content}>
        {showDog ? <Dog setShowDog={setShowDog} /> : <Not setShowDog={setShowDog} />}
      </Content>
    </div>
  );
}

export default App;
