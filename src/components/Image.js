import dog from '../images/dog.png'
import not from '../images/not.png'
import { styles } from '../styles'


function Dog({ alt, showDog }) {

    const src = () => {
        return showDog ? dog : not
    }

    return (
        <img
            src={src()}
            alt={alt}
            style={styles.mainPic}
        />
    )
}

export default Dog