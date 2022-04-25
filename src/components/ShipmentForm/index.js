// ant design 
import {
    Form,
    Input,
    InputNumber,
    Row,
    Col,
    Button,
    Layout,
    Divider
  } from 'antd';

const ShipmentForm = ({onFinish}) => {

  const [form] = Form.useForm();

    return (
        <Layout  style={{ height: '100%',  backgroundColor: 'antiquewhite'}}>
            <Form
            form={form}
            name="shipmentInfo"
            onFinish={onFinish}
            scrollToFirstError
            style={{ height: '100%'}}
            requiredMark={false}
            layout={'vertical'}
            >
                <Row align={'middle'} justify="space-evenly">
                    <Col span={10}> 
                    <Divider><h1>CONTACT INFORMATION</h1></Divider>
                    <Form.Item name="name" label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid name!',
                            whitespace: true,
                            min: 5
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="emailId" label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },{
                            required: true,
                            message: 'Please enter your valid E-mail!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your valid phone number!',
                            min: 10,
                            max: 10
                        },
                    ]}>
                        <Input addonBefore={'+91'} style={{width: '100%'}}
                    />
                    </Form.Item>
                    
                    <Divider><h1>SHIPING INFORMATION</h1></Divider>
                    <Form.Item  name="address" label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid address',
                            min: 15,
                        },
                    ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item name="district" label="District"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid district!',
                            whitespace: true,
                            min: 3,
                        },
                    ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="state" label="State"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid state!',
                            whitespace: true,
                            min: 3,
                        },
                    ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="zipcode" label="Zipcode"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid zipcode',
                        },
                    ]}
                    >
                        <InputNumber style={{ width: '100%',}}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"> PURCHASE </Button>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Layout>
    )
}

export default ShipmentForm;