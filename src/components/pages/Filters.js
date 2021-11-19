import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductByCategory } from '../../store/shop-actions';

function Filters(props) {

    // const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const categories = useSelector(state => state.product.categories);

    const onSelectChange = (e) => {
        if(e.target.value === "-1"){
            dispatch(getAllProducts());
        } else {
            dispatch(getProductByCategory(e.target.value));
        }
    }

    return (
        <div>
            <h3>Filters</h3>

            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as='select'
                                name="category"
                                onChange={(e) => onSelectChange(e)}>
                                <option value={-1}>All</option>
                                {categories.map((c) => {
                                    return <option key={c} value={c}>{c}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Filters;