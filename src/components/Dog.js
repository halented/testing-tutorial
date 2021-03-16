import dog from '../images/dog.png'
import { styles } from '../styles'

import { Card } from 'antd'

function Dog({ setShowDog }) {
    return (
        <Card
            title="It's a dog!"
            onClick={() => setShowDog(prev => !prev)}
            style={styles.card}>
            <img src={dog} alt="My dog, Beany" style={styles.mainPic} />
        </Card>
    )
}

export default Dog