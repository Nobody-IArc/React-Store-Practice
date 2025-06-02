import { useMemo } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { type CartItem, type CartArray, increase, plusCount, minusCount } from '../data/store';

interface CartState {
    cart: CartArray;
    user: { id: number, name: string, job: string };
}

const CartPage = () => {
    const cartState = useSelector((state: CartState) => state);

    const getTotalAmount = useMemo(() => {
        return cartState.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartState.cart]);

    const userInfo = useSelector((state) => state);
    console.log(userInfo);

    const dispatch = useDispatch();

    return (
        <Container>
            <h2>CART</h2>
            <Table bordered>
                <thead>
                <tr>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {cartState.cart.cart.map((item: CartItem) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Button className='warning' style={{ marginRight: '10px' }} onClick={() => {
                                dispatch(minusCount(item.id));
                            }}>-</Button>
                            <Button className='warning' style={{ marginRight: '10px' }} onClick={() => {
                                dispatch(plusCount(item.id));
                            }}>+</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Row>
                <Col>
                    <h5>총 상품 금액 : {getTotalAmount} 원 </h5>
                </Col>
                <Col>
                    <Button variant='success' onClick={() => {
                        dispatch(increase(10))
                    }}>주문하기</Button>
                    <div>{cartState.user.id}</div>
                </Col>
            </Row>
        </Container>
    );
}

export default CartPage;