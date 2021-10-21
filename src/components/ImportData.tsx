import styled from "styled-components"
import DropFile from "./DropFile"
import Layout from "./Layout"

const Box = styled.div`
    color: #66fcf1;
    text-align: center;
    position: relative;
    padding: 30px;
    border: 1px solid #66fcf1;
    background: rgba(52, 94, 98, 0.4);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 400px;
    &:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        top: -2px;
        left: -2px;
        position: absolute;
        border-top: 4px solid #66fcf1;
        border-left: 4px solid #66fcf1;
      }
    &:after {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        top: -2px;
        right: -2px;
        border-top: 4px solid #66fcf1;
        border-right: 4px solid #66fcf1;
    }
`

const InBox = styled.div`
    &:before{
        display: block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: -2px;
  left: -2px;
  border-bottom: 4px solid #66fcf1;
  border-left: 4px solid #66fcf1;
    }

    &:after{
        display: block;
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: -2px;
  right: -2px;
  border-bottom: 4px solid #66fcf1;
  border-right: 4px solid #66fcf1;
    }
`

const Upload = styled.button`
    text-shadow: 0 0 10px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 20px #2eb5db;
`

const ImportData = () => (
    <Layout>
        <div className="flex justify-center lg:justify-start pt-12">
            <Box className="flex-col pt-12">
                <InBox className="flex justify-between">
                    <h1 style={{ opacity: "0.6" }}>DROP FILE INPUT</h1>
                    <Upload>[ Upload ]</Upload>
                </InBox>
                <DropFile />
            </Box>
        </div>
    </Layout>
)
export default ImportData
