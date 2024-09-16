import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => ({

    cardData: state.cardItems

})

const mapDispatchToprops = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToprops)(Header)