import not from '../images/not.png'
import { styles } from '../styles'

import { Card } from 'antd'

function Not({ setShowDog }) {
    return (
        <Card
            title='No dog here'
            onClick={() => setShowDog(prev => !prev)}
            style={styles.card}>
            <img src={not} alt='rainbow frowny face' style={styles.mainPic} />
        </Card>
    )
}

export default Not
