import dog from '../images/dog.png'
import { styles } from '../styles'

function Dog() {
    return (
        <img src={dog} alt="My dog, Beany" style={styles.mainPic} />
    )
}

export default Dog
