// local components
import Image from './components/Image'

// hooks imports
import { useState } from 'react'

// local style
import './App.css';
import { styles } from './styles'

// external style
import { Layout, Card } from 'antd'
const { Header, Content } = Layout



function App() {
  const [showDog, setShowDog] = useState(true)
  const [title, setTitle] = useState("It's a dog!")

  const swapStates = () => {
    if (showDog) {
      setShowDog(false)
      setTitle('Not a dog.')
    }
    else {
      setShowDog(true)
      setTitle("It's a dog!")
    }
  }

  return (
    <div className="App">
      <Header style={styles.header}>Dog or Not?</Header>
      <Content style={styles.content}>
        <Card
          title={title}
          onClick={swapStates}
          style={styles.card}>
          {showDog ?
            <Image alt='My dog, Beany' showDog={showDog} />
            :
            <Image alt='Rainbow frowny face' showDog={showDog} />
          }
        </Card>
      </Content>
    </div>
  );
}

export default App;
