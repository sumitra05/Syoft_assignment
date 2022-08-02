import { Button, Checkbox, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import useCustomers from "../_actions/customerActions";

function Home() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { productList } = useCustomers();
  
    const onFinish = (values) => {
      const data = {
        productName: values.productName,
        productPrice: values.productPrice,
        productDescription: values.productDescription,
      };
      dispatch(productList(data)).then((res) => {
        if (res.payload.status) {
          message.success(res.payload.message);
        } else {
          message.error(res.payload.message);
        }
      });
    };
    return (
        <div className="page-wrapper">
            <Row justify="center">
            <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={6}>
                <h2>Product List</h2>
                <Form
                form={form}
                name="productList"
                layout="vertical"
                onFinish={onFinish}
                scrollToFirstError
                >
                <Form.Item
                    name="productName"
                    label="Product name"
                    rules={[
                    {
                        required: true,
                        message: "Please input your product name!",
                    },
                    ]}
                >
                    <Input
                    style={{
                        width: "100%",
                    }}
                    />
                </Form.Item>

                <Form.Item
                    name="productPrice"
                    label="Product price"
                    rules={[
                    {
                        required: true,
                        message: "Please input your product price!",
                    },
                    ]}
                >
                    <Input
                    style={{
                        width: "100%",
                    }}
                    />
                </Form.Item>

                <Form.Item
                    name="productDescription"
                    label="Product description"
                    rules={[
                    {
                        required: true,
                        message: "Please input your product description!",
                    },
                    ]}
                >
                    <Input
                    style={{
                        width: "100%",
                    }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                </Form>
            </Col>
        </Row>
    </div>
    )
}

export default Home;
