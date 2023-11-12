import { Container, Row } from "react-bootstrap";
import { WelcomeImage } from "../utils/styles";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
    const navigate = useNavigate()
    const changeRoute = () => {
        navigate('/messages/conversations')
    }
    return (
        <WelcomeImage>
            <Container className="d-flex align-items-center w-100 h-100">
                <Row style={{width: '600px', color: '#fff'}}>
                    <p className="text-lg" style={{fontSize: '1.5rem'}}>Chào mừng đến với phần mềm</p>
                    <p style={{fontSize: '2rem', fontWeight: 'bold', lineHeight: '2.2rem',textTransform: 'uppercase'}}>TRỢ LÝ ẢO DÀNH CHO CÁC BẠN SINH VIÊN UET</p>
                    <p className="text-base md:text-xl" style={{fontSize: '1.25rem'}}>Tại đây các bạn sinh viên có thể tra cứu các thông tin về trường, lớp, câu lạc bộ, nghiên cứu khoa học, đặt câu hỏi thảo luận, lên kế hoạch và quản lý các sự kiện</p>
                    <button className="d-flex align-items-center justify-content-center" style={{marginLeft: '20px', borderRadius: '50px', padding: '13px 20px', width: 'fit-content'}} onClick={changeRoute}>
                    <span style={{marginRight: '10px', fontWeight: 'bold'}}>TIẾP TỤC</span>
                    <span className="d-flex align-items-center justify-content-center"><BsArrowUpRightSquareFill /></span>
                    </button>
                </Row>
            </Container>
        </WelcomeImage>
    );
};