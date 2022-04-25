import React, { useState, useEffect} from 'react';

// ant design
import {Empty} from 'antd'

// routers stuff
import { useNavigate } from "react-router-dom";

// redux pakage imports
import {useSelector, useDispatch} from "react-redux";

// global selectors
import {selectGlobalValue} from '../App/selectors'
import {onChangeGlobalValue} from '../App/actions';

// components
import CheckoutPage from '../../components/CheckOutPage'

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const currentMeal = useSelector(selectGlobalValue('currentMeal'))
  const shipmentInformation = useSelector(selectGlobalValue('shipmentInformation'))

  useEffect(() => {
    if (!currentMeal || !shipmentInformation) {
      navigate('/')
    }
    return () => {
      dispatch(onChangeGlobalValue({ target: { id: 'currentMeal', value: null } }))
      dispatch(onChangeGlobalValue({ target: { id: 'shipmentInformation', value: null } }))
    }
  },[])

  return ((currentMeal && shipmentInformation) ? 
    <CheckoutPage shipmentInformation={shipmentInformation} currentMeal={currentMeal} navigate={navigate}/> :
    <Empty />
    );
};

export default OrderDetails;