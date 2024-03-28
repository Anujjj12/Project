import { productDescription } from "@/common/data";
import { Button, Card, Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { productDetails } from "./services";
const { Meta } = Card;

const ProductDesc = () => {
  const router = useRouter();
  const { query } = router || {};
  const { id } = query || {};
  const productMap = productDescription[id];
  return (
    <>
      <Header />
      <Card className="margin-left-right-50px margin-top-bottom-50px">
        <Row gutter={[50, 50]}>
          {productMap?.typeList.map((productDesc) => {
            return (
              <>
                <Col span={8} className="flex flex-column align-center">
                  <div>
                    <img src={productDesc.img} height="400px" width="100%" />
                  </div>
                  <div>
                    <Button
                      type="primary"
                      size="large"
                      className="margin-top-10px"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Col>
                <Col span={16}>
                  <h1 className="mb-0">{productDesc.title}</h1>
                  <p className="mt-0 description">{productDesc.description}</p>
                  <div>
                    Price: <b>{productDesc.price}</b>
                  </div>
                  <div>
                    Specifications: <div></div>
                    <ul>
                      {productDesc?.specifications.map((item) => {
                        return <li className="margin-left-10px">{item}</li>;
                      })}
                    </ul>
                  </div>

                  <div>
                    Vendor: <b>{productDesc.vendor}</b>
                  </div>
                  <div>
                    Model Number: <b>{productDesc.modelNo}</b>
                  </div>
                  <div>
                    Features: <b>{productDesc.features}</b>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Card>
      <Footer />
    </>
  );
};

export default ProductDesc;
