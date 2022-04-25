import React, {useEffect} from 'react';
// routers
import { useNavigate } from "react-router-dom";

// redux stuff
import { useDispatch, useSelector} from "react-redux";

// global actions
import {onChangeGlobalValue} from '../App/actions'

// global selectors
import {selectGlobalValue} from '../App/selectors'

//Components
import ShipmentForm from '../../components/ShipmentForm'


const Shipment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const currentMeal = useSelector(selectGlobalValue('currentMeal'))
  
  useEffect(() => {
    if (!currentMeal) {
      navigate('/')
    }
  },[currentMeal])

  const onFinish = (values) => {
    dispatch(onChangeGlobalValue({ target: { id: 'shipmentInformation', value: values } }))
    navigate('/orderDetails')
  };

  return (
    <ShipmentForm onFinish={onFinish} />
  );
};

export default Shipment;