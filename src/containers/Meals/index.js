
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

// toster
import { toast } from 'react-toastify';
// redux imports
import { useDispatch, useSelector} from "react-redux";
import {getMeals, onChangeValue} from './actions'
import {selectMealsValue} from './selectors'

// global actions
import {onChangeGlobalValue} from '../App/actions'

// global selectors
import {selectGlobalValue} from '../App/selectors'

// commonUtils
 import {getIngredient} from '../../utils/commonUtils'

 // components
import MealsCardList from '../../components/MealsCardList'

// ant design 
import { Layout , Input, Card, Modal, Descriptions,  Row, Col, Skeleton } from 'antd';
const { Header, Content} = Layout;
const { Meta } = Card;
const { Search } = Input;


const Meals = () => {
  // selectors and actionCreator
  const dispatch = useDispatch()
  const notify = useSelector(selectMealsValue('notify'))
  const mealSearchString = useSelector(selectMealsValue('mealSearchString'))
  const currentMeal = useSelector(selectGlobalValue('currentMeal'))
  const mealsList = useSelector(selectMealsValue('mealsList'))
  const loading = useSelector(selectMealsValue('loading'))
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // get meals
  useEffect(() => {
    if (mealSearchString) {
      dispatch(getMeals())
      dispatch(onChangeGlobalValue({ target: { id: 'currentMeal', value: null } }))
    }
  },[dispatch])

  // common notify
  useEffect(() => {
    if (notify) {
      toast[notify.type](notify.message, {
        position: toast.POSITION.TOP_RIGHT
      });
      dispatch(onChangeValue({ target: { id: 'notify', value: null } }))
    }
  },[notify, dispatch])

  const onClickMealCard = (item) => {
    setVisible(true)
    dispatch(onChangeGlobalValue({ target: { id: 'currentMeal', value: item } }))
  } 


  return(
    <Layout style={{ height: '100%'}} >
      <Header style={{color: 'black', backgroundColor: 'antiquewhite', textAlign: 'center'}}><h1> 🍔 Meals Recepi!</h1></Header>
      <Layout style={{height: '100%',  backgroundColor: 'antiquewhite'}}>
        <Content style={{padding: '20px'}}  >
          <Row align={'middle'} justify="space-evenly" gutter={[16, 24]}>
            <Col span={16}>
                <Search
                placeholder="Search Meals"
                loading={loading}
                size="large"
                value={mealSearchString}
                onChange={({target}) => dispatch(onChangeValue({ target: { id: 'mealSearchString', value: target.value } }))}
                onSearch={() => mealSearchString && dispatch(getMeals())}
                />
            </Col>
            <Col span={20}>
              {(loading) ? ( <Skeleton/>) : (<MealsCardList mealsList= {mealsList} onClickMealCard={onClickMealCard}/>)}
            </Col> 
          </Row>

          {/* modals */}
          <Modal title={'Meal Details'} centered visible={visible}  width={1000} okText= "Checkout" 
            onOk={() => { navigate('/shipment')}}
            onCancel={() => setVisible(false)}>
              <Row>
                <Col span={8}>
                  <Card className="cardHoverEffect"
                  style={{ width: 300, padding: '0' }}
                  cover={<img alt="example" src={(currentMeal && currentMeal.strMealThumb) ? currentMeal.strMealThumb : ''} />}>
                    <Meta title={ (currentMeal && currentMeal.strMeal) ? currentMeal.strMeal : ''}/>
                  </Card>
                </Col>
                <Col span={16}>
                  <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="Ingredient" >{(currentMeal) ? getIngredient(currentMeal) : ''}</Descriptions.Item>
                  </Descriptions>
                  <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="Instructions">{(currentMeal && currentMeal.strInstructions) ? currentMeal.strInstructions : ''}</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Meals;