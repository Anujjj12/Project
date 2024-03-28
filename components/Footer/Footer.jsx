import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="footer margin-top-100px">
      <Row className="flex align-start justify-center">
        <Col span={6}>
          <b>Products</b>
        </Col>
        <Col span={6}>
          <b>Partners</b>
        </Col>
        <Col span={6}>
          <b>Company</b>
          <div className="m-10">About Us</div>
        </Col>
        <Col span={6}>
          <b>Contact Us Now</b>
          <div className="flex align-start m-10">
            <WhatsAppOutlined />
            <div className="margin-left-10px">
              Whatsapp
              <div>+91 9012344556</div>
            </div>
          </div>
          <div className="flex align-start m-10">
            <MailOutlined />
            <div className="margin-left-10px">
              Customer Support
              <div>prashilshah@gmail.com</div>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div>
            <img src="/images/logo1.jpeg" height="100px" width="100px" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
