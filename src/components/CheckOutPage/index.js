// ant design 
import {
    Row,
    Col,
    Button,
    Result,
    Card,
    Descriptions,
    Space
  } from 'antd';

const { Meta } = Card;

const CheckoutPage = ({shipmentInformation, currentMeal, navigate}) => {
    return (
        <Result
        status="success"
        title="Successfully Purchased Meal!!!"
        extra={[
          <Row gutter={[16, 24]} align={'middle'} justify="space-evenly" > 
            <Col span={8}>
              <Card
              className="cardHoverEffect"
              cover={<img alt="example" src={currentMeal.strMealThumb} />}>
              <Meta title={currentMeal.strMeal}/>
              </Card>
            </Col>
            <Col span={10}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Descriptions title="CONTACT INFORMATION" contentStyle={{backgroundColor: '#fafafa'}} column={1} bordered>
                <Descriptions.Item label="Name">{shipmentInformation.name}</Descriptions.Item>
                <Descriptions.Item label="Email"> {shipmentInformation.emailId}</Descriptions.Item>
                <Descriptions.Item label="Phone Number"> {shipmentInformation.phoneNumber}</Descriptions.Item>
              </Descriptions>
              <Descriptions title="SHIPING INFORMATION" contentStyle={{backgroundColor: '#fafafa'}} column={1} bordered>
                <Descriptions.Item label="Address">{shipmentInformation.address}</Descriptions.Item>
                <Descriptions.Item label="District"> {shipmentInformation.district}</Descriptions.Item>
                <Descriptions.Item label="state"> {shipmentInformation.state}</Descriptions.Item>
                <Descriptions.Item label="Zipcode"> {shipmentInformation.zipcode}</Descriptions.Item>
              </Descriptions>
              <Button type="primary" key="goToMeals" onClick={() => navigate('/')}>
                Go to Meals Search
              </Button>
              </Space>
            </Col>
          </Row>
        ]}
      />
    )
}

export default CheckoutPage;