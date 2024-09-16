import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeToCart} from '../components/service/actions/Action'


const mapStateToProps = state => ({

  cardData: state.cardItems

})

const mapDispatchToprops = dispatch => ({

  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler: data=> dispatch(removeToCart(data))

})

export default connect(mapStateToProps, mapDispatchToprops)(Home)